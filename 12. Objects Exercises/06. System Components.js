function SystemCmponents(input) {
    let result = new Map;
    for(let line of input){
        let [system, component, subcomponent] = line.split(' | ');
        if(!result.has(system)){
            result.set(system, new Map);
        }
        if(!result.get(system).has(component)){
            result.get(system).set(component, [])
        }
        result.get(system).get(component).push(subcomponent);
    }

    let systems = [...result.keys()].sort((a, b) => sortSystemComparator(a, b, result));

    for(let system of systems){
        console.log(system);
        let components = [...result.get(system).keys()].sort((s1, s2) => result.get(system).get(s2).length - result.get(system).get(s1).length);
        for(let component of components){
            console.log(`|||${component}`);
            for(let subcomponent of result.get(system).get(component)){
                console.log(`||||||${subcomponent}`);
            }
        }
    }


    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }
}

SystemCmponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
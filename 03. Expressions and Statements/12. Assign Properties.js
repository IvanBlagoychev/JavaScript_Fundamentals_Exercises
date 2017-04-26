function di([k,v,k1,v1,k3,v3]) {
    let obj = {};
    let [nameK, nameV, ageK, ageV, cityK, cityV] = [k,v,k1,v1,k3,v3];
    obj[nameK] = nameV;
    obj[ageK] = ageV;
    obj[cityK] = cityV;
    console.log(obj);
    //console.log(JSON.stringify(obj));
}

di(['name','ivan','age','23','city','varna']);
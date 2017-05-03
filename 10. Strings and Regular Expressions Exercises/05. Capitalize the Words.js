function caitalize([str]) {
    let convertToLower = str.replace(/\w+/g, lower);
    let result = convertToLower.replace(/\b\w/g, upper);
    console.log(result);
    function lower(str) {
        return str.toLowerCase();
    }
    function upper(str) {
        return str.toUpperCase();
    }
}
caitalize(['Was that Easy? tRY thIs onE for SiZe!']);
caitalize(['Capitalize these words']);
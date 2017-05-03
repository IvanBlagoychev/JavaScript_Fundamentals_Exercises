function endsWith([string, substr]) {
    let str = string, substring = substr;
    if (str.endsWith(substring)){
        return true;
    }
    return false;
}

console.log(endsWith(['This sentence ends with fun?','fun?']));
console.log(endsWith(['This is Houston, we have…','We have…']));
console.log(endsWith(['The new iPhone has no headphones jack.','o headphones jack.']));
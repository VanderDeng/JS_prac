var result = []

for (var i = 0; i < 100; i ++){
    if (i % 4 || !(i % 5)){
        continue;
    }
    result.push(i);
    if (result.length === 10) {
        break;
    }
}

console.log(result);
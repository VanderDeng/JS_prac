var result = []

for (var i = 0; i < 100; i ++){
    if(!(i%4) && i % 5){
            result.push(i);
            if (result.length === 10) {
                console.log(result)
            }
    }
}

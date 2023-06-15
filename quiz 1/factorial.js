function getFactorial(n) {
    if (!Number.isInteger(n) || n < 0) { 
        return undefined;
    }
    let outcome = 1;
    
    for (let i = n; i >= 1; i--){
    outcome *= i;
    }
    
    return outcome;
}

const x = getFactorial(4);

console.log(x);

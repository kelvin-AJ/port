
self.addEventListener("message", (e)=> {
    const number = e.data;
    self.postMessage(factorsOf(number));
    self.close();
})
function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1; i <= Math.sqrt(n) ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) =>  a - b);
}
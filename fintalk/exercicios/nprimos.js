function ehPrimo(num) {
    if (!Number.isInteger(num)) {
      return false;
    }
  
    if (num < 2) {
      return false;
    }
  
    for (let cont = 2; cont < num; cont++) {
      if (num % cont == 0) {
        return false;
      }
    }
  
    return true;
  }

function encontrarPrimos(n) {
    let primos = [];
    for (let i = 2; i <= n; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }  
return primos;
}


// Testes
let n = 32;
console.log("Números primos até " + n + ": " + encontrarPrimos(n).join(", "));
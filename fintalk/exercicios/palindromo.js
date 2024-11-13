function ehPalindromo(frase) {
    let fraseLimpa = frase
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, ''); 
    
    return fraseLimpa === fraseLimpa.split('').reverse().join('');
}

// Testes
let entrada1 = "A mãe te ama";
console.log(ehPalindromo(entrada1) ? "É um palíndromo" : "Não é um palíndromo");

let entrada2 = "Fintalk";
console.log(ehPalindromo(entrada2) ? "É um palíndromo" : "Não é um palíndromo");

let entrada3 = "Arara";
console.log(ehPalindromo(entrada3) ? "É um palíndromo" : "Não é um palíndromo");
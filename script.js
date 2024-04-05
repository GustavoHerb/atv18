function dividePorZero(numero) {
    try {
        if (numero === 0) {
            throw new Error("Não é possível dividir por zero!");
        }
        return 10 / numero;
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
    }
}

// Testando a função
console.log(dividePorZero(5)); // Saída: 2
console.log(dividePorZero(0));
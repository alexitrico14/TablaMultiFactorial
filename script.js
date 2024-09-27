// Función para: Multiplicarse hasta el número ingresado (por el usuario) y el factorial de ese número
const multiplicar = () => {
    // Solicitar Número al usuario
    let num = parseInt(prompt("Ingresa el primer número entre 1 a 20"));

    // Validar que el número sea entre 1 y 20
    if (num < 1 || num > 20) {
        console.log("Número fuera de rango. Ingresar entre 1 a 20");
        return false;
    }

    // Tabla multiplicar
    for (let i = 1; i <= num; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
        // document.write(`${num} x ${i} = ${num * i} </br>`);
    }

    // Factorial
    for (let i = 1; i <= num; i++) {
        let factorial = 1;

        for (let j = 1; j <= i; j++) {
            factorial = factorial * j;
        }

        console.log(`Factorial de ${i} es: ${factorial}`);
        // document.write(`Factorial de ${i} es: ${factorial} </br>`);
    }
};

// Llamar a la función
multiplicar();

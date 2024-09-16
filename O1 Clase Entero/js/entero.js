class Entero {
    //Atributos
    Num;

    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }

    //CLASS- Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }

    //CLASS- Obtener valor de Num
    getNum() {
        return this.Num;
    }

    //CLASS- Mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.Num;
    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }

    esParImpar(){
        return(this.Num % 2 == 0)
    }

    esPositivoNegativo() {
        return (this.Num > 0)
    }

    factorial() {
        if (this.Num < 0) return "El factorial no está definido para números negativos";
        let resultado = 1;
        for (let i = 1; i <= this.Num; i++) {
            resultado *= i;
        }
        return resultado;
    }

    esPerfecto() {
        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num;
    }

}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum(){
    ClaseEntero.setNum();
}

//Mostrar el valor de Num en HTML
function mostrarNum(){
    var valorNum = ClaseEntero.showNum();
}

//Incremetar el valor de Num
function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

//Decrementar el valor de Num
function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

//Verifica si es Par o Impar
function esParImparValorNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar"
    ClaseEntero.showResultado(resp)
}

//Verifica si es Positivo o Negativo
function esPositivoNegativoValorNum(){
    var respuesta = ClaseEntero.esPositivoNegativo();
    var resp = respuesta ? "Es Num Positivo":"Es Num Negativo"
    ClaseEntero.showResultado(resp)
}

// Calcular el factorial del número
function factorialValorNum() {
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado(`Factorial de ${ClaseEntero.getNum()}: ${respuesta}`);
}

// Verificar si el número es perfecto
function esPerfectoValorNum() {
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}


class Entero {
    //Atributos
    Num;

    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }

    //CLASS- Cargar el valor de Num
    setNum(){
        this.Num = 10;
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
}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum(){
    ClaseEntero.setNum();
}

function mostrarNum(){
    var valorNum = ClaseEntero.showNum();
}
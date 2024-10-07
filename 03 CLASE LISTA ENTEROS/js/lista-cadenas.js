class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.actualizarLista();
    }

    actualizarLista() {
        const listaElemento = document.getElementById('lista');
        listaElemento.innerHTML = '';
        this.lista.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            listaElemento.appendChild(li);
        });
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        } else {
            alert('Número no encontrado.');
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
        this.actualizarLista();
    }
}

const miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('UCB SCZ INDUSTRIAL');

/*
// Retornar la cadena mayor caracteres

//var = let
//------------------------------Hola
var a = miLista.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant); //4
//------------------------------Mundo
var b = miLista.lista[1]
console.log(b);
var bCant = b.length;
console.log(bCant); //5
//------------------------------UCB
var c = miLista.lista[2]
console.log(c);
var cCant = c.length;
console.log(cCant); //3

//------------------------------Busca el mayor
var mayor = 0;
var posicion = -1;
if (aCant > mayor) {
    aCant = mayor;
    posicion = 0;
}
//----
if (bCant > mayor) {
    mayor = bCant;
    posicion = 1;
}
//----
if (aCant > mayor) {
    mayor = cCant;
    posicion = 2;
}
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);


console.log(miLista.lista); // Imprime: ['Hola', 'Mundo'm 'UCB']
*/

//REALIZAR EL MISMO EJERCICIO UTILIZANDO FOR
let mayor = 0;
let posicion = -1;

// Recorremos la lista con un for
for (let i = 0; i < miLista.lista.length; i++) {
    let cadena = miLista.lista[i];
    let longitud = cadena.length;

    console.log(cadena); // Imprime la cadena actual
    console.log(longitud); // Imprime la longitud de la cadena

    // Verificamos si la longitud actual es mayor que la mayor conocida
    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}

// Mostramos el resultado
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);

console.log(miLista.lista); // Imprime: ['Hola', 'Mundo'm 'UCB']


        document.getElementById('agregarBtn').addEventListener('click', () => {
            const cadena = document.getElementById('cadena').value;
            if (cadena) {
                miLista.agregar(cadena);
                document.getElementById('cadena').value = '';
            }
        });

        document.getElementById('eliminarBtn').addEventListener('click', () => {
            const cadena = document.getElementById('cadenaEliminar').value;
            if (cadena) {
                miLista.eliminar(cadena);
                document.getElementById('cadenaEliminar').value = '';
            }
        });

        document.getElementById('buscarBtn').addEventListener('click', () => {
            const cadena = document.getElementById('cadenaBuscar').value;
            const index = miLista.buscar(cadena);
            if (index !== -1) {
                alert(`Cadena encontrada en el índice: ${index}`);
            } else {
                alert('Cadena no encontrada.');
            }
        });

        document.getElementById('ordenarBtn').addEventListener('click', () => {
            miLista.ordenar();
        });
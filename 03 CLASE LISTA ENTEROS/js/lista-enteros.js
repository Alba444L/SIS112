class ListaEnteros {
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
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

const miLista = new ListaEnteros();

document.getElementById('agregarBtn').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('numero').value);
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        document.getElementById('numero').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});
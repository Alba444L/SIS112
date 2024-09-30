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
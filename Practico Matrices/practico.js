class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }


    // EJERCICIO 1
    llenarMatrizConUnos() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) { // recorre cada columna en la fila
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 2
    llenarMatrizMarcoInterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) { 
                    // si el cuadrado está en un borde le asigna 0
                    this.matriz[i][j] = 0;
                } else {
                    this.matriz[i][j] = 1; // para los cuadrados de adentro le asigna 1
                }
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 3
    llenarMatrizCruces() {
        this.vaciarMatriz();
        const centro = Math.floor(this.filas / 2);
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // si el cuadrado es parte de la cruz le asigna 1
                if (i === centro || j === centro) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    

    // EJERCICIO 4
    llenarMatrizBordesDiagonales() {
        this.vaciarMatriz();
    
        // Rellenar bordes con 1
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i][0] = 1; 
            this.matriz[i][this.columnas - 1] = 1;
        }
        
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[0][j] = 1;
            this.matriz[this.filas - 1][j] = 1;
        }
    
        // Rellenar las diagonales internas con 2, sin tocar los bordes
        for (let i = 1; i < this.filas - 1; i++) {
            this.matriz[i][i] = 2; // Diagonal principal
            this.matriz[i][this.columnas - 1 - i] = 2; // Diagonal inversa
        }
    
        this.dibujarMatriz();
    }
    

    // EJERCICIO 5
    llenarMatrizBandera() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // divide todo en tres franjas verticales
                if (i < this.filas / 3) {
                    this.matriz[i][j] = 1;
                } else if (i < 2 * this.filas / 3) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 6
    llenarMatrizRellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 2 === 0 ? 1 : 0; // alterna las filas entre 1 y 0
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 7
    llenarMatrizZigZag() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i === j ? 1 : 0; // se crea la diagonal principal
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 8
    llenarMatrizEspiral() {
        let top = 0;
        let bottom = this.filas - 1;
        let left = 0;
        let right = this.columnas - 1;

        while (top <= bottom && left <= right) {
            // Rellenar la fila superior
            for (let i = left; i <= right; i++) {
                this.matriz[top][i] = 1;
            }
            top++;

            // Rellenar la columna derecha
            for (let i = top; i <= bottom; i++) {
                this.matriz[i][right] = 1;
            }
            right--;

            // Rellenar la fila inferior
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    this.matriz[bottom][i] = 1;
                }
                bottom--;
            }

            // Rellenar la columna izquierda
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    this.matriz[i][left] = 1;
                }
                left++;
            }
        }

        this.dibujarMatriz();
    }

    // EJERCICIO 9
    llenarMatrizTrianguloSuperiorIzquierdo() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1; // le asigna 1 a los cuadrados dentro del triangulo
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 10
    llenarMatrizTrianguloInferiorDerecho() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - i - 1; j < this.columnas; j++) {
                this.matriz[i][j] = 1; // llena la matriz con 1 en el triangulo
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 11
    llenarMatrizCuadricula() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) { // si es par
                    this.matriz[i][j] = 1;
                } else { // si es impar
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz();
    }

    // EJERCICIO 12
    llenarMatrizTrianguloCentral() {
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);

        for (let i = 1; i <= 5; i++) { // definene la altura del triangulo central
            for (let j = centro - i + 1; j <= centro + i - 1; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    // EJERCICIO 13
    llenarMatrizRombosConcentricos() {
        this.vaciarMatriz();
        const centro = Math.floor(this.filas / 2);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Calcular la distancia al centro
                const distancia = Math.max(Math.abs(centro - i), Math.abs(centro - j));

                // Rellenar con 1 si la distancia es menor o igual a la cantidad de capas
                if (distancia < centro) {
                    this.matriz[i][j] = 1;
                }
            }
        }

        this.dibujarMatriz();
    }

    // EJERCICIO 14
    llenarMatrizCrucesConcentricas() {
        this.vaciarMatriz();
        const centro = Math.floor(this.filas / 2);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Calcular la distancia al centro
                const distancia = Math.max(Math.abs(centro - i), Math.abs(centro - j));

                // Rellenar con 1 si la distancia es menor o igual a la cantidad de capas
                if (distancia < centro) {
                    this.matriz[i][j] = 1;
                }
            }
        }

        this.dibujarMatriz();
    }
    
    

    // EJERCICIO 15

    llenarMatrizBanderaDiagonal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i >= j ? 1 : 0; // le asigna 1 si fila es mayor o igual a la columna 
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 16
    llenarMatrizCuadradoDentroCuadrado() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // para los bordes externos
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // para el cuadraro de adentro
                else if ((i >= 2 && i <= this.filas - 3) && (j >= 2 && j <= this.columnas - 3)) {
                    // para bordes del cuadrado interno
                    if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                        this.matriz[i][j] = 2;
                    } else {
                        // centro vacío del cuadrado 
                        this.matriz[i][j] = 0;
                    }
                }
                // se resta el area intermdia
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 17
    llenarMatrizBordesCentro() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1; // para los bordes
                } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                    this.matriz[i][j] = 2; // para el cuadrado interno
                } else {
                    this.matriz[i][j] = 0; // para el background
                }
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 18
    llenarMatrizLineasParalelas() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) { // si la fila es par
                    this.matriz[i][j] = 1;
                } else { // si la primera o utlima columna de una fila es impar
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 19
    llenarMatrizMarcasCruz() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i % 4 === j % 4) ? 1 : 0;
                // se le asigna 1 si el producto de i/4 es igual al producto de j/4
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 20
    llenarMatrizRomboEsquinas() {
        this.vaciarMatriz();
        const romboAltura = 3; // Altura del rombo

        // Rellenar el rombo en la esquina superior izquierda
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1; // Parte superior del rombo
                this.matriz[i][this.columnas - 1 - j] = 1; // Parte derecha del rombo
            }
        }

        // Rellenar el rombo en la esquina superior derecha
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 1; // Parte superior del rombo
                this.matriz[i][j] = 1; // Parte izquierda del rombo
            }
        }

        // Rellenar el rombo en la esquina inferior izquierda
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; // Parte inferior del rombo
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1; // Parte derecha del rombo
            }
        }

        // Rellenar el rombo en la esquina inferior derecha
        for (let i = 0; i < romboAltura; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1; // Parte inferior del rombo
                this.matriz[this.filas - 1 - i][j] = 1; // Parte izquierda del rombo
            }
        }

        this.dibujarMatriz();
    }


    // EJERCICIO 21
    llenarMatrizAjedrez() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0; // le asigna 1 y 0 alternados 
            }
        }
        this.dibujarMatriz();
    }


    // EJERCICIO 22
    llenarMatrizRelojDeArena() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j >= i && j < this.columnas - i || j >= this.columnas - i - 1 && j <= i) {
                    this.matriz[i][j] = 1; // le asigna 1 a los cuadrados para el reloj
                } else {
                    this.matriz[i][j] = 0; // para el background le asigna 0
                }
            }
        }
        this.dibujarMatriz();
    }


    //---------------------------------------------------------------------------------------------------------

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#20948D"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#F4CC70"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }
}
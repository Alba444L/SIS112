class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + '.';
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }
   
    Universidad() {
        return 'Estoy en la universidad ' + this.universidad;
      }

    // Modificar
    
    Modificar_nombre() {
      this.nombre = prompt("Ingresa un nuevo nombre: ");
      while (!this.nombre || !isNaN(this.nombre)) {  
        alert("Ingrese un nombre que no tenga numeros o que no este vacía la casilla");
        this.nombre = prompt("Ingresa un nuevo nombre: ");
      }
      return 'Hola, mi nombre es ' + this.nombre + '.';
    }
  

    Modificar_edad() {
      this.edad = prompt("Ingrese una nueva edad: ");
      while (this.edad <=0) {
        alert("Ingrese un numero que no sea negativo o que no este vacía la casilla");
        this.edad = prompt("Ingrese una nueva edad; ");
      }
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }

    Modificar_carrera() {
      this.carrera = prompt("Ingresa una nueva carrera: ");
      while (!this.carrera || !isNaN(this.carrera)) {  
        alert("Ingrese un carrera que no tenga numeros o que no este vacía la casilla");
        this.carrera = prompt("Ingresa una nueva carrera: ");
      }
      return 'Estoy estudiando ' + this.carrera;
    }

    Modificar_universidad() {
      this.universidad = prompt("Ingresa una nueva universidad: ");
      while (!this.universidad || !isNaN(this.universidad)) {  
        alert("Ingrese una universidad que no tenga numeros o que no este vacía la casilla");
        this.nombre = prompt("Ingresa una nueva universidad: ");
      }
      return 'Estoy en la universidad ' + this.universidad;
    }

     // Eliminar
    
    Eliminar_nombre() {
      return ' ';
    }
    Eliminar_edad() {
      return ' ';
    }
    Eliminar_carrera() {
      return ' ';
    }
    Eliminar_universidad() {
      return ' ';
    }
   
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Alba', 19, 'Ingeniería Industrial', 'UCB');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  // Función para universidad
  function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  
  // Función para modificar saludo
  function botonModificarSaludar() {
    saludar.textContent = persona.Modificar_nombre();
  }
  
  // Función para modificar edad
  function botonModificarCumpleanios() {
    edad.textContent = persona.Modificar_edad();
  }
  
  // Función para modificar carrera
  function botonModificarEstudiar() {
    carrera.textContent = persona.Modificar_carrera();
  }

  // Función para modificar universidad
  function botonModificarUniversidad() {
    universidad.textContent = persona.Modificar_universidad();
  }

  
  // Función para eliminar saludo
  function botonEliminarSaludar() {
    saludar.textContent = persona.Eliminar_nombre();
  }
  
  // Función para eliminar edad
  function botonEliminarCumpleanios() {
    edad.textContent = persona.Eliminar_edad();
  }
  
  // Función para eliminar carrera
  function botonEliminarEstudiar() {
    carrera.textContent = persona.Eliminar_carrera();
  }

  // Función para eliminar universidad
  function botonEliminarUniversidad() {
    universidad.textContent = persona.Eliminar_universidad();
  }
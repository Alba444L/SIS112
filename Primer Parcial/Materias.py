class Materia:
    def __init__(self, nombre, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidad_inscritos):
        self.nombre = nombre
        self.sigla = sigla
        self.docente = docente
        self.horarios = horarios
        self.aula = aula
        self.prerequisito = prerequisito
        self.carrera = carrera
        self.universidad = universidad
        self.cantidad_inscritos = cantidad_inscritos
    
    def mostrar_info(self):
        print(f"Materia: {self.nombre}")
        print(f"Sigla: {self.sigla}")
        print(f"Docente: {self.docente}")
        print(f"Horarios: {self.horarios}")
        print(f"Aula: {self.aula}")
        print(f"Prerequisito: {self.prerequisito}")
        print(f"Carrera: {self.carrera}")
        print(f"Universidad: {self.universidad}")
        print(f"Cantidad Inscritos: {self.cantidad_inscritos}")
    
    # Modificar
    def modificar_nombre(self):
        while True:
            nuevo_nombre = input("Ingrese el nuevo nombre de la materia: ")
            if nuevo_nombre.strip() and " " not in nuevo_nombre:
                self.nombre = nuevo_nombre
                break
            else:
                print("El nombre no puede tener espacios en blanco.")

    def modificar_sigla(self):
        while True:
            nueva_sigla = input("Ingrese la nueva sigla de la materia: ")
            if nueva_sigla.strip() and " " not in nueva_sigla:
                self.sigla = nueva_sigla
                break
            else:
                print("La sigla no puede tener espacios en blanco.")
                
    def modificar_docente(self):
        while True:
            nuevo_docente = input("Ingrese el nombre del nuevo docente: ")
            if nuevo_docente.replace(" ", "").isalpha():
                self.docente = nuevo_docente
                break
            else:
                print("Nombre de docente inválido. Ingresa solo letras y sin números.")
                
    def modificar_horarios(self):
        while True:
            nuevo_horario = input("Ingrese los nuevos horarios (separados por comas): ")
            horarios_lista = [horario.strip() for horario in nuevo_horario.split(",")]
            if all(horario and " " not in horario for horario in horarios_lista):
                self.horarios = horarios_lista
                break
            else:
                print("Cada horario debe ser una cadena sin espacios en blanco.")

    def modificar_aula(self):
        while True:
            nueva_aula = input("Ingrese el nuevo aula: ")
            if nueva_aula.strip() and " " not in nueva_aula:
                self.aula = nueva_aula
                break
            else:
                print("El aula no puede tener espacios en blanco.")

    def modificar_prerequisito(self):
        while True:
            nuevo_prerequisito = input("Ingrese el nuevo prerequisito: ")
            if nuevo_prerequisito.strip() and " " not in nuevo_prerequisito:
                self.prerequisito = nuevo_prerequisito
                break
            else:
                print("El prerequisito no puede tener espacios en blanco.")

    def modificar_carrera(self):
        while True:
            nueva_carrera = input("Ingrese la nueva carrera: ")
            if nueva_carrera.replace(" ", "").isalpha():
                self.carrera = nueva_carrera
                break
            else:
                print("Nombre de carrera inválido. Ingresa solo letras y sin números.")

    def modificar_universidad(self):
        while True:
            nueva_universidad = input("Ingrese la nueva universidad: ")
            if nueva_universidad.replace(" ", "").isalpha():
                self.universidad = nueva_universidad
                break
            else:
                print("Nombre de universidad inválido. Ingresa solo letras y sin números.")

    def modificar_cantidad_inscritos(self):
        while True:
            try:
                nueva_cantidad = int(input("Ingrese la nueva cantidad de inscritos: "))
                if nueva_cantidad > 0:
                    self.cantidad_inscritos = nueva_cantidad
                    break
                else:
                    print("La cantidad debe ser un número positivo.")
            except ValueError:
                print("La cantidad debe ser un número entero.")

    # Eliminar
    def eliminar_nombre(self):
        self.nombre = None
        return "Nombre eliminado"

    def eliminar_sigla(self):
        self.edad = None
        return "Sigla eliminada"

    def eliminar_docente(self):
        self.carrera = None
        return "Docente eliminada"

    def eliminar_horarios(self):
        self.universidad = None
        return "Horrios eliminados"
    
    def eliminar_aula(self):
        self.nombre = None
        return "Aula eliminado"

    def eliminar_prerequisitos(self):
        self.edad = None
        return "Prerequisitos eliminados"

    def eliminar_carrera(self):
        self.carrera = None
        return "Carrera eliminada"

    def eliminar_universidad(self):
        self.universidad = None
        return "Universidad eliminada"
    
    def eliminar_cantidad_inscritos(self):
        self.universidad = None
        return "Cantidad escritos eliminado"
    
# Crear materias
materia1 = Materia(
    nombre="Cálculo 1", sigla="MAT-132", docente="Victor Hugo Aspiazu", 
    horarios=["Lunes 7:30-9:00", "Miércoles 7:30-9:00"], aula="10 Aula A-N4",
    prerequisito="Matematica basica", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=34
)

materia2 = Materia(
    nombre="Programación 1", sigla="FSIS-112", docente="Eddy Escalante", 
    horarios= ["Lunes 10:50-12:20", "Viernes 9:10-11:30"], aula="E 2-5", 
    prerequisito="Introducción a la Programación", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=16
)

materia3 = Materia(
    nombre="Fisica y Laboratorio 1", sigla="FIS-111", docente="Victor Hugo Lobos", 
    horarios=["Lunes 9:10-10:40", "Miércoles 9:10-12:20"], aula="E 2-5", 
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=45
)

materia4 = Materia(
    nombre="Probabilidad y Estadistica 1", sigla="MAT-142", docente="Silvia Barca", 
    horarios=["Martes  10:40-12:20", "Jueves 10:40-12:20"], aula="D 2-1", 
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=33
)

materia5 = Materia(
    nombre="Manufactura y Mecanizado", sigla="IND-112", docente="Jorge Salvatierra", 
    horarios=["Martes  7:30-9:00", "Jueves 7:30-9:00", "Viernes 7:30-9:00"], aula="F 1-2", 
    prerequisito=" Introducción a Diseño Industrial", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=14
)

materia6 = Materia(
    nombre="Antropología y Valores", sigla="FHC-101", docente="Exalta Gabriela", 
    horarios=["Martes  9:10-10:40", "Jueves 9:10-10:40"], aula="4 Aula A-N-3", 
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB", 
    cantidad_inscritos=61
)

# Mostrar información de la materia
materia1.mostrar_info()
materia2.mostrar_info()
materia3.mostrar_info()
materia4.mostrar_info()
materia5.mostrar_info()
materia6.mostrar_info()
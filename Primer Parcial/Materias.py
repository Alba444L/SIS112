class Materia:
    def __init__(self, nombre, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidad_inscritos, modalidad, calificacion_minima, temas, ubicacion):
        self.nombre = nombre
        self.sigla = sigla
        self.docente = docente
        self.horarios = horarios
        self.aula = aula
        self.prerequisito = prerequisito
        self.carrera = carrera
        self.universidad = universidad
        self.cantidad_inscritos = cantidad_inscritos
        self.modalidad = modalidad
        self.calificacion_minima = calificacion_minima
        self.temas = temas
        self.ubicacion = ubicacion

    def mostrar_info(self):
        print(f"\nMateria: {self.nombre}")
        print(f"Sigla: {self.sigla}")
        print(f"Docente: {self.docente}")
        print(f"Horarios: {self.horarios}")
        print(f"Aula: {self.aula}")
        print(f"Prerequisito: {self.prerequisito}")
        print(f"Carrera: {self.carrera}")
        print(f"Universidad: {self.universidad}")
        print(f"Cantidad Inscritos: {self.cantidad_inscritos}")
        print(f"Modalidad: {self.modalidad}")
        print(f"Calificacion Minima Aprobacion: {self.calificacion_minima}")
        print(f"Temas: {self.temas}")
        print(f"Ubicacion Latitud Longitud: {self.ubicacion}")

    # Modificar
    def modificar_nombre(self):
        while True:
            nuevo_nombre = input("Ingrese el nuevo nombre de la materia: ")
            if nuevo_nombre.strip() and " " not in nuevo_nombre:
                self.nombre = nuevo_nombre
                print("Nombre modificado exitosamente.")
                break
            else:
                print("El nombre no puede tener espacios en blanco.")

    def modificar_sigla(self):
        while True:
            nueva_sigla = input("Ingrese la nueva sigla de la materia: ")
            if nueva_sigla.strip() and " " not in nueva_sigla:
                self.sigla = nueva_sigla
                print("Sigla modificada exitosamente.")
                break
            else:
                print("La sigla no puede tener espacios en blanco.")

    def modificar_docente(self):
        while True:
            nuevo_docente = input("Ingrese el nombre del nuevo docente: ")
            if nuevo_docente.replace(" ", "").isalpha():
                self.docente = nuevo_docente
                print("Docente modificado exitosamente.")
                break
            else:
                print("Nombre de docente inválido. Ingresa solo letras y sin números.")

    def modificar_horarios(self):
        while True:
            nuevo_horario = input("Ingrese los nuevos horarios (separados por comas): ")
            horarios_lista = [horario.strip() for horario in nuevo_horario.split(",")]
            if all(horario and " " not in horario for horario in horarios_lista):
                self.horarios = horarios_lista
                print("Horarios modificados exitosamente.")
                break
            else:
                print("Cada horario debe ser una cadena sin espacios en blanco.")

    def modificar_aula(self):
        while True:
            nueva_aula = input("Ingrese el nuevo aula: ")
            if nueva_aula.strip() and " " not in nueva_aula:
                self.aula = nueva_aula
                print("Aula modificada exitosamente.")
                break
            else:
                print("El aula no puede tener espacios en blanco.")

    def modificar_prerequisito(self):
        while True:
            nuevo_prerequisito = input("Ingrese el nuevo prerequisito: ")
            if nuevo_prerequisito.strip() and " " not in nuevo_prerequisito:
                self.prerequisito = nuevo_prerequisito
                print("Prerequisito modificado exitosamente.")
                break
            else:
                print("El prerequisito no puede tener espacios en blanco.")

    def modificar_carrera(self):
        while True:
            nueva_carrera = input("Ingrese la nueva carrera: ")
            if nueva_carrera.replace(" ", "").isalpha():
                self.carrera = nueva_carrera
                print("Carrera modificada exitosamente.")
                break
            else:
                print("Nombre de carrera inválido. Ingresa solo letras y sin números.")

    def modificar_universidad(self):
        while True:
            nueva_universidad = input("Ingrese la nueva universidad: ")
            if nueva_universidad.replace(" ", "").isalpha():
                self.universidad = nueva_universidad
                print("Universidad modificada exitosamente.")
                break
            else:
                print("Nombre de universidad inválido. Ingresa solo letras y sin números.")

    def modificar_cantidad_inscritos(self):
        while True:
            try:
                nueva_cantidad = int(input("Ingrese la nueva cantidad de inscritos: "))
                if nueva_cantidad > 0:
                    self.cantidad_inscritos = nueva_cantidad
                    print("Cantidad de inscritos modificada exitosamente.")
                    break
                else:
                    print("La cantidad debe ser un número positivo.")
            except ValueError:
                print("La cantidad debe ser un número entero.")

    def modificar_modalidad(self):
        while True:
            nueva_modalidad = input("Ingrese la nueva modalidad (Presencial, Online, Híbrida): ").capitalize()
            if nueva_modalidad in ["Presencial", "Online", "Híbrida"]:
                self.modalidad = nueva_modalidad
                print("Modalidad modificada exitosamente.")
                break
            else:
                print("Modalidad inválida. Intente de nuevo.")

    def modificar_calificacion_minima(self):
        while True:
            try:
                nueva_calificacion = float(input("Ingrese la nueva calificación mínima de aprobación (solo números, entre 0 y 100): "))
                if 0 <= nueva_calificacion <= 100:
                    self.calificacion_minima = nueva_calificacion
                    print("Calificación mínima modificada exitosamente.")
                    break
                else:
                    print("La calificación debe estar entre 0 y 100.")
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número válido.")

    def modificar_ubicacion(self):
        while True:
            nueva_ubicacion = input("Ingrese la nueva ubicación (Latitud, Longitud): ")
            try:
                latitud, longitud = map(float, nueva_ubicacion.split(','))
                self.ubicacion = f"{latitud}, {longitud}"
                print("Ubicación modificada exitosamente.")
                break
            except ValueError:
                print("Entrada inválida. Asegúrese de ingresar dos números separados por una coma.")

    def modificar_temas(self):
        nuevos_temas = input("Ingrese los nuevos temas, separados por comas: ").split(", ")
        self.temas = nuevos_temas
        print("Temas modificados exitosamente.")

    # Eliminar
    def eliminar_nombre(self):
        self.nombre = None
        print("Nombre eliminado.")

    def eliminar_sigla(self):
        self.sigla = None
        print("Sigla eliminada.")

    def eliminar_docente(self):
        self.docente = None
        print("Docente eliminado.")

    def eliminar_horarios(self):
        self.horarios = None
        print("Horarios eliminados.")

    def eliminar_aula(self):
        self.aula = None
        print("Aula eliminada.")

    def eliminar_prerequisito(self):
        self.prerequisito = None
        print("Prerequisito eliminado.")

    def eliminar_carrera(self):
        self.carrera = None
        print("Carrera eliminada.")

    def eliminar_universidad(self):
        self.universidad = None
        print("Universidad eliminada.")

    def eliminar_cantidad_inscritos(self):
        self.cantidad_inscritos = None
        print("Cantidad de inscritos eliminada.")

    def eliminar_modalidad(self):
        self.modalidad = None
        print("Modalidad eliminada.")

    def eliminar_calificacion_minima(self):
        self.calificacion_minima = None
        print("Calificacion minima eliminada.")

    def eliminar_temas(self):
        self.temas = None
        print("Temas eliminados.")

    def eliminar_ubicacion(self):
        self.ubicacion = None
        print("Ubicacion eliminada.")
   
    # Métodos generales
    def modificar_atributo(self, atributo):
        funciones_modificar = {
            "nombre": self.modificar_nombre,
            "sigla": self.modificar_sigla,
            "docente": self.modificar_docente,
            "horarios": self.modificar_horarios,
            "aula": self.modificar_aula,
            "prerequisito": self.modificar_prerequisito,
            "carrera": self.modificar_carrera,
            "universidad": self.modificar_universidad,
            "cantidad_inscritos": self.modificar_cantidad_inscritos,
            "modalidad": self.modificar_modalidad,
            "calificacion_minima": self.modificar_calificacion_minima,
            "temas": self.modificar_temas,
            "ubicacion": self.modificar_ubicacion
        }
        funcion = funciones_modificar.get(atributo)
        if funcion:
            funcion()
        else:
            print("Atributo no válido para modificar.")

    def eliminar_atributo(self, atributo):
        funciones_eliminar = {
            "nombre": self.eliminar_nombre,
            "sigla": self.eliminar_sigla,
            "docente": self.eliminar_docente,
            "horarios": self.eliminar_horarios,
            "aula": self.eliminar_aula,
            "prerequisito": self.eliminar_prerequisito,
            "carrera": self.eliminar_carrera,
            "universidad": self.eliminar_universidad,
            "cantidad_inscritos": self.eliminar_cantidad_inscritos,
            "modalidad": self.eliminar_modalidad,
            "calificacion_minima": self.eliminar_calificacion_minima,
            "temas": self.eliminar_temas,
            "ubicacion": self.eliminar_ubicacion
        }
        funcion = funciones_eliminar.get(atributo)
        if funcion:
            funcion()
        else:
            print("Atributo no válido para eliminar.")

# Crear materias
materia1 = Materia(
    nombre="Cálculo 1", sigla="MAT-132", docente="Victor Hugo Aspiazu",
    horarios=["Lunes 7:30-9:00", "Miércoles 7:30-9:00"], aula="10 Aula A-N4",
    prerequisito="Matematica basica", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=34, modalidad="Presencial", calificacion_minima=60, temas=["Funciones", "Derivadas", "Integrales"], ubicacion= "-17.7045503, -63.157042"
)

materia2 = Materia(
    nombre="Programación 1", sigla="SIS-112", docente="Eddy Escalante",
    horarios=["Lunes 10:50-12:20", "Miércoles 9:10-11:30"], aula="C2-2",
    prerequisito="Introducción a la Programación", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=16, modalidad="Presencial", calificacion_minima=60, temas=["Programacion Orientada a Objetos", "Condicionales", "Strings"], ubicacion= "-17.7045503, -63.157042"
)

materia3 = Materia(
    nombre="Fisica y Laboratorio 1", sigla="FIS-111", docente="Victor Hugo Lobos",
    horarios=["Lunes 9:10-10:40", "Miércoles 9:10-12:20"], aula="E2-5",
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=45, modalidad="Presencial", calificacion_minima=60, temas=["Vectores", "Dinamica", "Cinematica"], ubicacion= "-17.7045503, -63.157042"
)

materia4 = Materia(
    nombre="Probabilidad y Estadistica 1", sigla="MAT-142", docente="Silvia Barca",
    horarios=["Martes 10:40-12:20", "Jueves 10:40-12:20"], aula="D2-1",
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=33, modalidad="Presencial", calificacion_minima=60, temas=["Organizacion de Datos", "Medidas de Tendencia", "Medidas de Dispersion"], ubicacion= "-17.7045503, -63.157042"
)

materia5 = Materia(
    nombre="Manufactura y Mecanizado", sigla="IND-112", docente="Jorge Salvatierra",
    horarios=["Martes 7:30-9:00", "Jueves 7:30-9:00", "Viernes 7:30-9:00"], aula="F1-2",
    prerequisito="Introduccióna Diseño Industrial", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=14, modalidad="Presencial", calificacion_minima=60, temas=["Materiales", "Procesos de Manufactura", "Maquinas de Produccion"], ubicacion= "-17.7045503, -63.157042"
)

materia6 = Materia(
    nombre="Antropología y Valores", sigla="FHC-101", docente="Exalta Gabriela",
    horarios=["Martes 9:10-10:40", "Jueves 9:10-10:40"], aula="4 Aula A-N-3",
    prerequisito="Ninguno", carrera="Ingeniería Industrial", universidad="UCB",
    cantidad_inscritos=61, modalidad="Presencial", calificacion_minima=60, temas=["Antropologia Social", "Antropologia Cultural", "Antropologia Sociocultural de los departamentos de Bolivia"], ubicacion= "-17.7045503, -63.157042"
)

materias = [materia1, materia2, materia3, materia4, materia5, materia6]

def mostrar_menu_materias():
    print("\nSeleccione una materia para modificar o eliminar:")
    for i, materia in enumerate(materias):
        print(f"{i+1}. {materia.nombre}")

def mostrar_menu_atributos():
    print("\nSeleccione el atributo que desea modificar o eliminar:")
    print("1. Nombre")
    print("2. Sigla")
    print("3. Docente")
    print("4. Horarios")
    print("5. Aula")
    print("6. Prerequisito")
    print("7. Carrera")
    print("8. Universidad")
    print("9. Cantidad inscritos")
    print("10. Modalidad")
    print("11. Calificacion Minima Aprobacion")
    print("12. Temas")
    print("13. Ubicacion Latitud Longitud")

def modificar_o_eliminar():
    while True:
        mostrar_menu_materias()
        try:
            opcion_materia = int(input("\nIngrese el número de la materia que desea modificar/eliminar (1-6): ")) - 1
            if 0 <= opcion_materia < len(materias):
                materia_seleccionada = materias[opcion_materia]
                materia_seleccionada.mostrar_info()

                while True:
                    mostrar_menu_atributos()
                    opcion_atributo = int(input("Seleccione el atributo a modificar/eliminar (1-13): "))
                    if 1 <= opcion_atributo <= 13:
                        atributos = ["nombre", "sigla", "docente", "horarios", "aula", "prerequisito", "carrera", "universidad", "cantidad_inscritos", "modalidad", "calificacion_minima", "temas", "ubicacion"]
                        atributo = atributos[opcion_atributo - 1]

                        accion = input(f"¿Desea modificar o eliminar {atributo}? (modificar/eliminar): ").lower()
                        if accion == "modificar":
                            materia_seleccionada.modificar_atributo(atributo)
                        elif accion == "eliminar":
                            materia_seleccionada.eliminar_atributo(atributo)
                        else:
                            print("Acción no válida. Intente de nuevo.")

                        continuar_atributo = input("¿Desea modificar/eliminar otro atributo de esta materia? (si/no): ").lower()
                        if continuar_atributo != 'si':
                            break
                    else:
                        print("Opción no válida. Intente de nuevo.")

                continuar_materia = input("¿Desea modificar/eliminar atributos de otra materia? (si/no): ").lower()
                if continuar_materia != 'si':
                    break
            else:
                print("Opción de materia no válida. Intente de nuevo.")
        except ValueError:
            print("Entrada inválida. Por favor, ingrese un número.")


print("Información inicial de las materias:")
for materia in materias:
    materia.mostrar_info()

modificar_o_eliminar()

print("\nInformación actualizada de las materias:")
for materia in materias:
    materia.mostrar_info()

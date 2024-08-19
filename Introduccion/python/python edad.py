def hola_mundo():
    print("Hola Mundo")

def obtener_edad():
    edad = input("Ingresa tu edad:")
    print ("tu edad es: ", edad)

def calcular_edad():
    anioNacimiento= int(input("Ingresa el año que naciste"))
    edad = 2024 - anioNacimiento
    print("Tu edad calculada es:", edad)

hola_mundo()
obtener_edad()
calcular_edad()
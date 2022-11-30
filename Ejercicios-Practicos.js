// EJERCICIOS DE LOGICA DE PROGRAMACIÓN

//---------------1--------------------//

/* 1) Programa una función que cuente el número de 
      caracteres de una cadena de texto,
      Por ejemplo: miFuncion("Hola Mundo") devolverá 10. */

let NumCaracteres = (texto) => {
   
    if (typeof texto !== "string") return "El texto ingresado debe ser un string."

    return texto.length
}

/* 2) Programa una función que te devuelva el texto recortado 
      según el número de caracteres indicados, 
      Por ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".*/ 

let NumCaracteresCortado = (texto, numero) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof numero !== "number") return "El segundo parámetro debe ser de tipo number"

    return texto.slice(0, numero)
}

/* 3) Programa una función que dada una String te devuelva un 
      Array de textos separados por cierto caracter, 
      Por ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/ 

let ArrayDeCaracteres = (texto, caracter) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."

    return texto.split(caracter)
}

/* 4) Programa una función que repita un texto X veces, 
      Por ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */ 

let CadenaRepetida = (texto, numero) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof numero !== "number") return "El segundo parámetro debe ser de tipo number"

    return texto.repeat(numero)
}

/* 5) Programa una función que invierta las palabras de 
      una cadena de texto, 
      Por Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH". */

let TextoInvertido = (texto) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    
    return texto.split("").reverse().join("")

        
}

/* 6) Programa una función para contar el número de veces 
      que se repite una palabra en un texto largo, 
      Por ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

let CuantasVeces = (texto, palabra) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof palabra !== "string") return "El primer parámetro debe ser de tipo string."
    let arrayDeTexto = texto.split(" ")
    
    return arrayDeTexto.reduce((acc,curr) => {
    if (curr === palabra) acc++
      return acc
      }, 0)
    }
    
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


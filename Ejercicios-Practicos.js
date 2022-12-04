// EJERCICIOS DE LOGICA DE PROGRAMACIÓN

//---------------1--------------------//

/* 1) Programa una función que cuente el número de 
      caracteres de una cadena de texto,
      Por ejemplo: miFuncion("Hola Mundo") devolverá 10. */

let numCaracteres = (texto) => {
   
    if (typeof texto !== "string") return "El texto ingresado debe ser un string."

    return texto.length
}

/* 2) Programa una función que te devuelva el texto recortado 
      según el número de caracteres indicados, 
      Por ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".*/ 

let numCaracteresCortado = (texto, numero) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof numero !== "number") return "El segundo parámetro debe ser de tipo number"

    return texto.slice(0, numero)
}

/* 3) Programa una función que dada una String te devuelva un 
      Array de textos separados por cierto caracter, 
      Por ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/ 

let arrayDeCaracteres = (texto, caracter) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."

    return texto.split(caracter)
}

/* 4) Programa una función que repita un texto X veces, 
      Por ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */ 

let cadenaRepetida = (texto, numero) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof numero !== "number") return "El segundo parámetro debe ser de tipo number"

    return texto.repeat(numero)
}

/* 5) Programa una función que invierta las palabras de 
      una cadena de texto, 
      Por Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH". */

let textoInvertido = (texto) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    
    return texto.split("").reverse().join("")

        
}

/* 6) Programa una función para contar el número de veces 
      que se repite una palabra en un texto largo, 
      Por ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

let cuantasVeces = (texto, palabra) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof palabra !== "string") return "El primer parámetro debe ser de tipo string."

    let arrayDeTexto = texto.split(" ")
    
    return arrayDeTexto.reduce((acc,curr) => {
    if (curr === palabra) acc++
      return acc
      }, 0)
    }
    
/* 7) Programa una función que valide si una palabra o 
      frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
      Por Ejemplo: mifuncion("Salas") devolverá true. */

let funcionPalindromo = (texto) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."

    let palindromo = texto.split("").reverse().join("")
    return texto.toLowerCase() === palindromo.toLowerCase() ? true : false
}

/* 8) Programa una función que elimine cierto patrón 
      de caracteres de un texto dado, 
      Por Ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

let suprimir = (texto, sup) => {
    if (typeof texto !== "string") return "El primer parámetro debe ser de tipo string."
    if (typeof sup !== "string") return "El primer parámetro debe ser de tipo string."
   
    return texto.split(sup).join("")
}

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

let randomNumber = () => {
    let numero = Math.random()*100+500
   
    if (numero === 500) {
        return 600
    } else {
        return Math.trunc(numero)
    }
}
/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
       (que se lee igual en un sentido que en otro), 
       Por Ejemplo: miFuncion(2002) devolverá true. */

let capicua = (numero) => {
    if (typeof numero !== "number") return "El primer parámetro debe ser de tipo number."

    let numerocapicua = numero.toString().split("").reverse().join("")

    return Number(numerocapicua) === numero ?  true : false
}


/* 11) Programa una función que calcule el factorial de un número
      (El factorial de un entero positivo n, se define como el producto de todos 
      los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

let funcionFactorial = (numero) => {
    if (typeof numero !== "number") return "El primer parámetro debe ser de tipo number."
        
    if (numero === 0) return 1
    return numero * funcionFactorial(numero - 1)        
}
    
/* 12) Programa una función que determine si un número es primo 
       (aquel que solo es divisible por sí mismo y 1) o no, 
       Por ejemplo: miFuncion(7) devolverá true. */

let numeroPrimo = (numero) => {
    if (typeof numero !== "number") return "El primer parámetro debe ser de tipo number."

    if (numero === 0 || numero === 1) return false

    for (i=2; i < numero; i++) {
        if (numero % i === 0) return false
    }

    return true
}

/* 13) Programa una función que determine si un número es par o impar,
       Por ejemplo: miFuncion(29) devolverá Impar. */ 

let esPar = (numero) => {
    if (typeof numero !== "number") return "El primer parámetro debe ser de tipo number."

    return numero % 2 === 0 ? "Es par." : "Es impar."
}

/* 14) Programa una función para convertir grados Celsius a Fahrenheit 
       y viceversa, Por Ejemplo: miFuncion(0,"C") devolverá 32°F. */ 

let gradosConvertidos = (numero, letra) => {
    if (typeof numero !== "number") return "El primer parámetro debe ser de tipo number."
    if (typeof letra !== "string") return "El primer parámetro debe ser de tipo string."
    if (letra.toLowerCase() !== "c" && letra.toLowerCase() !== "f") return "Las unicas unidades de medida que se permiten son C° y F°."
    
    if (letra.toLowerCase() === "c") {
        return numero * 1.8 + 32
    } else {
        return (numero - 32) / 1.8
    }
    }
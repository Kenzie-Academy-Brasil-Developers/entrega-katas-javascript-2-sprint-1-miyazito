// comece a criar a sua função add na linha abaixo

function add (num1, num2){
    return num1 + num2
}
// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(num1, num2){
    let result = 0
    for(let i = 0; i < num2; i++){
        result = add(num1, result)
    }
    return result
}
// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(num1, num2){
    let result = 1
    for(let i = 0; i < num2; i++){
        result = multiply(result, num1)
    } return result
}
// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(num){
    let fact = 1
    if(num !== 0 && num !== 1){
        fact = multiply(num, factorial(num - 1))
    }
    return fact
}
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(num){
    let resultado = 0

    if(num === 1){
        resultado = 1
    } else if(num === 2){
        resultado = 1
    } else {
        resultado = add(fibonacci(num - 1), fibonacci(num - 2))
    }
    return resultado

}

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

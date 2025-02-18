function soma(numero1, numero2, operador) {
    let resultado;
    

    if(operador == '+') {
        resultado = numero1 + numero2
    } else if(operador == 'x') {
        resultado = numero1 * numero2
    } else if(operador =='-') {
        resultado = numero1 - numero2
    } else if(operador == '/') {
        resultado = numero1 / numero2
    }

    return resultado
} 

exports.soma = soma
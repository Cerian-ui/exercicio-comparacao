//criar a função principal que irá juntar as duas frases.
function operadores(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    
    return `${primeiraFrase} ${segundaFrase}`
}

//função que vai nos dizer se os números escolhidos são iguais ou não.
function criaPrimeiraFrase(num1, num2){
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';
    //ao colocarmos esse if e um '' vazio, não receberemos o "não", indicando então que são iguais.
    if (num1 === num2){
        simNao = '';
    }
    return `${primeiraFrase} ${simNao} são iguais`
}

//função que mostrará a soma de valores e nos dirá se é maior ou menor que 10/20.
function criaSegundaFrase(num1, num2){
    const soma = num1 + num2
    let comparaDez = 'menor';
    let comparaVinte = 'menor';
// Com este if, mudamos o valor de comparaDez e comparaVinte para maior, ou seja, podemos mudar o valor de let para encaixar na situação.
    if(soma > 10){
        comparaDez = 'maior';
    }

    if(soma > 20){
        comparaVinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20`
}
//Ao final, faremos com que o console log leia a nossa primeira função, que irá trazer informação das duas abaixo
//No console log basta mudar os números para saber se está tudo ok.
console.log(operadores(10,10));
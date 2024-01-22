let saldoDeVitorias = receberDados(100, 8)

if(saldoDeVitorias <= 10){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível de ferro.")
}else if((saldoDeVitorias === 11) || (saldoDeVitorias <= 20)){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível de bronze.")
}else if((saldoDeVitorias === 21) || (saldoDeVitorias <= 50)){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível de prata.")
}else if((saldoDeVitorias === 51) || (saldoDeVitorias <= 80)){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível de ouro.")
}else if((saldoDeVitorias === 81) || (saldoDeVitorias <= 90)){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível de diamante.")
}else if((saldoDeVitorias === 91) || (saldoDeVitorias <= 100)){
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível lendário.")
}else {
    console.log("O herói de saldo de " + saldoDeVitorias + " está no nível imortal.")
}

function receberDados(vitorias, derrotas){
    let calculo = (vitorias - derrotas)
        return calculo
}
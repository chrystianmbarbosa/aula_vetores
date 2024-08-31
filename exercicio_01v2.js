
let num = [];
let mensagem = "";
let numerostr = "";
// leitura dos numeros nos espaços
for (let i = 0; i < 5; i += 1) {
    numerostr = prompt("Informe um número:");
    num.push(numerostr);
}
for (let i = 0; i < num.length; i++) {
    if((num.length - 1) == i)
        mensagem += num[i] + ".";
    else
        mensagem += num[i] + ", ";    
}
alert(mensagem);
//let num = [5, 6, 7, 8, 9, 10];

let num = [];
// leitura dos numeros nos espaços
num[0] = prompt("Informe o 1º Numero");
num[1] = prompt("Informe o 2º Numero");
num[2] = prompt("Informe o 3º Numero");
num[3] = prompt("Informe o 4º Numero");
num[4] = prompt("Informe o 5º Numero");

let mensagem =
    `${num[0]}, ${num[1]}, ${num[2]}, ${num[3]} e ${num[4]} `;

let mensagem2 =
    num[0] + ", " + num[1] + ", " +
    num[2] + ", " + num[3] + " e " + num[4];

alert(mensagem);

alert(mensagem2);
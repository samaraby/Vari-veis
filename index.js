const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Samara Byanca Monteiro Miranda ";
const anoNascimento = 2007;
const anoAtual = 2024;
const idadeAtual = 17;
const anoQueVem = 2025;
const idade = 18;
const sonho = "ser arquiteta "

console.log(" olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " eu nasci no ano de "  + anoNascimento  + " minha idade é " +  idadeAtual + " no ano que vem  " + anoQueVem + " eu terei " + idade + " ,e meu sonho é " + sonho );

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} e estamos no ano de ${anoAtual} minha idade é ${idadeAtual} no ano que vem ${anoQueVem} eu terei ${idade} e meu sonho é ${sonho} `);

const loginCerto = "samara"
const senhaCerto = 1704
console.log("")
console.log("                               ====================");
console.log("                               =AGENCIA DE VIAGENS=");
console.log("                               ====================");
console.log("")

console.log("+faça seu login+");
console.log("")

var login= entrada("*digite deu login:");
var senha= entrada("*digite sua senha:");

while(login != loginCerto) {
  console.log("=login errado=");
  login = entrada("*digite seu login novamente*");
}
while(senha != senhaCerto) {
  console.log("=senha errado=");
  senha = entrada("*igite sua senha novamente*");
}

console.log("")
const listaDeViagens = new Array(
  `Japão`,
  `Paris`,
  `Canadá`,
  `Estados Unidos`,
  `Roma`
);

console.log(listaDeViagens);

console.log("")
console.log(listaDeViagens[3]);
listaDeViagens.push("coronel vivida");
console.log(listaDeViagens);

console.log("")
listaDeViagens.splice(3,1);
console.log(listaDeViagens);

console.log("")
var nomeComprador = entrada("*qual o seu nome?");;
var idadeComprador = entrada("*qual sua idade?");

if(idadeComprador >= 18){

  console.log("")
  console.log("ja que voce é de maior, podemos vender as passagens para onde seria.")
};

console.log("")
if (idadeComprador < 18){
  console.log(`olá ${nomeComprador} qual seria seu destinos para eu poder ver aqui ser ainda temos passagens? ${listaDeViagens} para sua sorte temos sim passagens disponivel no momento.
 `);
};
// exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.

// exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.

// exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos.”;

var idade:number = 27;
const nome:string = "Davi Borges";
let resultado:any = `Olá meu nome é ` + nome + ` e tenho ` + idade + ` anos.`;

console.log(resultado)
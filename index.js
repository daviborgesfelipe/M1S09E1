// exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.
// exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.
// exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos.”;
var idade = 27;
var nome = "Davi Borges";
var resultado = "Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos.";
console.log(resultado);

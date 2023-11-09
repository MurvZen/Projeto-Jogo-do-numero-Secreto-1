alert ('Bem vindo ao jogo do numero secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto o N.S. nao for igual ao chute
while (chute != numeroSecreto){
    chute = prompt ('Escolha um numero entre 1 e 100');
    // se o numero for o certo
    if (numeroSecreto == chute){
        break;
    } else{
        if (chute > numeroSecreto){
            alert (`o numero secreto é menor que ${chute}`);
        } else {
            alert (`o numero secreto é maior que ${chute}`);}
        // tentativas = tentativas + 1
        tentativas++;
        }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : "tentativa";
alert (`isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
// var consultaCEP = fetch('https://viacep.com.br/ws/14405352/json/')
// //then -> promessa resolvida // catch -> promessa rejeitada
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Esse CEP não existe!')
//     } else 
//     console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído!'))


// console.log(consultaCEP);

//OUTRA MANEIRA DE FAZER C[ODIGO ASSÍNCRONO

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var constultaCEPConvertida = await consultaCEP.json();
        if(constultaCEPConvertida.erro) {
            throw Error('CEP não existe!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = constultaCEPConvertida.localidade;
        logradouro.value = constultaCEPConvertida.logradouro;
        estado.value = constultaCEPConvertida.uf;

        console.log(constultaCEPConvertida);
        return constultaCEPConvertida;

    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente.</p>`
        console.log(erro)
    }
}


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
const form = document.getElementById('form-atividade');//Váriaveis declaradas de forma global
const imgAprovado = '<img src="./images/png-transparent-computer-icons-check-mark-presentation-symbol-check-list-miscellaneous-angle-text.png" alt="check verde" /> ';
const imgReprovado = '<img src="./images/d3826a943b0d3a9d54ec3d3cba01d0ef.png" alt="X vermelho" /> <br/> Prova de recuperação!' 
const atividades = [];//array vazio
const notas = [];//array vazio
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; //coloração do item Aprovado
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';//coloração do item Reprovado
//const notaMinima = parseFloat(prompt("Digite a nota minima: "));

let linhas = ''; //Atribuindo string vazia à variável linhas

form.addEventListener('submit', function (e) { // função que desabilita o reload da página ao clicar em submit

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

//Função adiciona linhas à tabela
function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade'); //atribui o campo por ID onde é digitado na tela a uma variável
    const inputNotaAtividade = document.getElementById('nota-atividade'); //atribui o campo por ID onde é digitado na tela a uma variável

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);
    }

    else {
        atividades.push(inputNomeAtividade.value); //adiciona mais elementos ao final de um array e retorna o novo comprimento desse array, no caso em questão valores inserios pelo usuário
        notas.push(parseFloat(inputNotaAtividade.value));//adiciona mais elementos ao final de um array e retorna o novo comprimento desse array, no caso em questão valores inserios pelo usuário

        let linha = '<tr>'; //atribui a uma variável linhas de uma tabela e seus valores inputados
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 6 ? imgAprovado : imgReprovado}</td>`; //Condition on to test >=7 //Value if true ? // Value if false :
        linha += '</tr>'; // fechamento das linhas 

        linhas += linha; // igual a linhas = linhas + linha;
    }

    inputNomeAtividade.value = '';//Campos digitados em input recebem valor de string vazia ao término da inserção nos campos meio que resetando os inputs
    inputNotaAtividade.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

}


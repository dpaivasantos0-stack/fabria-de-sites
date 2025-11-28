const input= document.querySelector(".area input"); // seleciona o elemento com class "area" (chamar uma classe)
const criar = document.querySelector(".area button"); //para chamar um id
const area = document.getElementById('area'); //seleciona o elemento com class "area" (conde a lista sera exibida)
const lista = document.createElement('ul'); //para chamar ul
let atividades = [];
// para criar uma variavel

lista.id = "lista-atividades"; //para dar um id para lista de tarefas
area.appendChild(lista); //adiciona a lista criada dentro da area

function novaAtividade(atividade) { //para adiocionar uma função
const modelo = document.createElement('li'); //para criar um variavel chamada modelo
modelo.classList.add('atividade'); 
const tarefa = {
    completo: false,  
    nome: atividade
};

modelo.innerHTML = `<div class='card-atividade'>${criarHtmlTarefa(tarefa,atividades.length)}</div>`

lista.appendChild(modelo)

const checkbox = document.querySelector(`#tarefa-${atividade.length}`);
checkbox.addEventListener("change",function (){
const indiceTarefa = this.id.split("-")[1];
atividades[indiceTarefa].completo = this.checked;
 })

atividades.push(tarefa);
atualizarContadores()
}
 function criarHtmlTarefa(tarefa) {
 const li = document.createElement ("li");
 li.innerHTML = ´

 return `input type="checkbox"
 id="tarefa-${indice}"
 value="${tarefa.nome}" ${estaCompleta}/>
 <span>${tarefa.nome}</span>
 <button title="deletar tarefa"
 class="remove-btn"
 data-index="${indice}"><img></button>`;
}


function atualizarContadores(){
const criadas = document.getElementById("criadas");
const concluidas = document.getElementById("concluidas");
criadas.innerHTML = atividade.length;
concluidas.innerText = `${atividade.filter(at => at.completo).length} de ${atividades.length}`;
}

criar.addEventListener("click", function () {
const texto = input.value.trim();
if (texto !== ""){
novaAtividade(texto);
}
})
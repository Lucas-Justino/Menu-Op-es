function adicionar(lista) {
    let id = prompt("Digite um identificador:");
    let index = verificarId(lista, id);
    if (index != -1) {
        window.alert("ID já existe!");
        return;
    }
    let entrada = prompt("Adicionar uma tarefa:");
    if(entrada == null || entrada.trim() == ""){
        window.alert("Entrada Incorreta!")
        return;
    }
    let tarefa = { id: id, tarefa: entrada };
    lista.push(tarefa);
}

function remover(lista) {
    let id = prompt("Digite o ID de uma tarefa para remover:");
    let index = verificarId(lista, id);
    if (index == -1) {
        window.alert("ID não encontrado!");
        return lista;
    }
    lista.splice(index, 1);
}

function editar(lista) {
    let id = prompt("Digite o ID da tarefa a ser editada:");
    let index = verificarId(lista, id);
    if (index == -1) {
        window.alert("ID não encontrado!");
        return;
    }
    let novaTarefa = prompt("Editar tarefa:");
    lista[index].tarefa = novaTarefa;
}

function mostrar(lista) {
    if(lista.length == 0){
        console.log("Lista Vazia!")
        return;
    }
    lista.forEach((element) => {
        console.log(`ID: ${element.id} TAREFA: ${element.tarefa}`);
    });
}

function verificarId(lista, id) {
    return lista.findIndex((element) => element.id == id);
}

function obterTarefa(lista) {
    let id = prompt("Digite o ID da tarefa:");
    let index = verificarId(lista, id);
    if (index == -1) {
        window.alert("ID não encontrado!");
    }
    return lista[index];
}

let lista = [];

function escolherOpcao(op) {
    switch (op) {
        case 1:
            adicionar(lista);
            break;
        case 2:
            editar(lista);
            break;
        case 3:
            remover(lista);
            break;
        case 4:
            mostrar(lista);
            break;
        case 5:
            let tarefa = obterTarefa(lista);
            console.log(tarefa);
            break;
        case 7:
            window.alert("Fim da execução!");
            lista = [];
            break
        default:
            window.alert("Essa opção não existe");
            break;
    }
}
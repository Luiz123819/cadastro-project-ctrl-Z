let nome = document.getElementById('nome');
let turma = document.getElementById('turma');
let turno = document.getElementById('turno');
let obs = document.getElementById('observacoes');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];
let okButton = document.getElementsByClassName('ok-button')[0];

function confirmar() {
    if (nome.value === "") {
        modal.style.display = 'block';
        return false;
    }
    else if (turma.value === "") {
        modal.style.display = 'block';
        return false;
    }
    else if (turno.value === "") {
        modal.style.display = 'block';
        return false;
    }
    else if (obs.value === "") {
        modal.style.display = 'block';
        return false;
    }
}

// Quando o usuário clicar no "x", fecha o modal
span.onclick = function () {
    modal.style.display = 'none';
}

// Quando o usuário clicar no botão "OK", fecha o modal
okButton.onclick = function () {
    modal.style.display = 'none';
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function Limpar() {
    let nome = document.getElementById('nome');
    let turma = document.getElementById('turma');
    let turno = document.getElementById('turno');
    let obs = document.getElementById('observacoes');
    nome.value = "";
    turma.value = "";
    turno.value = "";
    obs.value = "";
}
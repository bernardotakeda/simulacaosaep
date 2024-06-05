function redirecionar() {
    if (document.getElementById('estudante').checked) {
        window.location.href = "pagina_estudante.html";
    } else if (document.getElementById('bibilio').checked) {
        window.location.href = "pagina_bibliotecaria";
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

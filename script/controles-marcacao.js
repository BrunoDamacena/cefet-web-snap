const checkbox = document.querySelector('#visibilidade-das-marcacoes');

checkbox.addEventListener('change', function(event) {
    let marcacoes = document.querySelectorAll('.marcacao');
    for (marcacao of marcacoes) {
        marcacao.style.display = checkbox.checked ? 'none' : '';   
    }
});
document.getElementById("emailButton").addEventListener("click", function(event) {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
  
    if (usuario.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        event.preventDefault();
        window.location.href = "https://herickhannier.github.io/Psicologia/inicio";
    }
});
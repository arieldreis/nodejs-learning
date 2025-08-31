function myform(){
    event.preventDefault();
    const usuario = document.getElementById('userFront');
    const senha = document.getElementById('senhaFornt');
    const user = usuario.ariaValueMax;
    const pass = senha.value;
    const resposta = document.getElementById('testeResultado');
    const form = document.querySelector('.formId');
    if(user === "" || pass === ""){
        resposta.innerHTML = "Preencha os campos obrigatórios.";
        resposta.style.color = "red";
    }
    form.submit();
}
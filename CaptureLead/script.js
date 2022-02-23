let formulario = document.getElementById('form')
formulario.addEventListener('submit' , function(e) {

    
    const nome = document.getElementById("name");
    const sobrenome = document.getElementById("last-name");
    const email = document.getElementById("email");
    const senha = document.getElementById("pass");
    todosVazios()
    
    function todosVazios() {
      if(nome.value == '' && sobrenome.value == '' && email.value == '' && senha.value == ''){
        alert('Nenhum dado informado, tente novamente.');
        e.preventDefault();
        return
      }
      else{
        if (nome.value == "") {
          alert("Nome não informado");
          e.preventDefault();
          nome.focus();
          return;
        }
    
        if (sobrenome.value == "") {
          alert("Sobrenome não informado");
          sobrenome.focus();
          e.preventDefault();
          return;
        }
    
        if (email.value == "") {
          alert("E-mail não informado");
          email.focus();
          e.preventDefault();
          return;
        }
        if (senha.value == "") {
          alert("Senha não informada");
          e.preventDefault();
          senha.focus();
          return;
        }
      }
      alert("Formulário enviado!");
    }
    
});

  
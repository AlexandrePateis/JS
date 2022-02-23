let formulario = document.getElementById('form')
formulario.addEventListener('submit' , function(e) {

    
    const nome = document.getElementById("name");
    const sobrenome = document.getElementById("last-name");
    const email = document.getElementById("email");
    const senha = document.getElementById("pass");
    
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
      e.preventDefault();
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
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

    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
});

  
function Pessoa(nome) {
  this.nome = nome;

  this.metodo = () => {
    console.log('Sou um metodo')
  }
}

const p1 = new Pessoa('Luiz')
console.log(p1.nome)
p1.metodo()
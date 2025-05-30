const finalizar = document.getElementById("finalizar");

finalizar.addEventListener("click", (event) => {
  const txtNome = document.querySelectorAll("p");
  const nome = document.getElementById("nome").value;

  const regex = /^[\p{L} ]+$/u;

  if (!regex.test(nome) || nome.length < 5) {
    event.preventDefault();
    txtNome[0].classList.add("nomeClass");
  } else {
    txtNome[0].classList.remove("nomeClass");
  }

  const email = document.getElementById("email").value;
  const regex2 = /^[\w.+-]+@gmail\.com$/;

  if (!regex2.test(email)) {
    event.preventDefault();
    txtNome[1].classList.add("nomeClass");
  } else {
    txtNome[1].classList.remove("nomeClass");
  }

  const senha = document.getElementById("senha").value;
  const regex3 = /^[\p{L}0-9]+$/u;

  if (!regex3.test(senha) || senha.length < 8) {
    event.preventDefault();
    txtNome[2].classList.add("nomeClass");
  } else {
    txtNome[2].classList.remove("nomeClass");
  }

  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (confirmarSenha != senha) {
    event.preventDefault();
    txtNome[3].classList.add("nomeClass");
  } else {
    txtNome[3].classList.remove("nomeClass");
  }

  if (
    confirmarSenha != senha ||
    !regex3.test(senha) ||
    senha.length < 8 ||
    !regex2.test(email) ||
    !regex.test(nome) ||
    nome.length < 5
  ) {
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "2575",
      database: "form_login",
    });

    if (connection == connection.errno) {
      alert("erro");
    } else {
      alert("conectado");
    }
  }
});

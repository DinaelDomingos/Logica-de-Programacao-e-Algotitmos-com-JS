// cria referência ao form e aos elementos h3 e h4 (respostas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o form for submetido/clicado o botão
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; // obtém o conteúdo do campo título
  const duracao = Number(frm.inDuracao.value); // obtém o conteúdo do campo duração

  const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado da divisão
  const minutos = duracao % 60; // obtém o resto da divisão

  resp1.innerText = titulo; // exibe o título do filme
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`; // exibe a duração formatada

  e.preventDefault(); // evita o envio do form
});
document.getElementById("form-agendamento").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value
let whats = document.getElementById("whats").value
let servico = document.getElementById("servico").value
let data = document.getElementById("data").value

let mensagem = `Olá! Gostaria de agendar um horário.

Nome: ${nome}
WhatsApp: ${whats}
Serviço: ${servico}
Data desejada: ${data}`

let numero = "5541987426394"

let url = `https://wa.me/${5541987426394}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

})
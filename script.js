let cookie = document.getElementById("cookie");
let message = document.getElementById("message");
let help = document.getElementById("help");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
  cookie.play();
  await sleep(350);
  help.remove();
  message.classList.add("showed");
}

cookie.addEventListener("click", start, false);
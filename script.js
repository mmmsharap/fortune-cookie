let cookie = document.getElementById("cookie");
let message = document.getElementById("message");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
  cookie.play();
  await sleep(1750);
  message.classList.add("showed");
}

cookie.addEventListener("click", start, false);
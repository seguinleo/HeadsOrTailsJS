const coin = document.querySelector(".coin");
const flipBtn = document.querySelector("button");

flipBtn.addEventListener("click", async () => {
  disableButton();
  const i = await getRandomNumber();
  coin.style.animation = "none";
  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
  }
});

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3000);
}

async function getRandomNumber() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const result = array[0] % 2;
    console.log(`using Crypto: ${result}`);
    return result;
  } else {
    const result = Math.floor(Math.random() * 2);
    console.log(`using Math: ${result}}`);
    return result;
  }
}

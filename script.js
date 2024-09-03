const adviceId = document.getElementById("advice-card__id");
const adviceQuote = document.getElementById("advice-card__quote");
const rerollBtn = document.getElementById("dice-btn");

const fetchAdvice = async (e) => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    showAdvice(data);
  } catch (err) {
    console.error("Promise rejected");
  }
};

const showAdvice = (advice) => {
  adviceId.textContent = advice.slip.id;
  adviceQuote.textContent = advice.slip.advice;
};

fetchAdvice();

rerollBtn.addEventListener("click", () => {
  fetchAdvice();
});

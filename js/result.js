const userAnswer = JSON.parse(localStorage.getItem("userAnswer"));
const score = Number(localStorage.getItem("score"));
const status = document.querySelector(".status");

let count = 0;
for (const key in userAnswer) {
  count++;
}
// console.log(score, count);
const scorePercentage = document.querySelector(".score");
let resPercentage = count ? (score / count) * 100 : 0;
// console.log(resPercentage);

if (resPercentage > 70 && score <= 100) {
  status.textContent = "You Succeed";
  status.style.color = "green";
  scorePercentage.style.color = "green";
} else if (resPercentage >= 40 && score < 70) {
  status.textContent = "You passed";
  status.style.color = "orange";
  scorePercentage.style.color = "orange";
} else if (resPercentage >= 0 && score < 40) {
  status.textContent = "You failed";
  status.style.color = "red";
  scorePercentage.style.color = "red";
}

scorePercentage.textContent = `${resPercentage}%`;

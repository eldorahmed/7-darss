const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const text = document.getElementById("text");
const range = document.getElementById("range");

input.addEventListener("input", () => {
  document.body.style.background = `linear-gradient(${range.value}deg,${input.value},#979797)`;
  text.textContent = `linear-gradient(${range.value}deg,${input.value},${input2.value})`;
});
input2.addEventListener("input", () => {
  document.body.style.background = `linear-gradient(${range.value}deg,${input.value},${input2.value})`;
  text.textContent = `linear-gradient(${range.value}deg,${input.value},${input2.value})`;
});
range.addEventListener("input", () => {
  document.body.style.background = `linear-gradient(${range.value}deg,${input.value},${input2.value})`;
  text.textContent = `linear-gradient(${range.value}deg,${input.value},${input2.value})`;
});



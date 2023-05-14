const cbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type='submit']");
cbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

elements.forEach(function (element) {
  const color = getRandomColor();

  element.innerHTML = color;
  element.style.backgroundColor = color;
  selectColor.innerHTML = color;
  selectColor.style.backgroundColor = color;
});

function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("Verification Success");
      submitBtn.disabled = false;
      submitBtn.classList.remove(btn - info);
      submitBtn.classList.add(btn - success);
    } else {
      alert("Verification failed.");
      location.reload(true);
    }
  });
});

function changeColor(button) {
  const card = button.parentElement;

  // Random color generator
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  card.style.background = randomColor;
}

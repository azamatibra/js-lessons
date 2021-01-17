
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function colorGenerate() {
  let color = Math.floor(Math.random() * 16777216).toString(16);
  return "#000000".slice(0, -color.length) + color;
}

let number = randomNumber(100, 200);
let bookCircle = $(".book__circle");
for (let i = 0; i < bookCircle.length; i++) {
  $(bookCircle[i]).css({
    background: colorGenerate(),
    display: "inline-block",
    "border-radius": "50%",
    width: number,
    height: number,
    top: randomNumber(1, 100) + "%",
    left: randomNumber(1, 100) + "%",
  });
}



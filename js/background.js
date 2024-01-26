const images = ["img.00.jpeg", "img01.jpeg", "img02.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const backGroundImg = document.createElement("img");

backGroundImg.src = `img/${chosenImg}`;

document.body.appendChild(backGroundImg);

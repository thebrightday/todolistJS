const images = ["2 (2).jpg", "3 (2).jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage)
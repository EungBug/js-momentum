const images = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg4.jpg', 'bg5.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
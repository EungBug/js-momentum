const images = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg4.jpg', 'bg5.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;

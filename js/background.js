const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);
bgImage.className = 'bgImg';
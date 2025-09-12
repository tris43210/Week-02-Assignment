console.log(`tessstinnggg`);

const imageContainer = document.getElementById(`imgHolder`);

const imageArray = [
  { src: `./resources/Green3dRender.webp`, alt: `Impressive Green 3d Render` },
  { src: `./resources/Pink3dRender.webp`, alt: `Impressive Pink 3d Render` },
];

// Basic Functionality of appending images to the container

function createGreenImg() {
  const greenImg = document.createElement(`img`);
  greenImg.src = imageArray[0].src;
  imageContainer.appendChild(greenImg);
}

function createPinkImg() {
  const pinkImg = document.createElement(`img`);
  pinkImg.src = imageArray[1].src;
  imageContainer.appendChild(pinkImg);
}

createGreenImg();
createPinkImg();

console.log(imageArray[0]);
console.log(imageContainer);

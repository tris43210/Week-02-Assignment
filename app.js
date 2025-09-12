console.log(`tessstinnggg`);

const imageContainer = document.getElementById(`imgHolder`);

const imageArray = [
  { src: `./resources/Green3dRender.webp`, alt: `Impressive Green 3d Render` },
  { src: `./resources/Pink3dRender.webp`, alt: `Impressive Pink 3d Render` },
  { src: `./resources/Grey3dRender.webp`, alt: `Impressive Grey 3d Render` },
];

function createThumbnail() {
  imageArray.forEach(function (image) {
    let createImg = document.createElement(`img`);
    createImg.src = image.src;
    imageContainer.appendChild(createImg);
  });
}

function createBigImg() {
  imageArray.forEach(function () {});
}

console.log(imageArray);
console.log(createThumbnail());

console.log(`tessstinnggg`);

const imageContainer = document.getElementById(`imgHolder`);
const displayContainer = document.getElementById(`bigContainer`);
const rightButton = document.getElementById(`right`);
const leftButton = document.getElementById(`left`);

const imageArray = [
  { src: `./resources/Green3dRender.webp`, alt: `Impressive Green 3d Render` },
  { src: `./resources/Pink3dRender.webp`, alt: `Impressive Pink 3d Render` },
  { src: `./resources/Grey3dRender.webp`, alt: `Impressive Grey 3d Render` },
];

let indexNo = 0 

function createThumbnail() {
  imageArray.forEach(function (image, index) {
    let createImg = document.createElement(`img`);
    createImg.src = image.src;
    imageContainer.appendChild(createImg);

    createImg.addEventListener(`click`, function () {
      displayContainer.innerHTML = ``;
      let imageDisplay = document.createElement(`img`);
      imageDisplay.src = image.src;
      displayContainer.appendChild(imageDisplay);
    });
    return createImg; 
  });
}



function next() {
  rightButton.addEventListener('click', function () {
    displayContainer.innerHTML = ``
    indexNo = (indexNo + 1) % imageArray.length; 
    let newImg = document.createElement(`img`); 
    newImg.src = imageArray[indexNo].src; 
    displayContainer.appendChild(newImg);  
  });
}



next() 

console.log(displayContainer);
console.log(imageArray);
createThumbnail();
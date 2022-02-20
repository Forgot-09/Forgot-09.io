const image = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
]
function intervalImage(){
    chosenImage = image[Math.floor(Math.random() * image.length)];
    
    
    //crate img tag on javascript
    imageUrl = `url("./img/${chosenImage}")`;
    document.body.style.background = `${imageUrl} no-repeat`;
    document.body.style.backgroundSize = "100vw 100vh";

}
let chosenImage = 0;

intervalImage();

setInterval(intervalImage, 100000);
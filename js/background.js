const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const container = document.querySelector(".container");

function getIamge() {
    const changeImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.style = "width:100%; height:100%";
    bgImage.src = `img/${changeImage}`;
    
    container.style = `background: url("img/${changeImage}"); background-size: 100% 100%; opacity: 0.5`;    
}


getIamge();
setInterval(getIamge, 3000);

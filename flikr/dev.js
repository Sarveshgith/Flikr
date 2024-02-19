
const backgroundImages = ["./night-sky-6245049.jpg","./ocean-3605547.jpg","./pexels-arkkrapol-anantachote-1571746.jpg","./pexels-liger-pham-1108701.jpg","./pexels-piccinng-3075993.jpg", "./river-5572289.jpg", "./star-trails-1846734.jpg"];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    document.body.style.background = `url('${selectedImage}')`;
    document.body.style.backgroundSize = 'cover';
  }
  

setInterval(changeBackgroundImage, 5000);
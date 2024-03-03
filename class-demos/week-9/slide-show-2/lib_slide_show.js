export { loadImages, startSlideShow, getToggleHandler };
// private variables and constants
let timer = null;
let play = true;
let speed = 2000;
const nodes = { image: null, caption: null };
const img = { cache: [], counter: 0 };
// private functions
const stopSlideShow = () => clearInterval(timer);
const displayNextImage = () => {
  img.counter = ++img.counter % img.cache.length;
  const image = img.cache[img.counter];
  nodes.image.attr("src", image.src);
  nodes.image.attr("alt", image.alt);
  nodes.caption.text(image.alt);
};
// public functions
const loadImages = (slides) => {
  for (let slide of slides) {
    const image = new Image();
    image.src = "images/" + slide.href;
    image.alt = slide.title;
    img.cache.push(image);
  }
};
const startSlideShow = (image, caption) => {
  if (image && caption) {
    nodes.image = image;
    nodes.caption = caption;
  }
  displayNextImage();
  timer = setInterval(displayNextImage, speed);
};
const getToggleHandler = () => {
  return (evt) => {
    if (play) {
      stopSlideShow();
    } else {
      startSlideShow();
    }
    const button = evt.currentTarget;
    button.value = play ? "Resume" : "Pause";
    play = !play; // toggle play flag
  };
};

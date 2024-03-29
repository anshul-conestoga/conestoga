import * as slideShow from "./lib_slide_show.js";
$(document).ready(() => {
  // define the slides
  const slides = [
    { href: "release.jpg", title: "Catch and Release" },
    { href: "deer.jpg", title: "Deer at Play" },
    { href: "hero.jpg", title: "The Big One!" },
    { href: "bison.jpg", title: "Roaming Bison" },
  ];
  // attach the event handler for the Play/Pause button
  $("#play_pause").click(slideShow.getToggleHandler());
  // load the images and start the slide show
  slideShow.loadImages(slides);
  slideShow.startSlideShow($("#image"), $("#caption"));
});

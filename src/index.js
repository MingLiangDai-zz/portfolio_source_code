import anime from "animejs/lib/anime.es";

const linkTextContent = ["GitHub", "LinkedIn", "Resume", "Email"];

const linkBtnElems = document.querySelector(".hero").querySelectorAll("a");

linkBtnElems.forEach((link, index) => {
  const linkText = link.querySelector(".linkText");
  linkText.textContent = linkTextContent[index];
});

//Animations
anime
  .timeline({})
  .add({
    targets: ".hero div h1, .hero div h4",
    easing: "easeInOutSine",
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(250),
  })
  .add({
    targets: ".hero div a",
    easing: "spring(1, 100, 10, 0)",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(500),
  })
  .add({
    targets: "#experience",
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutSine",
  })
  .add({
    targets: ".experience .card",
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(250),
    easing: "easeInOutSine",
  })
  .add({
    targets: "#projects",
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutSine",
  })
  .add({
    targets: ".projects .card",
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(250),
    easing: "easeInOutSine",
  });

anime({
  targets: "#ink",
  scale: [0, 1],
  duration: 500,
  delay: 3000,
  easing: "easeInOutQuad",
});

import ScrollReveal from "scrollreveal";

function scrollRevealFunc() {
  // ScrollReveal базовые настройки для всех элементов
  ScrollReveal({
    distance: "60px",
    duration: 2800,
  });

  ScrollReveal().reveal(`.hint-discover, .discover__title`, {
    origin: "left",
  });

  ScrollReveal().reveal(`.header, .partners`, {
    origin: "top",
  });

  ScrollReveal().reveal(`.scroll-discover, .discover__text`, {
    origin: "right",
  });

  ScrollReveal().reveal(`.discover__form`, {
    origin: "bottom",
  });
}

export default scrollRevealFunc;

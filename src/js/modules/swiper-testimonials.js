// npm install swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc(id) {
  const swiper = new Swiper("#testimonials-col-" + id, {
    direction: "vertical",
    slidesPerView: "auto",
    // slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 10000,
    loop: true,
    autoplay: {
      // delay: 0.8,
      disableOnInteraction: false,
    },
  });
}

export default swiperFunc;

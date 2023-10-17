// npm install swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc() {
  const swiper = new Swiper("#swiper-popular", {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
}

export default swiperFunc;

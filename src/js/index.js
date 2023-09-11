// import hello from "./modules/hello";

// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";

// new AirDatepicker("#datepicker");

// console.log(hello);
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { easepick } from "@easepick/bundle";
import autoComplete from "@tarekraafat/autocomplete.js";

const autoCompleteJS = new autoComplete({
  selector: "#country",
  placeholder: "Here is a placeholder",
  data: {
    src: ["country1", "country2", "country3"],
  },
  resultItem: {
    highlight: true,
  },
  resultsList: {
    maxResults: 10,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
  searchEngine: "strict", // strict | loose
});

// import { easepick } from '@easepick/bundle';
const picker = new easepick.create({
  element: document.getElementById("date"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
});

// npm install swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

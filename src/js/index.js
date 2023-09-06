// import hello from "./modules/hello";

// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";

// new AirDatepicker("#datepicker");

// console.log(hello);

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

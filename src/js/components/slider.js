import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use([Navigation, Scrollbar]);

const el = ".trainers__content";

const swiper = new Swiper(el, {
  slidesPerView: "auto",
  // slidesPerView: 4,
  spaceBetween: 40,
  // loop: true,
  scrollbar: {
    el: ".trainers__scroll",
    draggable: true,
  },
  navigation: {
    nextEl: ".trainers__slider-btn--next",
    prevEl: ".trainers__slider-btn--prev",
  },
});



/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  const mySwiper = new Swiper('.swiper-container-questions', {
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
      prevEl: '.questions__slider-btn--prev',
      nextEl: '.questions__slider-btn--next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
};

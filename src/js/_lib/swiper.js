

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
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      prevEl: '.questions__slider-btn--prev',
      nextEl: '.questions__slider-btn--next',
    },
    breakpoints: {
      1439: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 1
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true
    // }
  });
};

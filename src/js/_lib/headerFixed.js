

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
    headerElement = $('#header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
    _tlLogo.play();
  } else {
    headerElement.removeClass("header--fixed");
    _tlLogo.reverse();
  }

};
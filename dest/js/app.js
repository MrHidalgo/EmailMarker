"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
  var mySwiper = new Swiper('.swiper-container-questions', {
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
      prevEl: '.questions__slider-btn--prev',
      nextEl: '.questions__slider-btn--next'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  // WebFont.load({
  //   google: {
  //     families: [
  //       'Roboto:100,300,400,500,700,900'
  //     ]
  //   }
  // });

  /**
    * @description
   */
  var WebFontConfig = {
    custom: {
      families: ['Dakota:n1', 'Eina01:n3,n4,n6,n7', 'Eina02:n3,n4,n6,n7', 'Eina03:n3,n4,n6,n7', 'Eina04:n3,n4,n6,n7', 'Brandon Grotesque:n7']
    }
  };
};
/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
  var initCookie = function initCookie() {

    /**
     *
     * @param name
     * @param value
     * @param expires
     * @param path
     * @param domain
     * @param secure
     */
    var setCookieStore = function setCookieStore(name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
    };

    /**
     *
     * @param cookieName
     * @returns {*}
     */
    var getCookieStore = function getCookieStore(cookieName) {
      var results = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');

      if (results) {
        return unescape(results[2]);
      } else {
        return null;
      }
    };

    if (getCookieStore('cookieAgree') === 'true') {
      $('#cookie').hide();
    } else {
      $('#cookie').fadeIn(350).css({
        'display': 'flex'
      });
    }

    $('.cookie__right').on('click', function (ev) {
      if (getCookieStore('cookieAgree') !== 'true') {
        $('#cookie').fadeOut(350);
        setCookieStore('cookieAgree', 'true');
      }
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================
    initSwiper();

    // callback
    // ==========================================
    initCookie();
  };
  initJquery();
});
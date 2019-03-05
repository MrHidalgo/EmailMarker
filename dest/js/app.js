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
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('#header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
    _tlLogo.play();
  } else {
    headerElement.removeClass("header--fixed");
    _tlLogo.reverse();
  }
};

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
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  initHeaderFixed();
});

/**
 * Animation variable
 */
var _tlLogo = new TimelineMax({
  paused: true
});

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

  var initFollow = function initFollow() {
    /**
     *
     * @param el
     * @returns {boolean}
     */
    var isAnyPartOfElementInViewport = function isAnyPartOfElementInViewport(el) {
      var rect = $(el)[0].getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
      var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

      return vertInView && horInView;
    };

    $(window).on('scroll resize load', function () {
      if (isAnyPartOfElementInViewport('#footer')) {
        $('#follow').fadeOut(350);
      } else {
        $('#follow').fadeIn(350);
      }
    });
  };

  var initLogoAnimation = function initLogoAnimation() {
    _tlLogo.staggerTo($('#EmailMarker path'), 0.45, { opacity: 0, ease: Power1.easeInOut }, 0.05);
    // .to($('#logoImage'), 0.95, {x:150}, -0.1)
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
    initLogoAnimation();

    // callback
    // ==========================================
    initCookie();
    initFollow();
  };
  initJquery();
});
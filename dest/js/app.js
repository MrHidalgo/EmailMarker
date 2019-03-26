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
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

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
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function hideElement($elem) {
          $elem.hide();
        },
        showElement: function showElement($elem) {
          $elem.show();
        }
      });
    });
  }
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
 * @name scrollAnimation
 *
 * @param elem
 * @param el
 *
 * @description
 */
var scrollAnimation = function scrollAnimation(elem, el) {

  $(elem).css({
    'animation-name': $(el).data('animation-name') ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
    'animation-delay': $(el).data('animation-delay') || '0s',
    'animation-duration': $(el).data('animation-duration') || '1s'
  });
};

/**
 * @name initViewPortChecker
 *
 * @param className {String}              - default is `viewport-hide-js`
 * @param classNameToAdd {String}         - default is `viewport-show-js animated`
 * @param offsetVal {Number}              - default is 100
 * @param callbackFunctionName {Object}   - default is `scrollAnimation()`
 *
 * @description Detects if an element is in the viewport and adds a class to it
 *
 * You can to add some attribute:
 * - <div data-vp-add-class="random"></div>                       > classToAdd
 * - <div data-vp-remove-class="random"></div>                    > classToRemove
 * - <div data-vp-remove-after-animation="true|false"></div>      > Removes added classes after CSS3 animation has completed
 * - <div data-vp-offset="[100 OR 10%]"></div>                    > offset
 * - <div data-vp-repeat="true"></div>                            > repeat
 * - <div data-vp-scrollHorizontal="false"></div>                 > scrollHorizontal
 */
var initViewPortChecker = function initViewPortChecker() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-hide-js";
  var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "viewport-show-js animated";
  var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var callbackFunctionName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scrollAnimation;


  $("." + className).not(".full-visible").each(function (idx, el) {

    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      classToRemove: className,
      removeClassAfterAnimation: true,
      offset: offsetVal,
      repeat: false,
      callbackFunction: function callbackFunction(elem, action) {

        callbackFunctionName(elem, el);
      }
    });
  });
};

var initViewPortCheckerAnimation = function initViewPortCheckerAnimation() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-hide-js";
  var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "viewport-show-js animated";
  var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var callbackFunctionName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scrollAnimation;


  $("." + className).not(".full-visible").each(function (idx, el) {

    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      classToRemove: className,
      removeClassAfterAnimation: false,
      offset: offsetVal,
      repeat: false,
      callbackFunction: function callbackFunction(elem, action) {

        callbackFunctionName();
      }
    });
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
var _tl = new TimelineMax();
var _tlLogo = new TimelineMax({ paused: true });
var _tlWoman = new TimelineMax({ paused: true });
var _tlMan = new TimelineMax({ paused: true });
var _tlValidateCard = new TimelineMax({ paused: true });
var _tlValidateDesc = new TimelineMax({ paused: true });
var _tlVerification = new TimelineMax({ paused: true });

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

  /**
   *
   */
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

  /**
   *
   */
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

  /**
   *
   */
  var initLogoAnimation = function initLogoAnimation() {
    _tlLogo.staggerTo($('#EmailMarker path'), 0.3, { opacity: 0, ease: Power1.easeInOut }, -0.025);
  };

  var initSVGAnimation = function initSVGAnimation() {
    var svgHackVisible = function svgHackVisible() {
      _tlWoman.set(".main-woman-cloud, .main-woman-flower, .main-woman-plane, #main-woman", {
        transformOrigin: "center"
      });
      _tlMan.set(".main-man-flower, #main-man-email, .main-man-plane, #main-man", {
        transformOrigin: "center"
      });
      _tlValidateCard.set("#validate-0-menu, #validate-0-num-1, #validate-0-num-2, #validate-0-num-3", {
        transformOrigin: "center"
      });
    };
    var initVerificationAnimation = function initVerificationAnimation() {
      _tlVerification.set('.verification__image svg', {
        visibility: "visible"
      });

      _tlVerification.fromTo('.verification-flower', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }).fromTo('.verification-cloud', 1, { opacity: 0, x: '-150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.verification-point', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=1').fromTo('#verification-graph-line', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.7').fromTo('#verification-rect-main, #verification-rect-gr', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.3').fromTo('#verification-graph-circle', 1.5, { opacity: 0, scale: 0, rotation: 360, transformOrigin: 'center' }, { opacity: 1, scale: 1, rotation: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('#verification-data', 0.75, { opacity: 0, x: '100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=1').fromTo('.verification-download-list-0', 1, { opacity: 0, x: '100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=1').fromTo('.verification-download-list-1', 1, { opacity: 0, x: '150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('#verification-man', 1, { opacity: 0, x: '-200px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=1').fromTo('#verification-man-card', 0.75, { opacity: 0, y: '-100px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=1');

      _tlVerification.play();
    };
    var initValidateAnimation0 = function initValidateAnimation0() {
      _tl.set(".validate__image-0 svg", {
        visibility: "visible"
      });

      _tlValidateCard.fromTo('#validate-0-rect-bg, .validate-0-point-0, .validate-0-point-1', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }).fromTo('#validate-0-play, .validate-0-line, #validate-0-documentation', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.75').fromTo('#validate-0-menu', 1, { opacity: 0, y: '-100px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=1').fromTo('#validate-0-itegration', 1, { opacity: 0, x: '-100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.25').fromTo('#validate-0-resultat', 1, { opacity: 0, x: '100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=1').fromTo('#validate-0-upload', 0.5, { opacity: 0, y: '20px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=1').fromTo('#validate-0-bar, #validate-0-filter', 0.75, { opacity: 0, y: '20px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#validate-0-lists', 0.75, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('#validate-0-upload-2', 0.5, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#validate-0-num-1', 0.75, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Power1.easeInOut }, '-=0.35').fromTo('#validate-0-lists-2', 0.5, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#validate-0-num-2', 0.75, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Power1.easeInOut }, '-=0.15').fromTo('#validate-0-download-list', 0.5, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#validate-0-num-3', 0.75, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Power1.easeInOut });

      _tlValidateCard.play();
    };
    var initValidateAnimation1 = function initValidateAnimation1() {
      _tl.set(".validate__image-1 svg", {
        visibility: "visible"
      });

      _tlValidateDesc.fromTo('.validate-1-flower-1', 0.45, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }).fromTo('.validate-1-flower-2', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.1').fromTo('.validate-1-flower-3', 0.45, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.3').fromTo('.validate-1-flower-4', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.25').fromTo('.validate-1-circle', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=1').fromTo('.validate-1-table-1', 0.35, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', ease: Power1.easeInOut }, '-=0.3').fromTo('.validate-1-table-2', 0.35, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', ease: Power1.easeInOut }, '-=0.3').fromTo('.validate-1-table-3', 0.35, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', ease: Power1.easeInOut }, '-=0.3').fromTo('.validate-1-table-4', 0.35, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', ease: Power1.easeInOut }, '-=0.3').fromTo('#validate-1-pc', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.5').fromTo('.validate-1-block-1', 0.75, { opacity: 0, x: '-100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.validate-1-block-2', 0.75, { opacity: 0, x: '100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.validate-1-block-3', 0.75, { opacity: 0, x: '-150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.validate-1-block-4', 0.75, { opacity: 0, x: '150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.validate-1-block-5', 0.75, { opacity: 0, x: '-100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.validate-1-block-6', 0.75, { opacity: 0, x: '100px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('#validate-1-man', 1, { opacity: 0, x: '-150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#validate-1-woman', 1, { opacity: 0, x: '150px' }, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=0.75');

      _tlValidateDesc.play();
    };
    var initHMainWomanAnimation = function initHMainWomanAnimation() {
      _tl.set(".h-main__bg svg", {
        visibility: "visible"
      });
      _tlWoman.fromTo('.main-woman-cloud-0', 1, { opacity: 0, x: '-400px', y: '30px', scale: 0 }, { opacity: 1, x: 0, scale: 1, ease: Power1.easeInOut }).fromTo('.main-woman-cloud-1', 0.75, { opacity: 0, x: '-200px', scale: 0 }, { opacity: 1, x: 0, scale: 1, ease: Power1.easeInOut }, '-=0.5').fromTo('.main-woman-flower-0, .main-woman-flower-1, .main-woman-flower-2', 0.75, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.1').fromTo('#main-woman', 1, { opacity: 0, x: '-200px' }, { opacity: 1, x: 0, ease: Power1.easeOut }).fromTo('.main-woman-plane-0', 1, { opacity: 0, x: '-200', y: '200px' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.75').fromTo('.main-woman-plane-1', 1, { opacity: 0, x: '-150', y: '150' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.25').fromTo('.main-woman-plane-2', 1, { opacity: 0, x: '-100', y: '100' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.5');

      _tlWoman.play();
    };
    var initHMainManAnimation = function initHMainManAnimation() {
      _tl.set(".h-main__bg svg", {
        visibility: "visible"
      });
      _tlMan.fromTo('.main-man-flower-0', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }).fromTo('.main-man-flower-1', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.25').fromTo('#main-man-email', 0.75, { opacity: 0, x: '200px', y: '50px' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('#main-man', 0.75, { opacity: 0, x: '200px' }, { opacity: 1, x: 0, ease: Power1.easeOut }).fromTo('.main-man-plane-0', 1, { opacity: 0, x: '200', y: '200px' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.5').fromTo('.main-man-plane-1', 1, { opacity: 0, x: '150', y: '150' }, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, '-=0.25');

      _tlMan.play();
    };

    svgHackVisible();
    initViewPortCheckerAnimation('animation-h-main-woman-js', 'animation-h-main-woman-start-js', '50%', initHMainWomanAnimation);
    initViewPortCheckerAnimation('animation-h-main-man-js', 'animation-h-main-start-man-js', '50%', initHMainManAnimation);
    initViewPortCheckerAnimation('animation-validate-0-js', 'animation-validate-0-start-js', '50%', initValidateAnimation0);
    initViewPortCheckerAnimation('animation-validate-1-js', 'animation-validate-1-start-js', '50%', initValidateAnimation1);
    initViewPortCheckerAnimation('animation-verification-js', 'animation-verification-start-js', '50%', initVerificationAnimation);
  };

  var initStickyElem = function initStickyElem() {
    $("[table-sticky-head-js]").stick_in_parent({
      offset_top: 76
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
    initStellar();
    initHamburger();

    // callback
    // ==========================================
    initCookie();
    initFollow();
    initLogoAnimation();
    initSVGAnimation();
    initStickyElem();
  };
  initJquery();
});
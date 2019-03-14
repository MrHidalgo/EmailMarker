/**
 * Animation variable
 */
const _tl = new TimelineMax();
const _tlLogo = new TimelineMax({paused:true});
const _tlWoman = new TimelineMax({paused:true});
const _tlMan = new TimelineMax({paused:true});

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */


  /**
   *
   */
  const initCookie = () => {

    /**
     *
     * @param name
     * @param value
     * @param expires
     * @param path
     * @param domain
     * @param secure
     */
    const setCookieStore = (name, value, expires, path, domain, secure) => {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    };

    /**
     *
     * @param cookieName
     * @returns {*}
     */
    const getCookieStore = (cookieName) => {
      const results = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');

      if (results) {
        return (unescape(results[2]));
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

    $('.cookie__right').on('click', (ev) => {
      if (getCookieStore('cookieAgree') !== 'true') {
        $('#cookie').fadeOut(350);
        setCookieStore('cookieAgree', 'true');
      }
    });
  };


  /**
   *
   */
  const initFollow = () => {
    /**
     *
     * @param el
     * @returns {boolean}
     */
    const isAnyPartOfElementInViewport = (el) => {
      const rect = $(el)[0].getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

      return (vertInView && horInView);
    };

    $(window).on('scroll resize load', () => {
      if(isAnyPartOfElementInViewport('#footer')) {
        $('#follow').fadeOut(350);
      } else {
        $('#follow').fadeIn(350);
      }
    });
  };

  /**
   *
   */
  const initLogoAnimation = () => {
    _tlLogo
      .staggerTo($('#EmailMarker path'), 0.45, {opacity: 0, ease:Power1.easeInOut}, 0.05);
      // .to($('#logoImage'), 0.95, {x:150}, -0.1)
  };


  const initSVGAnimation = () => {
    const svgHackVisible = () => {
      _tl.set(
        ".h-main__bg svg, .validate__image svg, .verification__image svg", {
          visibility: "visible"
        });
      _tlWoman.set(
        ".main-woman-cloud, .main-woman-flower, .main-woman-plane, #main-woman", {
          transformOrigin: "center"
        });
      _tlMan.set(
        ".main-man-flower, #main-man-email, .main-man-plane, #main-man", {
          transformOrigin: "center"
        });
    };
    const initVerificationAnimation = () => {
      console.log(`initVerificationAnimation`);
    };
    const initValidateAnimation0 = () => {
      console.log(`initValidateAnimation0`);
    };
    const initValidateAnimation1 = () => {
      console.log(`initValidateAnimation1`);
    };
    const initHMainWomanAnimation = () => {
      _tlWoman
        .fromTo('.main-woman-cloud-0', 1, {opacity: 0, x:'-400px', y:'30px', scale:0}, {opacity: 1, x:0, scale:1, ease: Power1.easeInOut})
        .fromTo('.main-woman-cloud-1', 0.75, {opacity: 0, x: '-200px', scale:0}, {opacity: 1, x:0, scale:1, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('.main-woman-flower-0, .main-woman-flower-1, .main-woman-flower-2', 0.75, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.1')
        .fromTo('#main-woman', 1, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, ease: Power1.easeOut})
        .fromTo('.main-woman-plane-0', 1, {opacity: 0, x:'-200', y:'200px'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.75')
        .fromTo('.main-woman-plane-1', 1, {opacity: 0, x:'-150', y:'150'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.main-woman-plane-2', 1, {opacity: 0, x:'-100', y:'100'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.5');

      _tlWoman.play();
    };
    const initHMainManAnimation = () => {
      _tlMan
        .fromTo('.main-man-flower-0', 1, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut})
        .fromTo('.main-man-flower-1', 1, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('#main-man-email', 0.75, {opacity: 0, x:'-100px',}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('#main-man', 0.75, {opacity: 0, x:'200px',}, {opacity: 1, x:0, ease: Power1.easeOut})
        .fromTo('.main-man-plane-0', 1, {opacity: 0, x:'200', y:'200px'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('.main-man-plane-1', 1, {opacity: 0, x:'150', y:'150'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.25');

      _tlMan.play();
    };

    svgHackVisible();
    initViewPortCheckerAnimation('animation-h-main-woman-js', 'animation-h-main-woman-start-js', '50%', initHMainWomanAnimation);
    initViewPortCheckerAnimation('animation-h-main-man-js', 'animation-h-main-start-man-js', '50%', initHMainManAnimation);
    // initViewPortCheckerAnimation('animation-validate-0-js', 'animation-validate-0-start-js', '50%', initValidateAnimation0);
    // initViewPortCheckerAnimation('animation-validate-1-js', 'animation-validate-1-start-js', '50%', initValidateAnimation1);
    // initViewPortCheckerAnimation('animation-verification-js', 'animation-verification-start-js', '50%', initVerificationAnimation);
  };

  /*
  * CALLBACK :: end
  * ============================================= */


  /**
   * @description Init all method
   */
  const initJquery = () => {
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
  };
  initJquery();
});


/**
 * Animation variable
 */
const _tl = new TimelineMax();
const _tlLogo = new TimelineMax({paused:true});
const _tlWoman = new TimelineMax({paused:true});
const _tlMan = new TimelineMax({paused:true});
const _tlValidateCard = new TimelineMax({paused:true});
const _tlValidateDesc = new TimelineMax({paused:true});
const _tlVerification = new TimelineMax({paused:true});

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
      .staggerTo($('#EmailMarker path'), 0.3, {opacity: 0, ease:Power1.easeInOut}, -0.025);
  };


  const initSVGAnimation = () => {
    const svgHackVisible = () => {
      _tlWoman.set(
        ".main-woman-cloud, .main-woman-flower, .main-woman-plane, #main-woman", {
          transformOrigin: "center"
        });
      _tlMan.set(
        ".main-man-flower, #main-man-email, .main-man-plane, #main-man", {
          transformOrigin: "center"
        });
      _tlValidateCard.set(
        "#validate-0-menu, #validate-0-num-1, #validate-0-num-2, #validate-0-num-3", {
          transformOrigin: "center"
        });
    };
    const initVerificationAnimation = () => {
      _tlVerification.set(
        '.verification__image svg', {
          visibility: "visible"
        }
      );

      _tlVerification
        .fromTo('.verification-flower', 0.55, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut})
        .fromTo('.verification-cloud', 0.75, {opacity: 0, x:'-150px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('.verification-point', 0.55, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.55')
        .fromTo('#verification-graph-line', 0.75, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.45')
        .fromTo('#verification-rect-main, #verification-rect-gr', 0.75, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('#verification-graph-circle', 1.25, {opacity: 0, scale: 0, rotation:360, transformOrigin: 'center'}, {opacity: 1, scale:1, rotation: 0, ease: Power1.easeInOut}, '-=0.55')
        .fromTo('#verification-data', 0.55, {opacity: 0, x:'100px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.75')
        .fromTo('.verification-download-list-0', 0.55, {opacity: 0, x:'0.7500px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.75')
        .fromTo('.verification-download-list-1', 0.55, {opacity: 0, x:'150px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.65')
        .fromTo('#verification-man', 0.75, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.65')
        .fromTo('#verification-man-card', 0.55, {opacity: 0, y:'-100px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.75')
      ;

      _tlVerification.play();
    };
    const initValidateAnimation0 = () => {
      _tl.set(
        ".validate__image-0 svg", {
          visibility: "visible"
        });

      _tlValidateCard
        .fromTo('#validate-0-rect-bg, .validate-0-point-0, .validate-0-point-1, #validate-0-play, .validate-0-line, #validate-0-documentation', 0.75, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut})
        .fromTo('#validate-0-menu', 0.45, {opacity: 0, y:'-100px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('#validate-0-itegration', 0.25, {opacity: 0, x:'-100px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('#validate-0-resultat', 0.25, {opacity: 0, x:'100px'}, {opacity: 1, x:0, ease: Power1.easeInOut}, '-=1')
        .fromTo('#validate-0-upload', 0.35, {opacity: 0, y:'20px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=1')
        .fromTo('#validate-0-bar, #validate-0-filter', 0.55, {opacity: 0, y:'20px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('#validate-0-lists', 0.55, {opacity: 0, y:'50px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.75')
        .fromTo('#validate-0-upload-2', 0.35, {opacity: 0, y:'50px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('#validate-0-num-1', 0.55, {opacity: 0, scale:0}, {opacity: 1, scale:1, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('#validate-0-lists-2', 0.45, {opacity: 0, y:'50px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('#validate-0-num-2', 0.55, {opacity: 0, scale:0}, {opacity: 1, scale:1, ease: Power1.easeInOut}, '-=0.15')
        .fromTo('#validate-0-download-list', 0.35, {opacity: 0, y:'50px'}, {opacity: 1, y:0, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('#validate-0-num-3', 0.45, {opacity: 0, scale:0}, {opacity: 1, scale:1, ease: Power1.easeInOut});

      _tlValidateCard.play();
    };
    const initValidateAnimation1 = () => {
      _tl.set(
        ".validate__image-1 svg", {
          visibility: "visible"
        });

      _tlValidateDesc
        .fromTo('.validate-1-flower-1', 0.35, {opacity: 0}, {opacity:1, ease: Power1.easeInOut})
        .fromTo('.validate-1-flower-2', 0.55, {opacity: 0}, {opacity:1, ease: Power1.easeInOut}, '-=0.05')
        .fromTo('.validate-1-flower-3', 0.25, {opacity: 0}, {opacity:1, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-flower-4', 0.45, {opacity: 0}, {opacity:1, ease: Power1.easeInOut}, '-=0.15')
        .fromTo('.validate-1-circle', 0.55, {opacity: 0}, {opacity:1, ease: Power1.easeInOut}, '-=0.75')
        .fromTo('.validate-1-table-1', 0.3, {opacity: 0, height:0}, {opacity:1, height:'auto', ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-table-2', 0.3, {opacity: 0, height:0}, {opacity:1, height:'auto', ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-table-3', 0.3, {opacity: 0, height:0}, {opacity:1, height:'auto', ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-table-4', 0.3, {opacity: 0, height:0}, {opacity:1, height:'auto', ease: Power1.easeInOut}, '-=0.25')
        .fromTo('#validate-1-pc', 0.75, {opacity: 0}, {opacity:1, ease: Power1.easeInOut}, '-=0.5')
        .fromTo('.validate-1-block-1', 0.5, {opacity: 0, x:'-100px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-block-2', 0.5, {opacity: 0, x:'100px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-block-3', 0.5, {opacity: 0, x:'-150px'}, {opacity:1,x:0, ease: Power1.easeInOut}, '-=0.25')
        .fromTo('.validate-1-block-4', 0.45, {opacity: 0, x:'150px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('.validate-1-block-5', 0.45, {opacity: 0, x:'-100px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('.validate-1-block-6', 0.45, {opacity: 0, x:'100px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('#validate-1-man', 0.65, {opacity: 0, x:'-150px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.65')
        .fromTo('#validate-1-woman', 0.65, {opacity: 0, x:'150px'}, {opacity:1, x:0, ease: Power1.easeInOut}, '-=0.65');

      _tlValidateDesc.play();
    };
    const initHMainWomanAnimation = () => {
      _tl.set(
        ".h-main__bg .h-main__bg-left svg", {
          visibility: "visible"
        });
      _tlWoman
        .fromTo('.main-woman-cloud-0', 0.75, {opacity: 0, x:'-400px', y:'30px', scale:0}, {opacity: 1, x:0, scale:1, ease: Power1.easeInOut})
        .fromTo('.main-woman-cloud-1', 0.55, {opacity: 0, x: '-200px', scale:0}, {opacity: 1, x:0, scale:1, ease: Power1.easeInOut}, '-=0.15')
        .fromTo('.main-woman-flower-0, .main-woman-flower-1, .main-woman-flower-2', 0.45, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.1')
        .fromTo('#main-woman', 0.75, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, ease: Power1.easeOut})
        .fromTo('.main-woman-plane-0', 0.55, {opacity: 0, x:'-200', y:'200px'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.45')
        .fromTo('.main-woman-plane-1', 0.55, {opacity: 0, x:'-150', y:'150'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('.main-woman-plane-2', 0.35, {opacity: 0, x:'-100', y:'100'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.25');

      _tlWoman.play();
    };
    const initHMainManAnimation = () => {
      _tl.set(
        ".h-main__bg .h-main__bg-right svg", {
          visibility: "visible"
        });

      _tlMan
        .fromTo('.main-man-flower-0', 0.75, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut})
        .fromTo('.main-man-flower-1', 0.55, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('#main-man-email', 0.55, {opacity: 0, x:'200px', y:'50px'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.15')
        .fromTo('#main-man', 0.75, {opacity: 0, x:'200px',}, {opacity: 1, x:0, ease: Power1.easeOut})
        .fromTo('.main-man-plane-0', 0.55, {opacity: 0, x:'200', y:'200px'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.35')
        .fromTo('.main-man-plane-1', 0.55, {opacity: 0, x:'150', y:'150'}, {opacity: 1, x:0, y:0, ease: Power1.easeInOut}, '-=0.25');

      _tlMan.play();
    };

    svgHackVisible();

    setTimeout(() => {
      initViewPortCheckerAnimation('animation-h-main-woman-js', 'animation-h-main-woman-start-js', '50%', initHMainWomanAnimation);
      initViewPortCheckerAnimation('animation-h-main-man-js', 'animation-h-main-start-man-js', '50%', initHMainManAnimation);
      initViewPortCheckerAnimation('animation-validate-0-js', 'animation-validate-0-start-js', '50%', initValidateAnimation0);
      initViewPortCheckerAnimation('animation-validate-1-js', 'animation-validate-1-start-js', '50%', initValidateAnimation1);
      initViewPortCheckerAnimation('animation-verification-js', 'animation-verification-start-js', '50%', initVerificationAnimation);
    }, 100);
  };


  /**
   *
   */
  const initStickyElem = () => {
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
  const initJquery = () => {
    // default
    // initWebFontLoader();
    initPreventBehavior();
    // initSvg4everybody();
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


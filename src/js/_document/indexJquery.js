/**
 * Animation variable
 */
const _tlLogo = new TimelineMax({
  paused:true
});

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


  /**
   *
   */
  const initChangeImage2SVG = () => {
    document.querySelectorAll('[image2svg-js]').forEach(function (element) {
      let imgID = element.getAttribute('id'),
        imgClass = element.getAttribute('class'),
        imgURL = element.getAttribute('src');

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let svg = xhr.responseXML.getElementsByTagName('svg')[0];

          if (imgID != null) {
            svg.setAttribute('id', imgID);
          }

          if (imgClass != null) {
            svg.setAttribute('class', imgClass + ' replaced-svg');
          }

          svg.removeAttribute('xmlns:a');

          if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
            svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
          }
          element.parentElement.replaceChild(svg, element)
        }
      };

      xhr.open('GET', imgURL, true);
      xhr.send(null);
    })
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
    initChangeImage2SVG();
  };
  initJquery();
});


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

    // callback
    // ==========================================
    initCookie();
  };
  initJquery();
});


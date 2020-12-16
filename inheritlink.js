(function($) {

  /**
   * Inherit link.
   *
   * @param string linkSelector
   *   Link inside main element to inherit.
   * @param string preventSelector
   *   Prevent this element that may match with main selector.
   * @param boolean hideElement
   *   Hide inherited click element.
   * @param boolean autoExternal
   *   Auto detect external links and open in new window.
   */
  $.fn.inheritlink = function(linkSelector, preventSelector, hideElement, autoExternal) {
    // Default prevent.
    if (preventSelector === undefined) {
      preventSelector = '';
    }
    // Default link.
    if (linkSelector === undefined) {
      linkSelector = 'a';
    }
    // Hide inherit click element, default true.
    if (hideElement === undefined) {
      hideElement = true;
    }
    // Auto external check enabled by default.
    if (autoExternal === undefined) {
      autoExternal = false;
    }

    var link_element = $(this);
    var prevent_element = $(link_element).find(preventSelector);
    // Get first match.
    var first = $(link_element).find(linkSelector).not($(prevent_element)).first();
    if (first.length) {
      // Pointer when hover.
      $(link_element).css('cursor', 'pointer');
      // Inherit title.
      if ($(first).text() !== undefined && $(link_element).attr('title') === undefined) {
        $(link_element).attr('title', $(first).text());
      }
      // External.
      if (autoExternal && $(first)[0].hostname !== window.location.hostname) {
        $(first).attr('target', '_blank');
      }
      // Hide if required.
      if (hideElement) {
        $(first).hide();
      }
      $(link_element).on("click",function(e) {
        if (!$(e.target).is(first) && !$(e.target).is(linkSelector)) {
          // Left: 1, middle: 2, right 3.
          switch (e.which) {
            case 1:
              $(first)[0].click();
              break;
            case 2:
              $(first).clone().attr('target', '_blank')[0].click();
              break;
          }
        }
        return true;
      });
    }
  };

}(jQuery));

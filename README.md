## About InheritLink:
Plugin for jQuery to inherit link action.

## Usage notes:
 * Apply directly to element with link to inherit.
 * Just first link selector match is used, any other link is respected.
 * Hide element will hide original link if desired, but is also recommended to hide by using CSS to prevent a pop out behaviour.
 * Auto external will add new window attribute automatically.

## Usage example:
if ($.fn.InheritClick) {
  $('article.teaser').InheritClick('a', '', false, true);
}

## Changelog:

##### Version 1.0 - 2018-09-28
* First release

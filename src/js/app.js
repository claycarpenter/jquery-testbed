import {accordion} from './accordion';

(function($) {
  'use strict';


  $.fn.accordion = accordion;

  $(document).ready(() => {
    $('.accordion').accordion({distinct: true});
  });
}(jQuery));

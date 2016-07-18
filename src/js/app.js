import {accordion} from './accordion';

(function($) {
  'use strict';

  $(document).ready(() => {
    let items = [];

    $.ajax({
      dataType: 'json',
      url: 'data.json',
      success: onDataLoad
    });

    $('#carousel').slick();

    $('#carousel').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      console.log(`Changing to slide ${nextSlide}`);

      $('#blurb').text(items[nextSlide].blurb);
    });

    function onDataLoad(jsonData) {
      items = jsonData.items;

      console.log(`Loaded ${items.length} items`);

      items.forEach((item) => {
        $('#carousel').slick('slickAdd', `<div><img src="${item.image}"></div>`);
      });

      $('#blurb').text(items[0].blurb);
    }
  });
}(jQuery));

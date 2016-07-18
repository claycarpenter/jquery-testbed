(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordion = accordion;

var methods = {
  init: init,
  expand: expand,
  collapse: collapse
};

function accordion(options) {
  if (methods[options]) {
    return methods[options].call(this);
  }

  return init.call(this, options);
}

function init(options) {
  var _this = this;

  var settings = $.extend({}, accordion.defaults, options);

  this.find('h3').addClass('accordion-header').next().addClass('accordion-panel').slideUp();

  this.on('click', '.accordion-header', function (event) {
    var next = $(event.target).next();
    var isActive = next.attr('data-active');

    if (settings.distinct) {
      _this.find('[data-active]').removeAttr('data-active').slideToggle();

      if (isActive) {
        return;
      }
    }

    next.attr('data-active', true).slideToggle();
  });

  return this;
}

function expand() {
  this.find(".accordion-panel").attr('data-active', true).slideDown();

  return this;
}

function collapse() {
  this.find('.accordion-panel').removeAttr('data-active').slideUp();

  return this;
}

accordion.defaults = {
  distinct: false
};

},{}],2:[function(require,module,exports){
'use strict';

var _accordion = require('./accordion');

(function ($) {
  'use strict';

  $.fn.accordion = _accordion.accordion;

  $(document).ready(function () {
    $('.accordion').accordion({ distinct: true });
  });
})(jQuery);

},{"./accordion":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWNjb3JkaW9uLmpzIiwic3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDT2dCLFMsR0FBQSxTOztBQU5oQixJQUFNLFVBQVU7QUFDZCxZQURjO0FBRWQsZ0JBRmM7QUFHZDtBQUhjLENBQWhCOztBQU1PLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUNqQyxNQUFJLFFBQVEsT0FBUixDQUFKLEVBQXNCO0FBQ3BCLFdBQU8sUUFBUSxPQUFSLEVBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFPLEtBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBUDtBQUNEOztBQUVELFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFBQTs7QUFDckIsTUFBTSxXQUFXLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBYSxVQUFVLFFBQXZCLEVBQWlDLE9BQWpDLENBQWpCOztBQUVBLE9BQUssSUFBTCxDQUFVLElBQVYsRUFDRyxRQURILENBQ1ksa0JBRFosRUFFRyxJQUZILEdBR0csUUFISCxDQUdZLGlCQUhaLEVBSUcsT0FKSDs7QUFNQSxPQUFLLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLG1CQUFqQixFQUFzQyxVQUFDLEtBQUQsRUFBVztBQUMvQyxRQUFNLE9BQU8sRUFBRSxNQUFNLE1BQVIsRUFBZ0IsSUFBaEIsRUFBYjtBQUNBLFFBQU0sV0FBVyxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQWpCOztBQUVBLFFBQUksU0FBUyxRQUFiLEVBQXVCO0FBQ3JCLFlBQUssSUFBTCxDQUFVLGVBQVYsRUFDRyxVQURILENBQ2MsYUFEZCxFQUVHLFdBRkg7O0FBSUEsVUFBSSxRQUFKLEVBQWM7QUFDWjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRyxJQURILENBQ1EsYUFEUixFQUN1QixJQUR2QixFQUVHLFdBRkg7QUFHRCxHQWpCRDs7QUFtQkEsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBUyxNQUFULEdBQWtCO0FBQ2hCLE9BQUssSUFBTCxDQUFVLGtCQUFWLEVBQ0csSUFESCxDQUNRLGFBRFIsRUFDdUIsSUFEdkIsRUFFRyxTQUZIOztBQUlBLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVMsUUFBVCxHQUFvQjtBQUNsQixPQUFLLElBQUwsQ0FBVSxrQkFBVixFQUNHLFVBREgsQ0FDYyxhQURkLEVBRUcsT0FGSDs7QUFJQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFVLFFBQVYsR0FBcUI7QUFDbkIsWUFBVTtBQURTLENBQXJCOzs7OztBQzlEQTs7QUFFQyxXQUFTLENBQVQsRUFBWTtBQUNYOztBQUdBLElBQUUsRUFBRixDQUFLLFNBQUw7O0FBRUEsSUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFNO0FBQ3RCLE1BQUUsWUFBRixFQUFnQixTQUFoQixDQUEwQixFQUFDLFVBQVUsSUFBWCxFQUExQjtBQUNELEdBRkQ7QUFHRCxDQVRBLEVBU0MsTUFURCxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuY29uc3QgbWV0aG9kcyA9IHtcbiAgaW5pdCxcbiAgZXhwYW5kLFxuICBjb2xsYXBzZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjY29yZGlvbihvcHRpb25zKSB7XG4gIGlmIChtZXRob2RzW29wdGlvbnNdKSB7XG4gICAgcmV0dXJuIG1ldGhvZHNbb3B0aW9uc10uY2FsbCh0aGlzKTtcbiAgfVxuXG4gIHJldHVybiBpbml0LmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xuICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBhY2NvcmRpb24uZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gIHRoaXMuZmluZCgnaDMnKVxuICAgIC5hZGRDbGFzcygnYWNjb3JkaW9uLWhlYWRlcicpXG4gICAgLm5leHQoKVxuICAgIC5hZGRDbGFzcygnYWNjb3JkaW9uLXBhbmVsJylcbiAgICAuc2xpZGVVcCgpO1xuXG4gIHRoaXMub24oJ2NsaWNrJywgJy5hY2NvcmRpb24taGVhZGVyJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV4dCA9ICQoZXZlbnQudGFyZ2V0KS5uZXh0KCk7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBuZXh0LmF0dHIoJ2RhdGEtYWN0aXZlJyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuZGlzdGluY3QpIHtcbiAgICAgIHRoaXMuZmluZCgnW2RhdGEtYWN0aXZlXScpXG4gICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWFjdGl2ZScpXG4gICAgICAgIC5zbGlkZVRvZ2dsZSgpO1xuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5leHRcbiAgICAgIC5hdHRyKCdkYXRhLWFjdGl2ZScsIHRydWUpXG4gICAgICAuc2xpZGVUb2dnbGUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgdGhpcy5maW5kKFwiLmFjY29yZGlvbi1wYW5lbFwiKVxuICAgIC5hdHRyKCdkYXRhLWFjdGl2ZScsIHRydWUpXG4gICAgLnNsaWRlRG93bigpO1xuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgdGhpcy5maW5kKCcuYWNjb3JkaW9uLXBhbmVsJylcbiAgICAucmVtb3ZlQXR0cignZGF0YS1hY3RpdmUnKVxuICAgIC5zbGlkZVVwKCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmFjY29yZGlvbi5kZWZhdWx0cyA9IHtcbiAgZGlzdGluY3Q6IGZhbHNlXG59O1xuIiwiaW1wb3J0IHthY2NvcmRpb259IGZyb20gJy4vYWNjb3JkaW9uJztcblxuKGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgJC5mbi5hY2NvcmRpb24gPSBhY2NvcmRpb247XG5cbiAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICQoJy5hY2NvcmRpb24nKS5hY2NvcmRpb24oe2Rpc3RpbmN0OiB0cnVlfSk7XG4gIH0pO1xufShqUXVlcnkpKTtcbiJdfQ==

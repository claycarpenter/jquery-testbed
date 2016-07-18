
const methods = {
  init,
  expand,
  collapse
};

export function accordion(options) {
  if (methods[options]) {
    return methods[options].call(this);
  }

  return init.call(this, options);
}

function init(options) {
  const settings = $.extend({}, accordion.defaults, options);

  this.find('h3')
    .addClass('accordion-header')
    .next()
    .addClass('accordion-panel')
    .slideUp();

  this.on('click', '.accordion-header', (event) => {
    const next = $(event.target).next();
    const isActive = next.attr('data-active');

    if (settings.distinct) {
      this.find('[data-active]')
        .removeAttr('data-active')
        .slideToggle();

      if (isActive) {
        return;
      }
    }

    next
      .attr('data-active', true)
      .slideToggle();
  });

  return this;
}

function expand() {
  this.find(".accordion-panel")
    .attr('data-active', true)
    .slideDown();

  return this;
}

function collapse() {
  this.find('.accordion-panel')
    .removeAttr('data-active')
    .slideUp();

  return this;
}

accordion.defaults = {
  distinct: false
};

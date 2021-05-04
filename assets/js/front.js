$(function () {
    sticky();
    utils();
});

function sticky() {
    $(".header").sticky();
}

/* =========================================
 *  UTILS
 *  =======================================*/

function utils() {
    /* tooltips */
    $('[data-toggle="tooltip"]').tooltip();

    /* click on the box activates the radio */
    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });

    /* click on the box activates the link in it */
    $('.box.clickable').on('click', function (e) {
        window.location = $(this).find('a').attr('href');
    });

    /* external links in new window*/
    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });

    /* animated scrolling */
    $('.scroll-to, #navigation a').click(function (event) {
      //if ($(this).attr('href').search('/#') >= 0) return;
        var full_url = this.href;
        console.log('full url ', full_url)
        var parts = full_url.split("#");
        console.log('parts', parts)
        if (parts.length > 1) {
          event.preventDefault();
          var trgt = parts[1];
          if (document.getElementById(trgt)) {
              console.log('scrolling to ', trgt)
              $('body').scrollTo($('#' + trgt), 800, {offset: -50});
          } else {
              window.location = full_url;
          }
        } else {
          console.log(2);
        }
    });
}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {
        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }
        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}

var windowWidth = $(window).width();
$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();
});

$(window).resize(function () {
    newWindowWidth = $(window).width();
    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 100);
        windowWidth = newWindowWidth;
    }
});

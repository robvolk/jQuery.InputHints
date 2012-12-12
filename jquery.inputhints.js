// jQuery Input Hints plugin
// Copyright (c) 2009 Rob Volk
// http://www.robvolk.com

jQuery.fn.inputHints = function () {
    function showHints(el) {
        if ($(el).val() == '')
            $(el).val($(el).attr('title'))
                .addClass('hint');
    };

    function hideHints(el) {
        if ($(el).val() == $(el).attr('title'))
            $(el).val('')
                .removeClass('hint');
    };

    // hides the input display text stored in the title on focus
    // and sets it on blur if the user hasn't changed it.

    var el = $(this);

    // show the display text on empty elements
    el.each(function () {
        showHints(this);
    });

    // clear the hints on form submit
    el.closest('form').submit(function () {
        el.each(function () {
            hideHints(this);
        });
        return true;
    });

    // hook up the blur & focus
    return el.focus(function () {
        hideHints(this);
    }).blur(function () {
        showHints(this);
    });
};

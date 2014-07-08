var $content = $('main'),
    $header = $('header');

function computeResize() {
    var view_height = $(window).height();

    $header.css('margin-bottom', (view_height - $content.height()) / 2 - $header.height());
}

$(function () {
    computeResize();
    $(window).resize(computeResize);
});
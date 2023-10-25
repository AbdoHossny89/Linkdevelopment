var Linked = {};
$(window).load(function () {
    $('body').toggleClass('loaded');

    $('.animate').bind('inview', function (event, isInView) {
        if (isInView) {

            var animate = $(this).attr('data-animation');
            var speedDuration = $(this).attr('data-duration');
            var $t = $(this);
            setTimeout(function () { $t.addClass(animate + ' animated'); }

                , speedDuration);

        }
    });
});
Linked.header = function () {
    jQuery(window).resize(function () {
        sticky_header();
    });
    sticky_header();

    function sticky_header() {
        var $header = $('#header');
        var $height = ($(window).height()) - 20;

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 50) {
                $header.addClass("fixed__header");
            } else {
                $header.removeClass("fixed__header");

            }
        });
    }
}
Linked.menu = function () {
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".menu").toggleClass("active");
      });

}
Linked.mainBanner = function () {
    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        fade: !0,
        cssEase: 'easeOut',

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        arrows: false,
        asNavFor: '.slider-nav'

    }).slickAnimation();
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,

        asNavFor: '.banner_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
}



Linked.initialize = function () {
    Linked.header();
    Linked.mainBanner();
    Linked.menu();


};

jQuery(document).ready(function () {
    Linked.initialize();

});


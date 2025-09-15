/*=================================================
 スライダー
===================================================*/

$(function () {
    $(".scene-slide-items,.voice-slide-items").slick({
        centerPadding: "100px",
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        arrows: true,
        dots: true,
    });
});

/*=================================================
 set アコーディオン
===================================================*/
$(".set-accordion-header").on("click", function () {
    $(this).next(".set-accordion-contents").slideToggle();
    $(this).parent().toggleClass('active');
});

$(".set-accordion-inner a").on("click", function () {
    $(this).closest(".set-accordion-inner").slideUp();
    $(this).closest(".set-accordion-inner").prev(".set-accordion-header").removeClass("active");
});

$('.faq-accordion-header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});




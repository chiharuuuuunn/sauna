/*=================================================
 スライダー
===================================================*/

$(function () {
    $(".scene-slide-items,.movie-slide-items,.voice-slide-items").slick({
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
 アコーディオン
===================================================*/
$(".set-accordion-header").on("click", function () {
    $(this).next(".set-accordion-contents").slideToggle();
    $(this).parent().toggleClass('active');
});

$(".set-accordion-inner a").on("click", function (e) {
    e.preventDefault(); // aタグのデフォルト動作を無効化
    const $accordionItem = $(this).closest(".set-accordion-item");

    $accordionItem.find(".set-accordion-inner").slideUp();
    $accordionItem.removeClass("active");
});

$('.faq-accordion-header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});

/*=================================================
 ページトップボタン
===================================================*/
// ページトップへ戻る
$(".page-top").on("click", function () {
    $(".scroll-contents").animate({ scrollTop: 0 }, 500);
});



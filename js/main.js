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
 購入ボタン（sp)
===================================================*/

const btn = document.querySelector('.sp-purchase');
const mv = document.querySelector('.mv');
const footer = document.querySelector('footer');

// 960px以下のときだけ実行
const mq = window.matchMedia("(max-width: 960px)");

function initStickyBtn() {
  // いったんリセット
  btn.style.display = "none";
  btn.style.position = "fixed";
  btn.style.bottom = "0";

  if (!mq.matches) return; // PC時は処理しない

  // MV判定
  function toggleBtn() {
    const scrollY = window.scrollY;
    const mvHeight = mv.offsetHeight;

    if (scrollY > mvHeight) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleBtn);
  window.addEventListener('load', toggleBtn);

  // フッター監視
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        btn.style.position = 'absolute';
        btn.style.bottom = `${footer.offsetHeight}px`;
      } else {
        btn.style.position = 'fixed';
        btn.style.bottom = '0';
      }
    });
  });

  observer.observe(footer);
}

// 初期化
initStickyBtn();

// ウィンドウ幅変更時にも再判定
mq.addEventListener("change", initStickyBtn);

/*=================================================
 ページトップボタン
===================================================*/
// ページトップへ戻る
$(".page-top").on("click", function () {
    $(".scroll-contents").animate({ scrollTop: 0 }, 500);
});



/* =============================================
 * common.js
 - namespace: common
 ============================================= */

/* ----------------------------------------------------------
 define
 ---------------------------------------------------------- */
 var TOP = TOP || {
    init: function () { //共通処理
      TOP.init.mqJudge();

      //TOP.init.heroAnimation();
    },
    funcPc: function () {//PCレイアウトのみ処理
      TOP.heroAnimation();
    },
    funcTb: function () {//Tabletレイアウトのみ処理
      TOP.heroAnimation();
    },
    funcSp: function () {//スマホレイアウトのみ処理
      TOP.funcSp.heroSpAnimation();
    }
  };

/* ----------------------------------------------------------
 init
 ---------------------------------------------------------- */
//jquery
(function ($) {
  'use strict';
  //DOMロード後実行処理

  $(document).ready(function () {
    TOP.init();

    if($('.is-sp')[0]) {
      TOP.funcSp();
    }
  });
})(jQuery);

TOP.init.mqJudge = function () {
  var mqPc = window.matchMedia(common.breakPoints.lg),
    mqTb = window.matchMedia(common.breakPoints.md);

  /* ページをロードしたときにmatichMediaによる画面サイズ判定を行う */
  function mqOnLoadFunction (event) {

    if(mqPc.matches) { //Pc
      TOP.funcPc();
    } else if(mqTb.matches) { //Tablet
      TOP.funcTb();
    } else { //Sp
      TOP.funcSp();
    }
  };

  /* ページをリサイズしたときにmatichMediaによる画面サイズ判定を行う */
  var timer = false; //タイマー設置
  function mqOnResizeFunction (event) {
    /* パフォーマンスを考慮し、
     *  リサイズが終わったときのみ 画面サイズ判定を行う
     * */
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      if(mqPc.matches) { //Pc
        TOP.funcPc();
      } else if(mqTb.matches) { //Tablet
        TOP.funcTb();
      } else { //Sp
        TOP.funcSp();
      }
    }, 200);
  };
  //実行
  mqOnLoadFunction();
  window.addEventListener('resize', mqOnResizeFunction);
};

TOP.heroAnimation = function () {

  var $target = $('#js-topHero'),
      $media = document.getElementById('mainVideo');

  var current_slide = 0;


  function firstAnime() {

    var timer = 0,
        count = 0;

    $('.hero-top-navi__item').eq(0).addClass('is-long-active');

    timer = setInterval(function() {

      ++count;

      //$(this).next($target).velocity("fadeIn", { delay: 50, duration: 400 });
      if(count === 1) {
        $media.play();
        $('.hero-top-main__title .first').velocity({opacity: 1, marginLeft: '0%'}, { delay: 0, duration: 500});
        $('.hero-top-main__item--01 .hero-top-main__button').velocity({opacity: 1, marginLeft: '0%'}, { delay: 250, duration: 500});

      } else if(count === 5) {
        $('.hero-top-main__title .first').velocity({opacity: 0, marginLeft: '-8%'}, { delay: 0, duration: 1000});
        $('.hero-top-main__title .second').velocity({opacity: 1, marginLeft: '0%'}, { delay: 250, duration: 1000});
      } else if(count === 10) {
        $('.hero-top-main__title .second').velocity({opacity: 0, marginLeft: '-8%'}, { delay: 0, duration: 1000});
        $('.hero-top-main__title .third').velocity({opacity: 1, marginLeft: '0%'}, { delay: 250, duration: 1000});
      } else if(count > 14) {
        $('.hero-top-main__title .third').velocity({opacity: 0}, { delay: 0, duration: 500});
        $('.hero-top-main__title .first').velocity({opacity: 1, marginLeft: '0%'}, { delay: 0, duration: 1000});

        $media.addEventListener('ended', function() {
          $media.play();
        });

        clearInterval(timer);
      }
      //console.log(count);
    }, 1000);

  }

  function slideAction() {

    $target.addClass('pcHero');

    $target.not('.slick-initialized').slick({
      pauseOnFocus: false,
      pauseOnHover: false,
      draggable: false,
      infinite: true,
      speed: 1100,
      fade: true,
      autoplay: true,
      cssEase: 'linear',
      autoplaySpeed: 14000
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

      $('.hero-top-navi__item').eq(0).removeClass('is-long-active');
      $('.hero-top-navi__item').removeClass('is-active').eq(nextSlide).addClass('is-active');

      var $deferredPlay = $.Deferred(function(deferredPlay) {
        deferredPlay.then(function () {
          $('.hero-top-main__item').eq(nextSlide).find('.hero-top-main__title').addClass('is-active');
        }).then(function () {
          setTimeout(function () {
            $('.hero-top-main__item').eq(nextSlide).find('.hero-top-main__button').addClass('is-active');
          }, 1500);
        })
      });
      $deferredPlay.resolve();

      if(nextSlide === 0) {
        $media.currentTime = 0;
        $media.play();
      }

      console.log(currentSlide);


    }).on('afterChange', function(slick, currentSlide){

      current_slide = $(this).slick('slickCurrentSlide');

      if(current_slide === 0) {
        $(this).slick("slickSetOption", "autoplaySpeed", 8000);

      } else {
        $(this).slick("slickSetOption", "autoplaySpeed", 8000);
      }

    });
  }

  //init
  firstAnime();
  slideAction();


};

TOP.funcSp.heroSpAnimation = function () {
  var $target = $('#js-topHero');

  function spAnime() {
    $target.not('.slick-initialized').slick({
      infinite: true,
      speed: 800,
      fade: true,
      autoplay: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 768,// 〜768px
          settings: {
            dots: true,
            autoplaySpeed: 8000
          }
        }
      ]
    });

  }

  spAnime();

};
jQuery(function ($) {
    $("body").removeClass("preload");
});

// 蝗ｺ螳壹�繝�ム繝ｼ
$(window).on('load resize', function () {
    var headerH = $("header").outerHeight();
    $("body").css("padding-top", headerH);
});

$(window).on('load resize', function () {
    var windowW = window.innerWidth;
    if (windowW > 750) {
        fzPC();
    } else {
        fzSP();
    }
}).resize();
function fzSP() {
    var windowW = window.innerWidth;
    var fz = windowW / 75 + 'px';
    $('html').css({'font-size': fz});
}
function fzPC() {
    $('html').css({fontSize: '62.5%'});
}


// PC
// 繧ｯ繝ｪ繝�け縺吶ｋ縺ｨ繝｡繧ｬ繝｡繝九Η繝ｼ螻暮幕
$('.gnav-main-block').click(function () {
    var windowWidth = window.innerWidth;
    var breakPoint = 1000;
    if (windowWidth >= breakPoint) {
        if ($(this).hasClass("menu-open")) {
            $(".gnav-main-block").removeClass('menu-open');
        } else {
            $(".gnav-main-block").removeClass('menu-open');
            $(this).toggleClass('menu-open');
        }
    }
});

// 繝｡繧ｬ繝｡繝九Η繝ｼ蜀��btn-close繧呈款縺励◆髫帙↓縲√Γ繧ｬ繝｡繝九Η繝ｼ繧帝哩縺倥ｋ
$('.btn-close').click(function () {
    var windowWidth = window.innerWidth;
    var breakPoint = 1000;
    if (windowWidth >= breakPoint) {
        if ($(this).parents("gnav-main-block").hasClass("menu-open")) {
            $(".gnav-main-block").removeClass('menu-open');
        }
    }
});

$(window).on('load resize', function () {
    var windowWidth = window.innerWidth;
    var breakPoint = 1000;
    if (windowWidth >= breakPoint) {
        $('.header').removeClass('open');
        $('body').removeClass('hidden');
        $('.gnav').attr('style', 'display: block;');
    }
});

$(window).on('load resize', function () {
    var windowWidth = window.innerWidth;
    var breakPoint = 1000;
    if (windowWidth < breakPoint) {
        $(".gnav-main-block-link").removeClass('menu-open');
    }
});


// SP
$(function () {
    // 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ
    $('.btn-burger').click(function () {
        var windowWidth = window.innerWidth;
        var breakPoint = 1000;
        if (windowWidth < breakPoint) {
            $('body').toggleClass('hidden');
            $('.header').toggleClass('open');
            $('.gnav').fadeToggle('fast');
        }
    });

    // 繝翫ン繝｡繝九Η繝ｼ
    $('.btn-toggle').click(function () {
        var windowWidth = window.innerWidth;
        var breakPoint = 1000;
        if (windowWidth < breakPoint) {
            $(this).parents('.gnav-main-block').toggleClass('toggle-open');
            $(this).parents('.gnav-main-block').find('.gnav-main-box').slideToggle(500);
        }
    });

    // 繝翫ン繝｡繝九Η繝ｼ
    $('.gnav a').click(function () {
        var windowWidth = window.innerWidth;
        var breakPoint = 1000;
        if (windowWidth < breakPoint) {
            $('.header').removeClass('open');
            $('.gnav').attr('style', 'display: none;');
        }
    });

});

var currentWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (currentWidth == window.innerWidth) {
        // 繧ｦ繧､繝ｳ繝峨え讓ｪ蟷�′螟峨ｏ縺｣縺ｦ縺�↑縺�◆繧∝�逅�ｒ繧ｭ繝｣繝ｳ繧ｻ繝ｫ縲�
        return;
    }

    // 繧ｦ繧､繝ｳ繝峨え讓ｪ蟷�′螟峨ｏ縺｣縺溘�縺ｧ繝ｪ繧ｵ繧､繧ｺ縺ｨ隕九↑縺吶�
    // 讓ｪ蟷�ｒ譖ｴ譁ｰ
    currentWidth = window.innerWidth;
    var breakPoint = 1000;
    if (currentWidth < breakPoint) {
        $('body').removeClass('hidden');
        $('.header').removeClass('open');
        $('.gnav').attr('style', 'display: none;');
    }
});


//蜈ｱ騾�
// 蜊ｰ蛻ｷ繝懊ち繝ｳ
$('#button-print').on('click', function () {
    window.print();
});

// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ謫堺ｽ�
$(function () {
    $('.accordion-first-btn').click(function () {
        $(this).parent(".block-accordion-first").toggleClass('open');
        $(this).next(".accordion-style-first").slideToggle(500);
    });
    $('.accordion-second-btn').click(function () {
        $(this).parent(".block-accordion-second").toggleClass('open');
        var clickBtn = $(this);
        var myPromise = $.when(
            clickBtn.next(".accordion-style-second").slideToggle(500)
        );
        myPromise.done(function () {
            if (clickBtn.parent().hasClass('open')) {
                clickBtn.next().children(".accordion-style-second-inner").animate({opacity: 1}, 200);
            } else {
                clickBtn.next().children(".accordion-style-second-inner").animate({opacity: 0}, 200);
            }
        });
    });
    $('.accordion-third-btn').click(function () {
        $(this).parent(".block-accordion-third").toggleClass('open');
        $(this).toggleClass('open');
/*        $('.accordion-third-btn ul').delay(500).queue(function(){
            $(this).toggleClass('align-top').dequeue();
        });
*/
        var clickBtn = $(this);
        var myPromise = $.when(
            clickBtn.next(".accordion-style-third").slideToggle(500)
        );
        myPromise.done(function () {
            if (clickBtn.parent().hasClass('open')) {
                clickBtn.next().children(".accordion-style-third-inner").animate({opacity: 1}, 200);
            } else {
                clickBtn.next().children(".accordion-style-third-inner").animate({opacity: 0}, 200);
            }
        });
    });
//    setTimeout(function(){
//        $('.accordion-third-btn ul').toggleClass('align-top');
//    },3000);
});
// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ謫堺ｽ� allOpen/Close
$(function () {
    $('.checkbox-style-third-item').click(function () {
        $(this).toggleClass('close');
        if ( $('.checkbox-style-third-item').hasClass('close') ) {
            $(".block-accordion-third").addClass('open');
            $('.accordion-third-btn').addClass('open');
            $(".accordion-style-third").slideDown(500);
            $(".accordion-style-third-inner").animate({opacity: 1}, 200);
        } else {
            $(".block-accordion-third").removeClass('open');
            $('.accordion-third-btn').removeClass('open');
            $(".accordion-style-third").slideUp(500);
            $(".accordion-style-third-inner").animate({opacity: 0}, 200);
        }
    });

    $('.accordion-third-btn').click(function () {
        var size = $('.accordion-third-btn.open').length;

        if ( size === 13  ) {
            $('.checkbox-style-third-item').trigger("click");
        }
    });
});

// 繧ｻ繝ｬ繧ｯ繝医�繝�け繧ｹ縺ｮ險ｭ螳�
$(document).ready(function () {
    if ($(".select-style-first-item").length > 0) {
        $(".select-style-first-item").select2({
            placeholder: 'Please Select',
            // 讀懃ｴ｢繝懊ャ繧ｯ繧ｹ繧定｡ｨ遉ｺ縺吶ｋ縺溘ａ縺ｫ蠢�ｦ√↑邨先棡縺ｮ譛蟆乗焚縲�
            minimumResultsForSearch: Infinity
        });
    }
});

//繧ｿ繝�メ繧｢繧ｯ繧ｷ繝ｧ繝ｳ縲√�繧ｦ繧ｹ繝帙ヰ繝ｼ譎ゅ↓selector縺ｫ.hover繧剃ｻ倅ｸ�
$(function () {
    $('a, input[type="button"], input[type="submit"], button, .list-style-first-item, .list-style-second-item, .checkbox-style-second-item + span, .hashtag, .accordion-style-first-item, .box-new-newsletter,  .checkbox-style-third-item + span')
        .on('touchstart', function () {
            $(this).addClass('hover');
        }).on('touchend', function () {
        $(this).removeClass('hover');
    }).on('mouseenter', function () {
        $(this).addClass('hover');
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
    });
});

// 繝壹�繧ｸ繝医ャ繝励∈鬟帙�繝懊ち繝ｳ
$(window).on('load resize', function () {
    $(function () {
        var TopBtn = $(".page-top");
        var BottomPos = 50; // 繝懊ち繝ｳ縺ｮ逕ｻ髱｢荳九°繧峨�菴咲ｽｮ繧呈欠螳�
        TopBtn.hide();
        $(window).scroll(function (e) {
            $window = $(e.currentTarget);
            WindowHeight = $window.height(); // 繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆
            PageHeight = $(document).height(); // 繝壹�繧ｸ縺ｮ鬮倥＆
            footerHeight = $("footer").height() + 50; // 繝輔ャ繧ｿ縺ｮ鬮倥＆
            ScrollTop = $window.scrollTop(); // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆驥�
            MoveTopBtn = WindowHeight + ScrollTop + footerHeight - PageHeight;

            //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ縺�100縺ｧ繝懊ち繝ｳ繧定｡ｨ遉ｺ
            if ($(this).scrollTop() > 100) {
                TopBtn.fadeIn();
            } else {
                TopBtn.fadeOut();
            }

            // 繝輔ャ繧ｿ繝ｼ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ繝懊ち繝ｳ繧堤ｧｻ蜍�
            if (ScrollTop >= PageHeight - WindowHeight - footerHeight + BottomPos) {
                TopBtn.css({
                    bottom: MoveTopBtn
                });
            } else {
                TopBtn.css({
                    bottom: BottomPos
                });
            }
        });
    });
});

$(function () {
    //繝懊ち繝ｳ繧呈款荳九☆繧九→繝医ャ繝励∈遘ｻ蜍�
    $(".page-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});

$(document).ready(function(){
  //URL縺ｮ繝上ャ繧ｷ繝･蛟､繧貞叙蠕�
  var urlHash = location.hash;
  //繝上ャ繧ｷ繝･蛟､縺後≠繧後�繝壹�繧ｸ蜀�せ繧ｯ繝ｭ繝ｼ繝ｫ
  if(urlHash) {
    //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧�0縺ｫ謌ｻ縺励※縺翫￥
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //繝ｭ繝ｼ繝画凾縺ｮ蜃ｦ逅�ｒ蠕�■縲∵凾髢灘ｷｮ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ螳溯｡�
      scrollToAnker(urlHash) ;
    }, 600);
  }

  //騾壼ｸｸ縺ｮ繧ｯ繝ｪ繝�け譎�
  $('a[href^="#"]').click(function() {
    //繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ蜈医ｒ蜿門ｾ�
    var href= $(this).attr("href");
    //繝ｪ繝ｳ繧ｯ蜈医′#縺狗ｩｺ縺�縺｣縺溘ｉhtml縺ｫ
    var hash = href == "#" || href == "" ? 'html' : href;
    //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ螳溯｡�
    scrollToAnker(hash);
    return false;
  });
  // 髢｢謨ｰ�壹せ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
  // 謖�ｮ壹＠縺溘い繝ｳ繧ｫ繝ｼ(#ID)縺ｸ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
  function scrollToAnker(hash) {
    var target = $(hash);
    var headerH = $("header").outerHeight();
    var position = target.offset().top-headerH-10;
    $('body,html').stop().animate({scrollTop:position}, 500);
    if ($(urlHash).length > 0) {
        $(urlHash).find('.accordion-second-btn').click();
    }
  }
})


/*
$(function() {
    // 繝壹�繧ｸ蜀�い繝ｳ繧ｫ繝ｼ
    var offsetY = -10;
    var time = 700;
    $('a[href^=#]').click(function() {
        var target = $(this.hash);
        if (!target.length) return ;
        var targetY = target.offset().top+offsetY;
        $('html,body').animate({scrollTop: targetY}, time, 'swing');
        window.history.pushState(null, null, this.hash);
        return false;
    });
});
*/

  // 繝輔ぉ繝ｼ繝峨う繝ｳ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
$(function () {
    // 逕ｻ髱｢隱ｭ縺ｿ霎ｼ縺ｿ縺ｨ縺ｨ繧ゅ↓繝輔ぉ繝ｼ繝峨う繝ｳ
    $(window).load(function () {
        $(".inview").each(function () {
            var imgPos = $(this).offset().top;
            var windowHeight = $(window).height();
            if (imgPos < windowHeight) {
                $(this).addClass('fade-in-bottom');
            }
        });
    });

    // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｫ蠢懊§縺ｦ繝輔ぉ繝ｼ繝峨う繝ｳ
    $(window).scroll(function () {
        $(".inview").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 3) { //逕ｻ髱｢縺ｮ3/1繧医ｊ荳翫↓譚･縺滄圀繧ｯ繝ｩ繧ｹ莉倅ｸ�
                $(this).addClass('fade-in-bottom');
            }
        });
    });
});

//local繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ
$('.local-nav .btn-pulldown').click(function () {
    var windowWidth = window.innerWidth;
    var breakPoint = 1000;
    if (windowWidth < breakPoint) {
        $(this).toggleClass('open');
        $('.local-nav-list').slideToggle('fast');
    }
});

//img繧ｯ繝ｪ繝��
objectFitImages();

/*
$(function () {
    var urlHash = location.hash;
    if ($(urlHash).length > 0) {
        $(urlHash).find('.accordion-second-btn').click();
    }
});
*/

//隍�焚陦後�鬮倥＆謠�∴ /company/philosophy.html縲縺ｧ菴ｿ逕ｨ縺ｮ轤ｺ邁｡逡･蛹�
$(function () {
    if ( $(window).width() > 750) {
        var maxH = $(".block-style-border-wrap .block-style-border:nth-of-type(3)").outerHeight();
        $(".block-style-border-wrap .block-style-border:nth-of-type(4) ").css({"height":maxH+"px"});
    }
    $(window).resize(function() {
        if ( $(window).width() > 750) {
            var maxH = $(".block-style-border-wrap .block-style-border:nth-of-type(3)").outerHeight();
            $(".block-style-border-wrap .block-style-border:nth-of-type(4) ").css({"height":maxH+"px"});
        }
    });
});
// 邨悟霧險育判繧ｹ繝ｩ繧､繝繝ｼ
$(function () {
// slider 縺ｮ邱丞ｹ�ｨｭ螳�
    var slideItemNum = $('.page-slider-img li').length;
    var slideSetWidth = 100 * slideItemNum +"%";
    var slideWidth = 100 / slideItemNum + "%";
    $('.page-slider-img,.page-slider-text').css('width', slideSetWidth);
    $('.page-slider-img li,.page-slider-text li').css('width', slideWidth);
    $('.page-slider-text li').eq(0).show();


// slider 縺ｮ邱上�繝ｼ繧ｸ謨ｰ縺ｮ陦ｨ遉ｺ
    $(".page-slider-number-total").text(slideItemNum);


// slider 遘ｻ蜍�
    var slideCurrent = 0;  // 迴ｾ蝨ｨ蝨ｰ繧堤､ｺ縺吝､画焚
    // 繧ｹ繝ｩ繧､繝峨�譛蛻昴→譛蠕後〒遏｢蜊ｰ縺ｮ繧ｯ繝ｪ繝�け繧堤┌蜉ｹ蛹�
    if ( slideCurrent === 0 ) { $('.arrow-left img').css("display","none" ) }
    if ( slideCurrent === slideItemNum-1 ) { $('.arrow-right img').css("display","none" ) }

    // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧貞ｮ溯｡後☆繧狗峡閾ｪ髢｢謨ｰ
    var sliding = function(){
        $('.page-slider-img').stop().animate({
            left: slideCurrent * -100 +"%"
        });
    }
    // 蜑阪∈繝懊ち繝ｳ縺梧款縺輔ｌ縺溘→縺�
    $('.arrow-left img').click(function(){
        slideCurrent--;
        sliding();
        slideCurrentNum = slideCurrent +1;
        slideNum = $(".page-slider-number-current").text();
    // 迴ｾ蝨ｨ縺ｮ繝壹�繧ｸ謨ｰ縺ｮ陦ｨ遉ｺ縺ｮ螟画峩
        $(".page-slider-number-current").text(parseInt(slideNum)-1);
    // 繝�く繧ｹ繝茨ｼ医せ繝ｩ繧､繝会ｼ峨�螟画峩
        $('.page-slider-text li').fadeOut(280);
        $('.page-slider-text li').eq(slideCurrentNum-1).fadeIn(280);
    // 繧ｹ繝ｩ繧､繝峨�譛蛻昴→譛蠕後〒遏｢蜊ｰ縺ｮ繧ｯ繝ｪ繝�け繧堤┌蜉ｹ蛹�
        if ( slideCurrent === 0 ) { $('.arrow-left img').css("display","none" ) }
        if ( slideCurrent !== slideItemNum-1 ) { $('.arrow-right img').css("display","block" ) }
    });
    // 谺｡縺ｸ繝懊ち繝ｳ縺梧款縺輔ｌ縺溘→縺�
    $('.arrow-right img').click(function(){
        slideCurrent++;
        sliding();
        slideCurrentNum = slideCurrent +1;
        slideNum = $(".page-slider-number-current").text();
    // 迴ｾ蝨ｨ縺ｮ繝壹�繧ｸ謨ｰ縺ｮ陦ｨ遉ｺ縺ｮ螟画峩
        $(".page-slider-number-current").text(parseInt(slideNum)+1);
    // 繝�く繧ｹ繝茨ｼ医せ繝ｩ繧､繝会ｼ峨�螟画峩
        $('.page-slider-text li').fadeOut(280);
        $('.page-slider-text li').eq(slideCurrentNum-1).fadeIn(280);
    // 繧ｹ繝ｩ繧､繝峨�譛蛻昴→譛蠕後〒遏｢蜊ｰ縺ｮ繧ｯ繝ｪ繝�け繧堤┌蜉ｹ蛹�
        if ( slideCurrent !== 0 ) { $('.arrow-left img').css("display","block") }
        if ( slideCurrent === slideItemNum-1 ) { $('.arrow-right img').css("display","none" ) }
    });

    // select繧貞､画峩縺励◆髫�
    $('[name=slideLink]').change(function() {
        // 驕ｸ謚槭＆繧後※縺�ｋvalue螻樊ｧ蛟､繧貞叙繧雁�縺�
        var val = $('[name=slideLink]').val();
        $('.page-slider-img').stop().animate({
            left: val * -100 +"%"
        });
        // 迴ｾ蝨ｨ縺ｮ繝壹�繧ｸ謨ｰ縺ｮ陦ｨ遉ｺ縺ｮ螟画峩
        $(".page-slider-number-current").text(parseInt(val)+1);
    // 繝�く繧ｹ繝茨ｼ医せ繝ｩ繧､繝会ｼ峨�螟画峩
        $('.page-slider-text li').fadeOut(280);
        $('.page-slider-text li').eq(parseInt(val)).fadeIn(280);
        slideCurrent = parseInt(val);
    // 繧ｹ繝ｩ繧､繝峨�譛蛻昴→譛蠕後〒遏｢蜊ｰ縺ｮ繧ｯ繝ｪ繝�け繧堤┌蜉ｹ蛹�
    if ( slideCurrent === 0 ) { $('.arrow-left img').css("display","none" ) } else if ( slideCurrent !== 0 ) { $('.arrow-left img').css("display","block") }
        if ( slideCurrent !== slideItemNum-1 ) { $('.arrow-right img').css("display","block" ) } else if ( slideCurrent === slideItemNum-1 ) { $('.arrow-right img').css("display","none" ) }
    });

    // 繝ｬ繧ｹ繝昴Φ繧ｷ繝門ｯｾ蠢�
    $(window).resize(function() {
        // 蜑阪∈繝懊ち繝ｳ縺梧款縺輔ｌ縺溘→縺�
        $('.arrow-left img').click(function(){
            slideCurrent;
            sliding();
        });
        // 谺｡縺ｸ繝懊ち繝ｳ縺梧款縺輔ｌ縺溘→縺�
        $('.arrow-right img').click(function(){
            slideCurrent;
            sliding();
        });
    });

});
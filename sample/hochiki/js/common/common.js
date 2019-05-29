/* =============================================
 * common.js
 - namespace: common
 ============================================= */

/* ----------------------------------------------------------
 define
 ---------------------------------------------------------- */
// namespace common
var common = common || {
    init: function () { //共通処理

      common.init.mqJudge();
      common.init.headerMenu();
      common.init.headerSearch();
      common.init.globalNaviCurrent();
      common.init.globalNaviMegamenu();
      common.init.localNavi();
      common.init.localNaviCurrent();
      common.init.selectCustom();
      common.init.btnRippleEffect();
      common.init.pageScroll();
      common.init.printPreview();

      common.init.shareButton();

      common.init.tabAction();
      common.init.faqAction();
      common.init.elementHeights();
      common.init.pluginPopUp();
      common.init.pluginSlick();
      common.init.systemCircle();
    },
    funcPc: function () {//PCレイアウトのみ処理
      common.funcPc.headerMenu();
      common.funcPc.localNavi();
    },
    funcTb: function () {//Tabletレイアウトのみ処理
    },
    funcSp: function () {//スマホレイアウトのみ処理
      common.funcSp.styleReset();
    }
  };

//ブレークポイントの値管理
common.breakPoints = {
  'sm': '(max-width: 767px)', //sp
  'md': '(min-width: 768px)', //tablet
  'lg': '(min-width: 960px)', //PC
};

/* ----------------------------------------------------------
 init
 ---------------------------------------------------------- */
//IE11用 consoleを定義させる
(function () {
  // window.console が未定義なら、オブジェクトにする
  if (typeof window.console === "undefined") {
    window.console = {}
  }
  // window.console.log が function でないならば、空の function を代入する
  if (typeof window.console.log !== "function") {
    window.console.log = function () {}
  }
})();

//jquery
(function ($) {
  'use strict';
  //DOMロード後実行処理
  $(document).ready(function () {
    common.init();
  });
})(jQuery);

/* ----------------------------------------------------------
 個別関数管理
 ---------------------------------------------------------- */
/* ----------------------------------------------------------
 【メディアクエリによる画面サイズ判定】
 matchMediaによるメディアクエリ値（画面サイズ）判定を行う。
 mqPc : PCレイアウト(961px以上)
 mqTb : タブレットレイアウト(768px以上 960以下)
 その他 : スマホレイアウト(767px以下)
 ---------------------------------------------------------- */
common.init.mqJudge = function () {
  var mqPc = window.matchMedia(common.breakPoints.lg),
      mqTb = window.matchMedia(common.breakPoints.md);

  /* ページをロードしたときにmatichMediaによる画面サイズ判定を行う */
  function mqOnLoadFunction (event) {
    if(mqPc.matches) { //Pc
      $('body').removeClass('is-sp is-tb').addClass('is-pc');
      common.funcPc();
    } else if(mqTb.matches) { //Tablet
      $('body').removeClass('is-sp is-pc').addClass('is-tb');
      common.funcTb();
    } else { //Sp
      $('body').removeClass('is-tb is-sp').addClass('is-sp');
      common.funcSp();
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
        $('body').removeClass('is-sp is-tb').addClass('is-pc');
        common.funcPc();
      } else if(mqTb.matches) { //Tablet
        $('body').removeClass('is-sp is-pc').addClass('is-tb');
        common.funcTb();
      } else { //Sp
        $('body').removeClass('is-tb is-sp').addClass('is-sp');
        common.funcSp();
      }
    }, 200);
  };
  //実行
  window.addEventListener('load', mqOnLoadFunction);
  window.addEventListener('resize', mqOnResizeFunction);
};

common.funcSp.styleReset = function () {
  var $target = $('.js-megamenuTarget');

  //jsでインラインでDOMに記述されたstyleを削除
  $target.removeAttr('style');

}

/* ----------------------------------------------------------
 【ヘッダーメニュー(Sp,Tb)】
 メニューアイコンをクリックするとヘッダーから、
 グローバルナビをフェードイン/アウトにて表示/非表示させる

  ボタン : '.js-menuTrigger',
  ナビゲーションメニュー : '.js-menuTarget'
  閉じるボタン : '.js-menuClose'
  判定クラス : 'is-open'

 ---------------------------------------------------------- */
common.init.headerMenu = function () {
  var $trigger = $('.js-menuTrigger'),
      $target = $('.js-menuTarget'),
      $closeTrigger = $('.js-menuClose'),
      className = {
        OPEN : 'is-open'
      };

  $trigger.on('click', function (event) {
    /* トリガーがクラスis-openを持っている場合はクラスを削除し、メニューを隠す
     持っていない場合は、クラスを追加し、メニューを表示*/
    if($(this).hasClass(className.OPEN)) {
      $(this).removeClass(className.OPEN);
      $target.fadeOut(400);
    } else {
      $(this).addClass(className.OPEN);
      $target.fadeIn(400);
    }
    event.preventDefault();
  });

  $closeTrigger.on('click', function () {
    $trigger.removeClass(className.OPEN);
    $target.fadeOut(400);
  });

};

/* ----------------------------------------------------------
【ヘッダーメニュー(Pc)】
  PCレイアウト時はヘッダーメニュー機能がないので、機能を削除する
 ---------------------------------------------------------- */
common.funcPc.headerMenu = function () {
  var $trigger = $('.js-menuTrigger'),
    $target = $('.js-menuTarget'),
    className = {
      OPEN : 'is-open'
    };

  $trigger.removeClass(className.OPEN);
  $target.removeAttr('style');

};



/* ----------------------------------------------------------
 【ヘッダー検索】
 検索アイコンボタンをクリックしたときに、
 検索エリアをフェードイン/アウトで表示/非表示させる
 ---------------------------------------------------------- */
common.init.headerSearch = function () {
  var $trigger = $('.js-searchTrigger'),
    $target = $('.js-searchTarget'),
    $closeTrigger = $('.js-searchClose'),
    className = {
      OPEN : 'is-open'
    },
    speed = 400;

  $trigger.on('click', function (event) {
    console.log("a");
    if($(this).hasClass(className.OPEN)) {
      $(this).removeClass(className.OPEN);
      $target.fadeOut(speed);
    } else {
      $(this).addClass(className.OPEN);
      $target.fadeIn(speed);
    }
    event.preventDefault();
  });

    $closeTrigger.on('click', function () {
      console.log("b");
    $trigger.removeClass(className.OPEN);
    $target.fadeOut(speed);
  });

};

/* ----------------------------------------------------------
 【グローバルナビ　メガメニューアニメーション】

 [Spレイアウト時]
 グローバルナビをクリックすると、
 スライドしながらメガメニューを表示する

 [Tb,PCレイアウト時]
 グローバルナビをクリックすると、
 フェードインしながらメガメニューを表示する

 ---------------------------------------------------------- */
common.init.globalNaviMegamenu = function () {
  var $trigger = $('.js-megamenuTrigger'),
      $target = $('.js-megamenuTarget'),
      $navItem = $('.nav-global-item'),
      className = {
        OPEN : 'is-open'
      };



  function normalMegamenuAction() {
    /* トリガーがクラスis-openを持っている場合はクラスを削除し、スライドUpする
     持っていない場合は、クラスを追加し、スライドDownする*/

    $trigger.on('click', function (event) {
      if($(this).closest($navItem).hasClass(className.OPEN)) {

        $(this).closest($navItem).removeClass(className.OPEN);
        $(this).next($target).removeClass(className.OPEN);

        if($('body').hasClass('is-sp')) {
          $(this).next($target).velocity("slideUp", { delay: 0, duration: 350 });
        } else {
          $target.velocity("fadeOut", { delay: 0, duration: 350 });
        }

      } else {

        $navItem.removeClass(className.OPEN);
        $target.removeClass(className.OPEN);
        $(this).closest($navItem).addClass(className.OPEN);
        $(this).next($target).addClass(className.OPEN);

        if($('body').hasClass('is-sp')) {
          $(this).next($target).velocity("slideDown", { delay: 0, duration: 400 });
        } else {

          $target.velocity("fadeOut", { delay: 0, duration: 0 });
          $(this).next($target).velocity("fadeIn", { delay: 50, duration: 400 });
        }
      }

      event.preventDefault();
    });
  }
  
  function recruitMegamenuAction() {
    if(window.matchMedia(common.breakPoints.lg).matches) { //pcレイアウト

      $trigger.parent('.nav-global-item').hover(
        function(event) { //mouseenter

          $(this).find($target).velocity("fadeIn", { delay: 50, duration: 350 });

          event.preventDefault();
        },
        function(event) { //mouseleace

          $target.velocity("fadeOut", { delay: 0, duration: 200 });

          event.preventDefault();
        }
      );

    } else { //タブレット、スマホレイアウト
      $trigger.on('click', function (event) {

        if($(this).closest($navItem).hasClass(className.OPEN)) {

          $(this).closest($navItem).removeClass(className.OPEN);
          $(this).next($target).removeClass(className.OPEN);
          if($('body').hasClass('is-sp')) {
            $(this).next($target).velocity("slideUp", { delay: 0, duration: 350 });
          } else {
            $target.velocity("fadeOut", { delay: 0, duration: 100 });
          }

        } else {
          $navItem.removeClass(className.OPEN);
          $target.removeClass(className.OPEN);
          $(this).closest($navItem).addClass(className.OPEN);
          $(this).next($target).addClass(className.OPEN);

          if($('body').hasClass('is-sp')) {
            $(this).next($target).velocity("slideDown", { delay: 0, duration: 400 });
          } else {
            $target.velocity("fadeOut", { delay: 0, duration: 0 });
            $(this).next($target).velocity("fadeIn", { delay: 50, duration: 400 });
          }
        }

        event.preventDefault();
      });
    }
  }

  /* Recruitページと通常ページで処理を分ける必要があるので、ヘッダーのクラス名で判別する*/
  if($('.header-recruit')[0]) {
    recruitMegamenuAction();
  } else {
    normalMegamenuAction();
  }

};

/* ----------------------------------------------------------
 【グローバルナビ カレント】
 グローバルナビのリンクの第2階層ディレクトリ名と
 URLのパスの第2階層が一致したら、該当グローバルナビにカレントクラス名を付与する。

 ---------------------------------------------------------- */
common.init.globalNaviCurrent = function () {

  var globalNaviItem = $('.nav-global-item:not(.no-current)'),
      globalLink = $('.nav-global-link'),
      className = {
        CURRENT : 'is-current'
      };

  //1. データをセットする
  function dataSet() {

    var dirName = location.pathname.split('/')[1], //URLをsplitで分解して、第2階層のディレクトリを取得
        globalLinkArray = []; //グローバルナビのリンクを入れる配列を用意

    globalLink.each(function () {
      //絶対カレントが必要ない採用サイトのリンクには クラス名.no-current を付けているので、それ以外のときに処理を動かす
      if(!$(this).parent().hasClass('no-current')) {
        var globalLinkHref = $(this).attr('href').split('/')[1]; //グローバルナビのリンクの第2階層のディレクトリ名を配列に入れ込む
        globalLinkArray.push(globalLinkHref);
      }
    });

    dataCompare(dirName, globalLinkArray);
  }

  //採用ヘッダーの場合
  function dataSetRecruit() {
    var dirName = location.pathname.split('/')[1] + '/' + location.pathname.split('/')[2] + '/', //URLをsplitで分解して、第2階層のディレクトリを取得
      globalLinkArray = []; //グローバルナビのリンクを入れる配列を用意

    globalLink.each(function () {
      //絶対カレントが必要ない採用サイトのリンクには クラス名.no-current を付けているので、それ以外のときに処理を動かす
      if(!$(this).parent().hasClass('no-current')) {
        var globalLinkHref = $(this).attr('href').split('/')[1] + '/' + $(this).attr('href').split('/')[2] + '/';  //グローバルナビのリンクの第2階層のディレクトリ名を配列に入れ込む
        globalLinkArray.push(globalLinkHref);
      }
    });

    dataCompare(dirName, globalLinkArray);

  }

  //2. データを比較する
  function dataCompare(dir, ary) {
    for(var i = 0; i < ary.length; i++) {
      if(ary[i] === dir ) { //URLから取得したdir(dirName)と、グロナビのリンクから取得したary( globalLinkArray)を比較して、一致したらカレント表示関数を動かす
        dataCurrent(i);
      }
    }
  }

  //3. カレントを表示させる
  function dataCurrent(order) {
    globalNaviItem.eq(order).addClass(className.CURRENT); //該当グローバルナビにクラスを付与
  }

  //start

  if($('.header-recruit')[0]) {
    dataSetRecruit();
  } else {
    dataSet();
  }

};

/* ----------------------------------------------------------
 【ローカルナビ アニメーション】

 ---------------------------------------------------------- */
common.init.localNavi = function () {

  var $trigger = $('#js-localMenuTrigger'),
      $target = $('#js-localMenuTarget'),
      $closeTrigger = $('#js-localMenuClose'),
      $localNavigations = $('.local-navigations'),
      $wrapper = $('.wrapper'),
      className = {
        OPEN : 'is-open',
        FIXED : 'is-fixed'
      },
      speed = 400;


  function closeLocalNavi() {
    $trigger.removeClass(className.OPEN);
    $localNavigations.removeClass(className.OPEN);
    $wrapper.removeClass(className.FIXED);
    $target.fadeOut(speed);
  }

  function openLocalNavi() {
    $trigger.addClass(className.OPEN);
    $localNavigations.addClass(className.OPEN);
    $wrapper.addClass(className.FIXED);
    $target.fadeIn(speed);
  }

  $trigger.on('click', function (event) {
    if($(this).hasClass(className.OPEN)) {
      closeLocalNavi();
    } else {
      openLocalNavi();
    }
    event.preventDefault();
  });

  $closeTrigger.on('click', function (event) {
    closeLocalNavi();
    event.preventDefault();
  });

};

common.funcPc.localNavi = function () {
  var $trigger = $('#js-localMenuTrigger'),
    $target = $('#js-localMenuTarget'),
    $localNavigations = $('.local-navigations'),
    $wrapper = $('.wrapper'),
    className = {
      OPEN : 'is-open',
      FIXED : 'is-fixed'
    };

  $trigger.removeClass(className.OPEN);
  $localNavigations.removeClass(className.OPEN);
  $wrapper.removeClass(className.FIXED);
  $target.removeAttr('style');

}

/* ----------------------------------------------------------
 【ローカルナビ カレント】
 ローカルナビのリンクパス名と
 URLのパス一致したら、該当ローカルナビにカレントクラス名を付与する。

 ---------------------------------------------------------- */
common.init.localNaviCurrent = function () {
  var localNaviItem = $('.nav-local__item'),
      localLink = $('.nav-local__link'),
      localNaviChildItem = $('.nav-local-child__item'),
      localChildLink = $('.nav-local-child__link'),
      className = {
        CURRENT : 'is-current'
      };

  //1. データをセットする
  function dataSet() {
    var dirName = location.pathname, //URLのパス部分を取得
        localLinkArray = [], //ローカルナビの第3階層リンクを入れる配列を用意
        localChildLinkArray = []; //ローカルナビの第4階層リンクを入れる配列を用意

    localLink.each(function () {
      var localLinkHref = $(this).attr('href'); //ローカルナビの第3階層リンクのパスを配列に入れ込む

      localLinkArray.push(localLinkHref);

    });

    localChildLink.each(function () {
      var localChildLinkHref = $(this).attr('href'); //ローカルナビの第4階層リンクのパスを配列に入れ込む

      localChildLinkArray.push(localChildLinkHref);

    });

    /* [ 例外処理 ]
     *  URLにindex.htmlを含む場合、ローカルナビのパス名と一致しなくなるので、事前にカットしてあげる
     * */
    if(dirName.indexOf('index.html') !== -1) {
      dirName = dirName.replace(/index.html/g , '');
    }

    dataCompare(dirName, localLinkArray, localChildLinkArray);

  }

  //2. データを比較する
  function dataCompare(dir, ary, aryChild) {

    /* まず、第3階層のリンクパスが合致するか判定
    *  合致したら、.nav-local__itemがカレント、合致しなかったら第3階層よりもっと深いと判断できる
    */

    if(ary.indexOf(dir) >= 0) {
      for(var i = 0; i < ary.length; i++) {
        if(ary[i] === dir ) {
          dataCurrent(i, 1); //flag = 1 を飛ばす
          break;
        }
      }
    } else {
      for(var j = 0; j < aryChild.length; j++) {

        var dirAdd = dir.split('/')[1]+'/'+dir.split('/')[2]+'/'+dir.split('/')[3],
            aryAdd = aryChild[j].split('/')[1]+'/'+aryChild[j].split('/')[2]+'/'+aryChild[j].split('/')[3];

        if(aryChild[j] === dir ) {
          dataCurrent(j, 2); //flag = 2 を飛ばす
          break;
        } else if(dirAdd === aryAdd) {
          /* ページが第5,6階層目の場合は 第4階層目のディレクトリ名が合致した場合カレント表示関数を動かす*/
          dataCurrent(j, 3); //flag = 3 を飛ばす
          break;
        } else if(aryChild[j] === '/business/security/#nyutai') { //例外処理 #nyutaiのとき
          dataCurrent(j, 3); //flag = 3 を飛ばす
        }
      }
    }
  }

  //3. カレントを表示させる
  function dataCurrent(order, flag) {

    if(flag === 1) {
      localNaviItem.eq(order).addClass(className.CURRENT); //該当ローカルナビにクラスを付与
    } else if(flag === 2) {
      localNaviChildItem.eq(order).addClass(className.CURRENT); //該当ローカルナビにクラスを付与
    } else if(flag === 3) {
      localNaviChildItem.eq(order).addClass(className.CURRENT); //該当ローカルナビにクラスを付与
    }
  }

  //start
  dataSet();

};

/* ----------------------------------------------------------
 【印刷プレビュー】
 ---------------------------------------------------------- */
common.init.printPreview = function () {
  var $trigger = $('.js-print');

  //印刷プレビュー実行
  function doPrintPreview() {
    window.print();
  }

  //ボタンの表示可否を判断する
  function judgeDisplay() {
    var dirName = location.pathname.split('/')[1], //URLをsplitで分解して、第2階層のディレクトリを取得
        $footerFloating = $('.footer-floating'),
        className = {
          SHOW : 'is-printShow'
        };


    if(dirName === 'business' || dirName === 'personal') {
      $footerFloating.addClass(className.SHOW);
    } else {
      $footerFloating.removeClass(className.SHOW);
    }

  }

  $trigger.on('click', function (event) {
    doPrintPreview();
    event.preventDefault();
  });

  $('window').on('load', judgeDisplay());

};


/* ----------------------------------------------------------
 【ぺージスクロール】
 ---------------------------------------------------------- */
common.init.pageScroll = function () {
  var $trigger = $('.js-scroll');

  function scrollStart(elm) {

    var href,
        target;

    href = elm.attr('href');
    target = (href === '#anc_pageTop') ? 'html' : href;


    if(href === '#anc_pageTop') {
      target = 'html';

      $(target).velocity('scroll', {
        duration: 600,
        easing: 'ease-out'
      });

    } else {

      var offsetH = offsetSetting();

      target = href;

      $(target).velocity('scroll', {
        duration: 600,
        offset: '-' + offsetH,
        easing: 'ease-out'
      });

    }
  }

  /* スクロールのズレを解消する関数
   *  pc時はヘッダー分のみ、
   *  スマホ、タブレット時にローカルナビが存在する場合はヘッダー分＋ローカルナビ分で計算する
   * */
  function offsetSetting() {
    var $headerElm = $('.header'),
        $lnavElem = $('.local-navigations__heading'),
        headerH,
        lnavH,
        totalH,
        padding = 10;

    if($('body').hasClass('is-pc')) { //pc

      headerH = $headerElm.innerHeight();
      totalH = headerH + padding;

    } else { //tb,sp

      headerH = $headerElm.innerHeight();
      if($lnavElem[0]) {
        lnavH = $lnavElem.innerHeight();
      } else {
        lnavH = 0;
      }

      totalH = headerH + lnavH + padding;
    }

    return totalH;


  }

  /* ハッシュ付きURLの場合ヘッダー分を計算してスクロールする関数
   *  ロード時に、ハッシュが付いている場合は、ヘッダーに要素隠れないように計算する
   *  （基本計算はクリックしてするロールするときにヘッダー・ローカルナビを計算する関数を経由している）
   * */
  function transitionAnchor() {
    var thisHash = location.hash;

    if(thisHash[0]) { //Hash（シャープ(#)付きURLの場合）

      var offsetH = offsetSetting();

      target = thisHash;

      $(target).velocity('scroll', {
        duration: 10,
        offset: '-' + offsetH,
        easing: 'ease-out'
      });
    }

  }


  /* init
  * */
  $trigger.on('click', function (event) {
    event.preventDefault();

    var thisElm = $(this);
    scrollStart(thisElm);

  });

  $(window).on('load', function () {
    setTimeout(function(){
      transitionAnchor();
    },
    100)
  });

};

/* ----------------------------------------------------------
 【タブ切り替え】
  タブ判定トリガー: .js-tabTrigger
  タブボタン: .js-tabButton
  タブコンテンツ: .js-tabContent

  タブ切り替えボタンをクリックしたらボタンの順番に応じた順番のコンテンツが、
  フェードイン / アウトして表示される。

  コンテンツごとの高さが異なる場合にガクガクしないようにロード時にmin-heightを
  コンテンツ親に指定している(tabContentsHeightSet関数)

 ---------------------------------------------------------- */
common.init.tabAction = function () {
  var $trigger = $('.js-tabTrigger'),
      $button = $('.js-tabButton [data-tab="button"]'),
      $content = $('.js-tabContent [data-tab="content"]'),
      className = {
        CURRENT : 'is-current'
      };

  /* ロード時にmin-heightをコンテンツ親に指定 */
  function tabContentsHeightSet() {

    var contentHeight = 0,
        contentHeightAry = [];

    $content.each(function (cnt) {
      cnt = cnt + 1; //カウントを1からはじめるために+1をセットしておく

      contentHeight = $(this).outerHeight(); //1つのcontentの高さを取得
      contentHeightAry.push(contentHeight); //それぞれ配列に入れ込む

      if( cnt === $content.length) { //contensの高さをすべて配列に入れたら比較関数に処理を送る
        compareAry(contentHeightAry);
      }

    });

    /* 2つの値を比較してソートを行う関数
    *  今回は昇順でソートして一番高さが高い値をheightSet関数に送る
    * */
    function compareAry(ary) {
      ary.sort(function (a, b) {
        return b - a;
      });
      
      heightSet(ary[0]);
    }
    
    function heightSet(value) {
      $content.parent().css('min-height', value);
    }

  }

  /* タブボタンクリック時に実行 */
  /* 1. タブが押されたボタンの順番などを取得、セット */
  function tabDataSet(elm) {
    this.elm = elm;
    this.index = $button.index(elm);
    tabCurrentAction(index);
  }

  /* 2. カレント表示をする */
  function tabCurrentAction(order) {
    //button
    $button.removeClass(className.CURRENT);
    $button.eq(order).addClass(className.CURRENT);

    //content
    $content.removeClass(className.CURRENT);
    $content.velocity("fadeOut", { duration: 100});
    $content.eq(order).addClass(className.CURRENT);
    $content.eq(order).velocity("fadeIn", { duration: 400 });
  }

  //実行
  if($trigger[0]) {
    //click
    $button.on('click', function (event) {
      event.preventDefault();
      tabDataSet(this);
    });
    //load
    $(window).on('load', tabContentsHeightSet());
  }

};

/* ----------------------------------------------------------
 【FAQ用アコーディオン】
 アコーディオンボタン: .js-faqTrigger
 アコーディオンコンテンツ: .js-faqContent

  アコーディオンボタンをクリックすると、slideUp/ SlideDownする
 ---------------------------------------------------------- */
common.init.faqAction = function () {
  var $trigger = $('.js-faqTrigger'),
      $content = $('.js-faqContent'),
      className = {
        OPEN: 'is-open'
      };

  function faqAccordion(obj) {
    if(obj.hasClass(className.OPEN)) {
      obj.removeClass(className.OPEN);
      obj.next($content).removeClass(className.OPEN).velocity("slideUp", { delay: 0, duration: 350 });
    } else {
      obj.addClass(className.OPEN);
      obj.next($content).addClass(className.OPEN).velocity("slideDown", { delay: 0, duration: 400 });
    }
  }

  if($trigger[0]) {
    //click
    $trigger.on('click', function (event) {
      event.preventDefault();

      var _this = $(this);

      faqAccordion(_this);

    });

  }

}

/* ----------------------------------------------------------
 【select装飾】
 chosen.jquery.min.jsを利用
 トリガークラス : '.js-selectTrigger'
 ---------------------------------------------------------- */
common.init.selectCustom = function () {
  var $trigger = $('.js-selectTrigger');

  $trigger.chosen({
    disable_search_threshold: 10,
    width: "auto"
  });

};

common.init.elementHeights = function () {
  var $target = $('.grid-container .grid-col [class*="btn-block-default--"] > .inner, .mod-contact-height .mod-contact, .nav-english-links__link span, .list-interview-schedule__item .card-interview-schedule__details, .list-education-schedule__item .card-education-schedule__details, .list-interview-member__item, .list-enterprise-areas .list-enterprise-areas__text, .list-whats-suji__details, .grid-top-content-col .card-top-content__description, .list-about-strategy__details, .mod-contact-area .mod-contact, .is-sp-add-unit');

  $target.matchHeight();
};

/* ----------------------------------------------------------
 【ポップアップ】
 magnificPopupを利用
 ---------------------------------------------------------- */
common.init.pluginPopUp = function () {

  var $trigger = $('.js-popup');

  $trigger.magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');

        $('body').addClass('is-modal-open');

      },
      close: function(){
        $('body').removeClass('is-modal-open');
      }
    },
    overflowY: 'scroll',
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $(document).on('click', '.mfp-orgn-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

};

/* ----------------------------------------------------------
 【ポップアップ】
 slick.jsを利用
 ---------------------------------------------------------- */
common.init.pluginSlick = function () {
  var $target = $('.js-heroFadeSlider');

  $target.slick({
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  });

};

common.init.systemCircle = function () {
  var $trigger = $('.js-systemCircle .mod-whats-jigyou-system-circle__item'),
      $popup = $('.js-systemCircle .mod-whats-jigyou-system__details'),
      $group = $('.js-systemCircle .mod-whats-jigyou-system-details-group'),
      className = {
        ACTIVE: 'is-active'
      };

  $trigger.on('click', function () {
    var index = $(this).index();

    $trigger.removeClass(className.ACTIVE);
    $popup.removeClass(className.ACTIVE);
    $popup.velocity("fadeOut", { duration: 0});

    $trigger.eq(index).addClass(className.ACTIVE);
    $popup.eq(index).addClass(className.ACTIVE);
    $popup.eq(index).velocity("fadeIn", { duration: 600 });

  });

  $(window).on('load', function () {
    var height = $group.innerHeight();

    $group.css('min-height', height);

  });



};

/* ----------------------------------------------------------
 【ボタン装飾】
 リップルエフェクト
 ---------------------------------------------------------- */
common.init.btnRippleEffect = function () {
  var $target = $('[class*="btn-default--"], [class*="btn-secondary--"], [class*="btn-cta--"], [class*="btn-with-icon-default--"], [class*="btn-with-icon-secondary--"], [class*="btn-with-icon-cta--"], [class*="btn-block-default-default--"], [class*="btn-block-default-secondary--"], [class*="btn-block-default-cta--"], [class*="btn-dropdown-default--"] .btn-dropdown__toggle, [class*="btn-dropdown-secondary--"] .btn-dropdown__toggle, [class*="btn-dropdown-cta--"] .btn-dropdown__toggle');

  function btnAddClass() {
    $target.each(function () {
      $(this).addClass('ripple');
    });
  }

  function rippleEffect(obj, elm) {

    var coversize = obj.offsetWidth,
        location = obj.getBoundingClientRect(),
        pos = {
          x : event.pageX - location.left - window.pageXOffset - (coversize / 2),
          y : event.pageY - location.top - window.pageYOffset - (coversize / 2),
          total : ''
        },
        setCover;

    pos.total = 'top:' + pos.y + 'px; left:' + pos.x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;',
    setCover = '<span class="rp-effect" style="'+pos.total+'"></span>';

    elm.append(setCover);

    setTimeout(function() {
      $('.rp-effect').remove();
    }, 1500);
  }

  $(document).on('load', btnAddClass());
  $(document).on('click', '.ripple', function () {
    var obj = this,
        elm = $(this);
    rippleEffect(obj, elm);
  });

};

/* ----------------------------------------------------------
 【シェアボタン実装】
 ---------------------------------------------------------- */
common.init.shareButton = function () {
  var $snsArea = $('#js-sns'),
      $buttonFacebook = $('#js-snsFacebook'),
      $buttonTwitter = $('#js-snsTwitter'),
      $buttonGoogle = $('#js-snsGoogle'),
      share = {
        url: 'https://www.hochiki.co.jp' + location.pathname,
        title: document.title
      };

  function generateShare() {
    var twiHref = 'https://twitter.com/share?text='+encodeURIComponent(share.title)+'&url='+encodeURIComponent(share.url),
        fbHref = 'http://www.facebook.com/share.php?u='+encodeURIComponent(share.url),
        gpHref = 'https://plus.google.com/share?url='+encodeURIComponent(share.url),
        onClick = 'window.open(this.href, "tweetwindow", "width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1"); return false;';

    //twitter
    $buttonTwitter.attr('href', twiHref);
    $buttonTwitter.attr('onclick', onClick);

    //facebook
    $buttonFacebook.attr('href', fbHref);
    $buttonFacebook.attr('onclick', onClick);

    //google plus
    $buttonGoogle.attr('href', gpHref);
    $buttonGoogle.attr('onclick', onClick);

  }

  $snsArea.ready(generateShare);

};
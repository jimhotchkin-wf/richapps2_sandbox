// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window);
    var $sidenav = $('.wdesk-docs-sidenav');

    // standardize our <select> elems
    $("select").chosen({
      inherit_select_classes: true
    });

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    setTimeout(function () {

      $sidenav.affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 269 : 237 }
        , bottom: 270
        }
      });
      // if nothing is active, activate the first one
      var activeSection = $sidenav.find("li").hasClass("active");
      if(!activeSection) {
        $sidenav.find("li:first").addClass("active");
      }

    }, 100)

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#grid-system').length) {
      $('#grid-system').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // don't re-enable body scroll when showing tooltip / popover from within modal
    $('.tooltip-test, .popover-test').hover(function(){
      $("body").addClass("modal-open");
    }, function(){
      $("body").addClass("modal-open");
    });

    // popover demo
    $("a[data-toggle=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    $('#download-demo').click(function(){
        var $btn = $(this)
        var $icon = $("> .icon", this);
        $btn.button('downloading')
        $icon.removeClass("icon-download-available icon-downloaded")
            .addClass("icon-downloading")
        setTimeout(function(){
            $btn.button('complete')
            $icon.removeClass("icon-downloading")
                 .addClass("icon-downloaded")
        }, 5000)
    })



    // ICOMOON DOCUMENTATION DOM HELPERS
    // ---------------------------------------------------------------------------

      //----------------------------------------------
      //+ MAIN SET
      //    PASTE FROM lt-ie7.js HERE
      //    simply change var icon = {} 
      //    to var mainClassname, mainPua = {}
      //    each time you download fonts from IcoMoon
      //----------------------------------------------
        
        var mainClassname, mainPua = {
            'icon-pending' : '&#x25f4;',
            'icon-update-available' : '&#x27f3;',
            'icon-after-update-available' : '&#x27f2;',
            'icon-downloaded' : '&#x2193;',
            'icon-after-downloaded' : '&#xe002;',
            'icon-download-available' : '&#x2313;',
            'icon-users' : '&#xe003;',
            'icon-zoom-page-height' : '&#xe007;',
            'icon-signal' : '&#xe072;',
            'icon-cog' : '&#xe071;',
            'icon-book-binder' : '&#x2395;',
            'icon-book-binder_alt' : '&#xe009;',
            'icon-comment-lines' : '&#xe00a;',
            'icon-comment' : '&#xe00b;',
            'icon-comment-on' : '&#xe00c;',
            'icon-annotation-create' : '&#xe00d;',
            'icon-gripper' : '&#xe00e;',
            'icon-arrow-sm-left' : '&#xe00f;',
            'icon-arrow-sm-down' : '&#xe010;',
            'icon-arrow-sm-right' : '&#xe011;',
            'icon-arrow-sm-up' : '&#xe012;',
            'icon-upload-alt' : '&#xe013;',
            'icon-external-link' : '&#xe014;',
            'icon-pushpin' : '&#xe015;',
            'icon-heart-empty' : '&#xe016;',
            'icon-star-half' : '&#xe017;',
            'icon-thumbs-down' : '&#xe018;',
            'icon-thumbs-up' : '&#xe019;',
            'icon-cogs' : '&#xe01a;',
            'icon-key' : '&#xe01b;',
            'icon-camera-retro' : '&#xe01c;',
            'icon-bar-chart' : '&#xe01d;',
            'icon-resize-horizontal' : '&#xe01e;',
            'icon-resize-vertical' : '&#xe01f;',
            'icon-shopping-cart' : '&#xe020;',
            'icon-retweet' : '&#xe021;',
            'icon-magnet' : '&#xe022;',
            'icon-random' : '&#xe023;',
            'icon-calendar' : '&#xe024;',
            'icon-plane' : '&#xe025;',
            'icon-warning-sign' : '&#xe026;',
            'icon-eye-close' : '&#xe027;',
            'icon-eye-open' : '&#xe028;',
            'icon-fire' : '&#xe029;',
            'icon-leaf' : '&#xe02a;',
            'icon-gift' : '&#xe02b;',
            'icon-exclamation-sign' : '&#xe02c;',
            'icon-asterisk' : '&#xe02d;',
            'icon-ban-circle' : '&#xe02e;',
            'icon-screenshot' : '&#xe02f;',
            'icon-resize-small' : '&#xe030;',
            'icon-resize-full' : '&#xe031;',
            'icon-share-alt' : '&#xe032;',
            'icon-arrow-down' : '&#xe033;',
            'icon-arrow-up' : '&#xe034;',
            'icon-arrow-right' : '&#xe035;',
            'icon-arrow-left' : '&#xe036;',
            'icon-ok-sign' : '&#xe037;',
            'icon-ok-circle' : '&#xe038;',
            'icon-remove-sign' : '&#xe039;',
            'icon-remove-circle' : '&#xe03a;',
            'icon-info-sign' : '&#xe03b;',
            'icon-question-sign' : '&#xe03c;',
            'icon-minus' : '&#xe03d;',
            'icon-minus-sign' : '&#xe03e;',
            'icon-plus' : '&#xe03f;',
            'icon-plus-sign' : '&#xe040;',
            'icon-eject' : '&#xe041;',
            'icon-step-forward' : '&#xe042;',
            'icon-fast-forward' : '&#xe043;',
            'icon-forward' : '&#xe044;',
            'icon-stop' : '&#xe045;',
            'icon-pause' : '&#xe046;',
            'icon-play' : '&#xe047;',
            'icon-backward' : '&#xe048;',
            'icon-fast-backward' : '&#xe049;',
            'icon-step-backward' : '&#xe04a;',
            'icon-move' : '&#xe04b;',
            'icon-check' : '&#xe04c;',
            'icon-share' : '&#xe04d;',
            'icon-edit' : '&#xe04e;',
            'icon-tint' : '&#xe04f;',
            'icon-adjust' : '&#xe050;',
            'icon-map-marker' : '&#xe051;',
            'icon-picture' : '&#xe052;',
            'icon-facetime-video' : '&#xe053;',
            'icon-italic' : '&#xe05c;',
            'icon-bold' : '&#xe05d;',
            'icon-font' : '&#xe05e;',
            'icon-camera' : '&#xe05f;',
            'icon-print' : '&#xe060;',
            'icon-briefcase3' : '&#xe061;',
            'icon-tags' : '&#xe062;',
            'icon-tag' : '&#xe063;',
            'icon-barcode' : '&#xe064;',
            'icon-qrcode' : '&#xe065;',
            'icon-volume-up' : '&#xe066;',
            'icon-volume-down' : '&#xe067;',
            'icon-volume-off' : '&#xe068;',
            'icon-headphones' : '&#xe069;',
            'icon-flag' : '&#xe06a;',
            'icon-refresh' : '&#xe06b;',
            'icon-repeat' : '&#xe06c;',
            'icon-play-circle' : '&#xe06d;',
            'icon-inbox' : '&#xe06e;',
            'icon-upload' : '&#xe06f;',
            'icon-download' : '&#xe073;',
            'icon-download-alt' : '&#xe074;',
            'icon-road' : '&#xe075;',
            'icon-time' : '&#xe076;',
            'icon-home' : '&#xe077;',
            'icon-zoom-page-width' : '&#xe078;',
            'icon-phone' : '&#xe079;',
            'icon-library-bookshelf' : '&#xe07a;',
            'icon-off' : '&#xe07b;',
            'icon-zoom-out' : '&#xe07c;',
            'icon-zoom-in' : '&#xe07d;',
            'icon-remove' : '&#xe07e;',
            'icon-ok' : '&#xe07f;',
            'icon-film' : '&#xe080;',
            'icon-user' : '&#xe081;',
            'icon-star-empty' : '&#xe082;',
            'icon-star' : '&#xe083;',
            'icon-heart' : '&#xe084;',
            'icon-envelope' : '&#xe085;',
            'icon-search' : '&#xe086;',
            'icon-music' : '&#xe087;',
            'icon-glass' : '&#xe088;',
            'icon-notification-megaphone' : '&#xe089;',
            'icon-notification-cheerleader' : '&#xe08a;',
            'icon-file-cabinet' : '&#xe08b;',
            'icon-calculator-sm' : '&#xe08c;',
            'icon-calculator-buttons' : '&#xe08d;',
            'icon-construction-cone' : '&#xe08e;',
            'icon-construction-barrier' : '&#xe08f;',
            'icon-disk-floppy' : '&#xe090;',
            'icon-video-film-play' : '&#xe091;',
            'icon-heartbeat' : '&#xe092;',
            'icon-key2' : '&#xe093;',
            'icon-lightbulb-off' : '&#xe094;',
            'icon-lightbulb-on' : '&#xe095;',
            'icon-map-folded' : '&#xe096;',
            'icon-prize-ribbon' : '&#xe097;',
            'icon-mirror-horizontal' : '&#xe098;',
            'icon-mirror-vertical' : '&#xe099;',
            'icon-mouse-wheel' : '&#xe09a;',
            'icon-new-indicator' : '&#xe09b;',
            'icon-quote-open' : '&#xe09c;',
            'icon-quote-close' : '&#xe09d;',
            'icon-spellcheck' : '&#xe0a0;',
            'icon-unlock' : '&#xe0a1;',
            'icon-lock' : '&#xe0a2;',
            'icon-loading-hourglass' : '&#xe0ae;',
            'icon-keyboard2' : '&#xe0b0;',
            'icon-mouse-scroll-horizontal' : '&#xe0b1;',
            'icon-mouse-scroll-vertical' : '&#xe0b2;',
            'icon-mouse-click-wheel' : '&#xe0b3;',
            'icon-mouse-click-right' : '&#xe0b4;',
            'icon-mouse-click-left' : '&#xe0b5;',
            'icon-chevron-left' : '&#xe0b6;',
            'icon-chevron-right' : '&#xe0b7;',
            'icon-chevron-up' : '&#xe0b8;',
            'icon-chevron-down' : '&#xe0b9;',
            'icon-chevron-down-small' : '&#xe0ba;',
            'icon-chevron-left-small' : '&#xe0bb;',
            'icon-chevron-right-small' : '&#xe0bc;',
            'icon-chevron-up-small' : '&#xe0bd;',
            'icon-doc-archive-undo' : '&#xe0be;',
            'icon-doc-archive' : '&#xe0bf;',
            'icon-arrow-sm-expand-y' : '&#xe0c0;',
            'icon-signin' : '&#xe0c1;',
            'icon-signin-door' : '&#xe0c2;',
            'icon-signout' : '&#xe0c3;',
            'icon-folder-close' : '&#xe0c4;',
            'icon-folder-open' : '&#xe0c5;',
            'icon-folder-add' : '&#xe0c6;',
            'icon-folder-remove' : '&#xe0c7;',
            'icon-file-add' : '&#xe0c8;',
            'icon-hyperlink-broken' : '&#xe0c9;',
            'icon-hyperlink' : '&#xe0ca;',
            'icon-pencil' : '&#xe0cd;',
            'icon-pencil-alt' : '&#x270e;',
            'icon-delete-backspace' : '&#xe0cf;',
            'icon-binocular' : '&#xe0d0;',
            'icon-search-binoc' : '&#xe0d1;',
            'icon-search-binoc_wf' : '&#xe0d2;',
            'icon-bookmark' : '&#xe0d3;',
            'icon-bookmark-alt' : '&#xe0d4;',
            'icon-notes-marks' : '&#xe0d5;',
            'icon-notes' : '&#xe0d6;',
            'icon-pencil-draw' : '&#xe0d7;',
            'icon-mail' : '&#xe0d8;',
            'icon-mail-open' : '&#xe0d9;',
            'icon-directory' : '&#xe0da;',
            'icon-search-left' : '&#xe0db;',
            'icon-search-right' : '&#xe0dc;',
            'icon-menu-list' : '&#xe0dd;',
            'icon-file-mspowerpoint' : '&#xe0de;',
            'icon-file-msexcel' : '&#xe0df;',
            'icon-file-msword' : '&#xe0e0;',
            'icon-file-pdf' : '&#xe0e1;',
            'icon-file-txt' : '&#xe0e2;',
            'icon-file' : '&#xe0e3;',
            'icon-file-dragndrop' : '&#xe0e4;',
            'icon-file-dragndrop-add' : '&#xe0e5;',
            'icon-hr-sketch' : '&#xe0e6;',
            'icon-arrow-sketch' : '&#xe0e7;',
            'icon-arrow-sketch-short' : '&#xe0e8;',
            'icon-trash' : '&#x267b;'
          }

      //----------------------------------------------
      //+ SEC DOCICONS SET
      //    PASTE FROM lt-ie7.js HERE
      //    simply change var icon = {} 
      //    to var secClassname, secPua = {}
      //    each time you download fonts from IcoMoon
      //----------------------------------------------
        
        var secClassname, secPua = {
            'icon-sec-XBRLINFO' : '&#xe000;',
            'icon-sec-WORKBOOK' : '&#xe001;',
            'icon-sec-SUBCERTIFICATION' : '&#xe002;',
            'icon-sec-SC14DRF' : '&#xe003;',
            'icon-sec-SC14D9C' : '&#xe004;',
            'icon-sec-SC14D1F' : '&#xe005;',
            'icon-sec-SC13E4F' : '&#xe006;',
            'icon-sec-SC_TOT' : '&#xe007;',
            'icon-sec-SC_TOI' : '&#xe008;',
            'icon-sec-SC_TOC' : '&#xe009;',
            'icon-sec-SC_14F1' : '&#xe00a;',
            'icon-sec-SC_14D9' : '&#xe00b;',
            'icon-sec-SC_13G' : '&#xe00c;',
            'icon-sec-SC_13E3' : '&#xe00d;',
            'icon-sec-SC_13E1' : '&#xe00e;',
            'icon-sec-SC_13D' : '&#xe00f;',
            'icon-sec-S11MEF' : '&#xe010;',
            'icon-sec-S11' : '&#xe011;',
            'icon-sec-S8' : '&#xe012;',
            'icon-sec-S6' : '&#xe013;',
            'icon-sec-S4MEF' : '&#xe014;',
            'icon-sec-S4EF' : '&#xe015;',
            'icon-sec-S4' : '&#xe016;',
            'icon-sec-S4_POS' : '&#xe017;',
            'icon-sec-S3MEF' : '&#xe018;',
            'icon-sec-S3DPOS' : '&#xe019;',
            'icon-sec-S3D' : '&#xe01a;',
            'icon-sec-S3ASR' : '&#xe01b;',
            'icon-sec-S3' : '&#xe01c;',
            'icon-sec-S3_13G' : '&#xe01d;',
            'icon-sec-S1MEF' : '&#xe01e;',
            'icon-sec-S1' : '&#xe01f;',
            'icon-sec-RW' : '&#xe020;',
            'icon-sec-RW_WD' : '&#xe021;',
            'icon-sec-PX14A6N' : '&#xe022;',
            'icon-sec-PX14A6G' : '&#xe023;',
            'icon-sec-PRRN14A' : '&#xe024;',
            'icon-sec-PRER14C' : '&#xe025;',
            'icon-sec-PREN14A' : '&#xe026;',
            'icon-sec-PREC14C' : '&#xe027;',
            'icon-sec-PREC14A' : '&#xe028;',
            'icon-sec-PRE_14C' : '&#xe029;',
            'icon-sec-PRE_14A' : '&#xe02a;',
            'icon-sec-POSASR' : '&#xe02b;',
            'icon-sec-POS8C' : '&#xe02c;',
            'icon-sec-POS_EX' : '&#xe02d;',
            'icon-sec-POS_AM' : '&#xe02e;',
            'icon-sec-POS_8C' : '&#xe02f;',
            'icon-sec-OTHER' : '&#xe030;',
            'icon-sec-NTNSAR' : '&#xe031;',
            'icon-sec-NTNCSR' : '&#xe032;',
            'icon-sec-NT_20F' : '&#xe033;',
            'icon-sec-NT_11K' : '&#xe034;',
            'icon-sec-NT_10Q' : '&#xe035;',
            'icon-sec-NT_10K' : '&#xe036;',
            'icon-sec-NT_10D' : '&#xe037;',
            'icon-sec-NQ' : '&#xe038;',
            'icon-sec-NPX' : '&#xe039;',
            'icon-sec-NCSRS' : '&#xe03a;',
            'icon-sec-NCSR' : '&#xe03b;',
            'icon-sec-N54C' : '&#xe03c;',
            'icon-sec-N54A' : '&#xe03d;',
            'icon-sec-N30D' : '&#xe03e;',
            'icon-sec-N30B2' : '&#xe03f;',
            'icon-sec-N8F' : '&#xe040;',
            'icon-sec-N8B4' : '&#xe041;',
            'icon-sec-N8B3' : '&#xe042;',
            'icon-sec-N8B2' : '&#xe043;',
            'icon-sec-N8A' : '&#xe044;',
            'icon-sec-N6F' : '&#xe045;',
            'icon-sec-N6' : '&#xe046;',
            'icon-sec-N4' : '&#xe047;',
            'icon-sec-N2' : '&#xe048;',
            'icon-sec-FWP' : '&#xe049;',
            'icon-sec-FN' : '&#xe04a;',
            'icon-sec-EXHIBIT' : '&#xe04b;',
            'icon-sec-DFRN14A' : '&#xe04c;',
            'icon-sec-DFAN14A' : '&#xe04d;',
            'icon-sec-DEL_AM' : '&#xe04e;',
            'icon-sec-DEFR14C' : '&#xe04f;',
            'icon-sec-DEFR14A' : '&#xe050;',
            'icon-sec-DEFN14A' : '&#xe051;',
            'icon-sec-DEFC14C' : '&#xe052;',
            'icon-sec-DEFC14A' : '&#xe053;',
            'icon-sec-DEFA14C' : '&#xe054;',
            'icon-sec-DEFA14A' : '&#xe055;',
            'icon-sec-DEF_14C' : '&#xe056;',
            'icon-sec-DEF_14A' : '&#xe057;',
            'icon-sec-COVER' : '&#xe058;',
            'icon-sec-CORRESP' : '&#xe059;',
            'icon-sec-CB' : '&#xe05a;',
            'icon-sec-AW' : '&#xe05b;',
            'icon-sec-AW_WD' : '&#xe05c;',
            'icon-sec-ARS' : '&#xe05d;',
            'icon-sec-ABS15G' : '&#xe05e;',
            'icon-sec-30582' : '&#xe05f;',
            'icon-sec-4024B2' : '&#xe060;',
            'icon-sec-4017G' : '&#xe061;',
            'icon-sec-4017F2' : '&#xe062;',
            'icon-sec-4017F1' : '&#xe063;',
            'icon-sec-1515D' : '&#xe064;',
            'icon-sec-1512G' : '&#xe065;',
            'icon-sec-1512B' : '&#xe066;',
            'icon-sec-1012G' : '&#xe067;',
            'icon-sec-1012B' : '&#xe068;',
            'icon-sec-497K' : '&#xe069;',
            'icon-sec-497J' : '&#xe06a;',
            'icon-sec-497H2' : '&#xe06b;',
            'icon-sec-497AD' : '&#xe06c;',
            'icon-sec-497' : '&#xe06d;',
            'icon-sec-487' : '&#xe06e;',
            'icon-sec-485BXT' : '&#xe06f;',
            'icon-sec-485BPOS' : '&#xe070;',
            'icon-sec-485APOS' : '&#xe071;',
            'icon-sec-424B8' : '&#xe072;',
            'icon-sec-424B7' : '&#xe073;',
            'icon-sec-424B5' : '&#xe074;',
            'icon-sec-424B4' : '&#xe075;',
            'icon-sec-424B3' : '&#xe076;',
            'icon-sec-424B2' : '&#xe077;',
            'icon-sec-424B1' : '&#xe078;',
            'icon-sec-424A' : '&#xe079;',
            'icon-sec-144' : '&#xe07a;',
            'icon-sec-40F' : '&#xe07b;',
            'icon-sec-40APP' : '&#xe07c;',
            'icon-sec-25' : '&#xe07d;',
            'icon-sec-20F' : '&#xe07e;',
            'icon-sec-18K' : '&#xe07f;',
            'icon-sec-15F15D' : '&#xe080;',
            'icon-sec-15F12G' : '&#xe081;',
            'icon-sec-15F12B' : '&#xe082;',
            'icon-sec-11KT' : '&#xe083;',
            'icon-sec-11K' : '&#xe084;',
            'icon-sec-10QT' : '&#xe085;',
            'icon-sec-10Q' : '&#xe086;',
            'icon-sec-10KT' : '&#xe087;',
            'icon-sec-10K' : '&#xe088;',
            'icon-sec-10D' : '&#xe089;',
            'icon-sec-8K' : '&#xe08a;',
            'icon-sec-8A12G' : '&#xe08b;',
            'icon-sec-8A12B' : '&#xe08c;',
            'icon-sec-6K' : '&#xe08d;'
          }
        
      // END ICON SET PASTE FROM ICOMOON


      // Basic Icon Documentation Functionality Enhancements
      //----------------------------------------------

        // find all glyph inputs - no matter which set they are a part of
        $glyphInputs = $(".wdesk-docs-icomoon-glyphs").find("input");
        $glyphInputs.click(function(e){
          $(this).select();
        });

      // END Basic Icon ...

      //----------------------------------------------
      // Use the ObjectLiterals provided by IcoMoon 
      // to extract classnames / PUA values for our
      // icon example documentation
      // housed within static/_includes/wdesk-icons.html / wdesk-sec-icons.html
      //----------------------------------------------

        var iconExampleDOMupdate = function(classname, pua, $glyphSet) {

          var puaValue = pua[classname];
          // find puaValue in the value attribute of the input
          var $glyphInputMatch = $glyphSet.find("input[value='" + puaValue + "']");
          $glyphInputMatch.before("<label>PUA: </label>");
          $glyphInputMatch.parent().append("<small class='classname'><code>." + classname + "</code></small>");

        }; // END iconExampleDOMupdate()


        // add classname info for each icon set

        // MAIN SET
        $mainGlyphSet = $(".wdesk-docs-icomoon-glyphs #main");
        // don't parse this entire list unless its there :)
        if($mainGlyphSet.length > 0) {
          for (var mainClassname in mainPua) {
            iconExampleDOMupdate(mainClassname, mainPua, $mainGlyphSet);
          }
        }

        // SEC DOCTYPE SET
        $secGlyphSet = $(".wdesk-docs-icomoon-glyphs #sec");
        // don't parse this entire list unless its there :)
        if($secGlyphSet.length > 0) {
          for (var secClassname in secPua) {
            iconExampleDOMupdate(secClassname, secPua, $secGlyphSet);
          }
        }
    
    // END ICOMOON DOM HELPERS
    // ---------------------------------------------------------------------------


    
  })

}(window.jQuery);

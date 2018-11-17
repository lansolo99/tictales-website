$(document).ready(function () {
  /*******************************
               Setup
  *******************************/

  // Vars
  var docWidth
  var docHeight
  var currentScreen

  // /*******************************
  //           Enquire.js
  // *******************************/

  // enquire.register("screen and (max-width: 767px)", {match : function() {
  //   currentScreen = 'mobile';
  //   checkSizeBrowser();
  // }});
  // enquire.register("screen and (min-width: 768px) and (max-width: 991px)", {match : function() {
  //   currentScreen = 'tablet';
  //   checkSizeBrowser();
  // }});
  // enquire.register("screen and (min-width: 992px) and (max-width: 1199px)", {match : function() {
  //   currentScreen = 'small-monitor';
  //   checkSizeBrowser();
  // }});
  // enquire.register("screen and (min-width: 1200px)", {match : function() {
  //   currentScreen = 'large-monitor';
  //   checkSizeBrowser();
  // }});
  // enquire.register("screen and (min-width: 1920px)", {match : function() {
  //   currentScreen = 'widescreen';
  //   checkSizeBrowser();
  // }});

  /*******************************
          CheckSizeBrowser
  *******************************/

  checkSizeBrowser()
  $(window).resize(checkSizeBrowser)

  function checkSizeBrowser () {
    docWidth = jQuery(window).width()
    docHeight = jQuery(document).height()
    console.log('test !')
  }

  /*******************************
          Page piling
  *******************************/

  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['page1', 'page2', 'page3', 'page4'],
    scrollingSpeed: 2000,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['Intro', 'Our games', 'Manifesto', 'About us']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    // events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {}
  })

  /*******************************
           Owl caroussel
  *******************************/

  // Game slider

  var owl = $('.owl-carousel')
  owl.owlCarousel({
    margin: 15,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // Shape to sections mapping
  let shapesClasses = ['icon-exp1', 'icon-exp2', 'icon-exp3', 'icon-exp4', 'icon-exp5', 'icon-exp6', 'icon-exp7']
  let allSpanInBullet = document.querySelectorAll('#pp-nav li a span.icon')
  for (let index = 0; index < allSpanInBullet.length; index++) {
    allSpanInBullet[index].classList.add(shapesClasses[index])
  }
}) // End document Ready

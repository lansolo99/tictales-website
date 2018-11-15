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

  let ssdfdsf = 'dfgdf'
  checkSizeBrowser()
  $(window).resize(checkSizeBrowser)

  function checkSizeBrowser () {
    docWidth = jQuery(window).width()
    docHeight = jQuery(document).height()
    console.log('test !')
  }
}) // End document Ready

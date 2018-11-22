$(document).ready(function () {
  /*******************************
               Setup
  *******************************/

  // General vars
  let docWidth
  let docHeight
  let currentScreen

  // Containers refs vars
  let containerMainIntro = document.querySelector(
    '.section-intro .ui.container.container-main'
  )
  let containerOurGames = document.querySelector(
    '.section-ourgames .ui.container.container-main'
  )
  let containerManifesto = document.querySelector(
    '.section-manifesto .ui.container.container-main'
  )
  let containerAboutUs = document.querySelector(
    '.section-about-us .ui.container.container-main'
  )
  let containerOurValues = document.querySelector(
    '.section-our-values .ui.container.container-main'
  )
  let containerJoinUs = document.querySelector(
    '.section-join-us .ui.container.container-main'
  )
  let containerContact = document.querySelector(
    '.section-contact-us .ui.container.container-main'
  )

  let mainContentBaseMargins = 240

  // Main-content height vars
  let contentHeightIntro
  let contentHeightOurGames
  let contentHeightManifesto
  let contentHeightAboutUs
  let contentHeightOurValues
  let contentHeightJoinUs
  let contentHeightContact

  /*******************************
            Enquire.js
  *******************************/

  enquire.register('screen and (max-width: 767px)', {
    match: function () {
      currentScreen = 'mobile'
      checkSizeBrowser()
    }
  })
  enquire.register('screen and (min-width: 768px) and (max-width: 991px)', {
    match: function () {
      currentScreen = 'tablet'
      checkSizeBrowser()
    }
  })
  enquire.register('screen and (min-width: 992px) and (max-width: 1199px)', {
    match: function () {
      currentScreen = 'small-monitor'
      checkSizeBrowser()
    }
  })
  enquire.register('screen and (min-width: 1200px)', {
    match: function () {
      currentScreen = 'large-monitor'
      checkSizeBrowser()
    }
  })
  enquire.register('screen and (min-width: 1920px)', {
    match: function () {
      currentScreen = 'widescreen'
      checkSizeBrowser()
    }
  })

  /*******************************
          CheckSizeBrowser
  *******************************/

  checkSizeBrowser()
  $(window).resize(checkSizeBrowser)

  function checkSizeBrowser () {
    docWidth = jQuery(window).width()
    docHeight = jQuery(document).height()
    document.querySelector('.screen-res-indicator').innerHTML = docWidth
    // Main-content Heights update
    contentHeightIntro = document.querySelector(
      '.section-intro .main-content').clientHeight + mainContentBaseMargins
    contentHeightOurGames = document.querySelector(
      '.section-ourgames .main-content').clientHeight + mainContentBaseMargins
    contentHeightManifesto = document.querySelector(
      '.section-manifesto .main-content').clientHeight + mainContentBaseMargins
    contentHeightAboutUs = document.querySelector(
      '.section-about-us .main-content').clientHeight + mainContentBaseMargins
    contentHeightOurValues = document.querySelector(
      '.section-our-values .main-content').clientHeight
    contentHeightJoinUs = document.querySelector(
      '.section-our-values .main-content').clientHeight + mainContentBaseMargins
    contentHeightContact = document.querySelector(
      '.section-contact-us .main-content').clientHeight + mainContentBaseMargins

    // Set main-container min-heights (depending on main-content's height)
    containerMainIntro.style.minHeight = contentHeightIntro + 'px'
    containerOurGames.style.minHeight = contentHeightOurGames + 'px'
    containerManifesto.style.minHeight = contentHeightManifesto + 'px'
    containerAboutUs.style.minHeight = contentHeightAboutUs + 'px'
    containerOurValues.style.minHeight = contentHeightOurValues + 'px'
    containerJoinUs.style.minHeight = contentHeightJoinUs + 'px'
    containerContact.style.minHeight = contentHeightContact + 'px'
  }

  checkSizeBrowser()

  setTimeout(checkSizeBrowser, 5)

  /*******************************
          Page piling
  *******************************/

  $('#pagepiling').pagepiling({
    anchors: ['intro', 'ourgames', 'manifesto', 'aboutus', 'ourvalues', 'joinus', 'contactus'],
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    scrollingSpeed: 200,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: '#000',
      bulletsColor: '#000',
      position: 'right',
      tooltips: ['Intro', 'Our games', 'Manifesto', 'About us', 'Our values', 'Join us', 'Contact us']
    },
    normalScrollElements: '.tt-carousel-games',
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 10,
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
    stagePadding: 40,
    responsive: {
      320: {
        items: 1,
        nav: false,
        dots: false
      },
      600: {
        items: 2,
        nav: false,
        dots: false
      },
      769: { // From 769 to sup
        items: 2,
        nav: false,
        dots: false
      },
      992: { // From 992 to sup
        items: 3,
        nav: false,
        dots: false
      },
      1300: { // From 1300 to sup
        items: 4,
        dots: true,
        nav: true
      }
    }
  })

  // Shape to sections mapping
  let shapesClasses = [
    'icon-exp1',
    'icon-exp2',
    'icon-exp3',
    'icon-exp4',
    'icon-exp5',
    'icon-exp6',
    'icon-exp7'
  ]
  let allSpanInBullet = document.querySelectorAll('#pp-nav li a span.icon')
  for (let index = 0; index < allSpanInBullet.length; index++) {
    allSpanInBullet[index].classList.add(shapesClasses[index])
  }
}) // End document Ready

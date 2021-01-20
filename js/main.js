/**
 * Define urls to use in js
 */

const baseUrl = window.location.origin + '/';
const urlArr = window.location.pathname.split('/');

// ------------------------------------------------------------------------------------------------

/**
 * Check if user is using IE
 * IF so load a full screen overlay to tell them to use a modern browser
 */

if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) $("body").load(baseUrl + "view/parts/errors/unsupported.phtml");

// ------------------------------------------------------------------------------------------------

/**
 * Load particles
 */

if ($("#particles-js").length) particlesJS.load('particles-js', baseUrl + 'particles.json');

// ------------------------------------------------------------------------------------------------

/**
 * An JQuery script I wrote to enable the 'show password' eye that lots of sites have in their forms.
 * To add your own just make sure that your password field is of type password and you have something
 * on your page to click on with the class '.toggle-password'. And thats all!
 */

// $(document).on('click', '.toggle-password', function () {
//   $(this).toggleClass("fa-eye fa-eye-slash");
//   const passwordInput = $(":text, :password")
//   passwordInput.attr('type') === 'password' ? passwordInput.attr('type', 'text') : passwordInput.attr('type', 'password');
// });

// ------------------------------------------------------------------------------------------------

/**
 * A piece of Javascript to get the value of a range slider and print it.
 */

// if (document.getElementById("slider") !== null) {
//   const sliderInput = document.getElementById("slider");
//   const sliderOutput = document.getElementById("output");
//   sliderOutput.innerHTML = sliderInput.value;
//   sliderInput.oninput = function () {
//     sliderOutput.innerHTML = this.value;
//   };
// }

// ------------------------------------------------------------------------------------------------

/**
 * Code for a loading icon, it will show as long as the page is loading
 * And or for a minimum amount of time set with the timeout
 */

$(document).on('readystatechange', function () {
  if (document.getElementById("load") !== null) {
    $("html, body").css("overflow", "hidden");
    const state = document.readyState;
    if (state === "interactive") {
      document.getElementById("content").style.visibility = "hidden";
    } else if (state === "complete") {
      setTimeout(function () {
        $("html, body").css("overflow", "visible");
        document.getElementById("interactive");
        document.getElementById("load").style.opacity = "0";
        setTimeout(function () {
          document.getElementById("load").style.visibility = "hidden"
        }, 250);
        document.getElementById("content").style.visibility = "visible";
      }, 1000);
    }
  }
});

// ------------------------------------------------------------------------------------------------

/**
 * Code for a darkmode switch, uses a checkbox with label icons
 */

// const darkSwitch = document.getElementById("switch");
// if (darkSwitch) {
//   initTheme();
//
//   darkSwitch.addEventListener("change", function (event) {
//     resetTheme();
//   });
//
//   if (localStorage.getItem("switch") === "dark") $("#toggle-icon").toggleClass("fa-sun");
//   else $("#toggle-icon").toggleClass("fa-moon");
//
//   function initTheme() {
//     const darkThemeSelected =
//       localStorage.getItem("switch") !== null &&
//       localStorage.getItem("switch") === "dark";
//     darkSwitch.checked = darkThemeSelected;
//     darkThemeSelected
//       ? document.body.setAttribute("data-theme", "dark")
//       : document.body.removeAttribute("data-theme");
//   }
//
//   function resetTheme() {
//     if (darkSwitch.checked) {
//       $("#toggle-icon").toggleClass("fa-sun");
//       document.body.setAttribute("data-theme", "dark");
//       localStorage.setItem("switch", "dark");
//     } else {
//       $("#toggle-icon").toggleClass("fa-moon");
//       document.body.removeAttribute("data-theme");
//       localStorage.removeItem("switch");
//     }
//   }
// }

// ------------------------------------------------------------------------------------------------

/**
 * Smooth scroll button
 */

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      event.preventDefault();
      $("html, body").animate({scrollTop: target.offset().top}, 500);
    }
  }
});

// ------------------------------------------------------------------------------------------------

/**
 * Collapse menu
 */

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("extended");
  hamburger.classList.toggle("is-active");
});

// ------------------------------------------------------------------------------------------------

/**
 * Language switch
 */

$(document).on('click', '.lang-btn', function () {
  $(this).children().toggleClass("selected");
});

// ------------------------------------------------------------------------------------------------

/**
 * Text scramble effect
 */

const Messenger = function (el) {
  'use strict';
  const m = this;

  m.init = function () {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = ['Loading...'];
    setTimeout(m.animateIn, 100);
  }

  m.generateRandomString = function (length) {
    let random_text = '';
    while (random_text.length < length) random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    return random_text;
  }

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) m.current_length = m.messages[m.message].length;
      const message = m.generateRandomString(m.current_length);
      $(el).html(message);
      setTimeout(m.animateIn, 20);
    } else setTimeout(m.animateFadeBuffer, 20);
  }

  m.animateFadeBuffer = function () {
    let i;
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (i = 0; i < m.messages[m.message].length; i++) m.fadeBuffer.push({c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i)});
    }
    let do_cycles = false;
    let message = '';
    for (i = 0; i < m.fadeBuffer.length; i++) {
      const fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else message += fader.l;
    }
    $(el).html(message);
    if (do_cycles === true) setTimeout(m.animateFadeBuffer, 50);
    else setTimeout(m.cycleText, 1000);
  }

  m.cycleText = function () {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    setTimeout(m.animateIn, 200);
  }

  m.init();
}

console.clear();
const messenger = new Messenger($('#messenger'));
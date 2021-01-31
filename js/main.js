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
        $("html, body").css("overflow-y", "visible");
        document.getElementById("interactive");
        document.getElementById("load").style.opacity = "0";
        setTimeout(function () {
          document.getElementById("load").style.visibility = "hidden"
        }, 250);
        document.getElementById("content").style.visibility = "visible";
      }, 1250);
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
  const nl = $(".btn-nl");
  const en = $(".btn-en");
  if ($(this).hasClass("btn-nl") && !(nl.hasClass("selected"))) {
    nl.toggleClass("selected");
    en.toggleClass("selected");
    $("html").attr("lang", "nl");
  } else if ($(this).hasClass("btn-en") && !(en.hasClass("selected"))) {
    en.toggleClass("selected");
    nl.toggleClass("selected");
    $("html").attr("lang", "en");
  }
});

// ------------------------------------------------------------------------------------------------

/**
 * Wave text animation
 */

if (document.querySelector(".text-wave") !== null) {
  const text = document.querySelector('.text-wave').innerHTML;
  document.querySelector('.text-wave').innerHTML = "";
  text.split('').forEach(function (e) {
    e = e === " " ? "&nbsp;" : e;
    const span = document.createElement('span');
    span.innerHTML = e;
    document.querySelector('.text-wave').appendChild(span);
  });
}

// ------------------------------------------------------------------------------------------------

/**
 * Typewriter effect
 */

function setupTypewriter(t) {
  const HTML = t.innerHTML;
  t.innerHTML = "";
  let cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;
  const type = function () {
    if (writingTag === true) tag += HTML[cursorPosition];
    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) tag.innerHTML += HTML[cursorPosition];
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") tempTypeSpeed = 0;
      else tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      writingTag = false;
      if (tagOpen) {
        const newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }
    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) setTimeout(type, tempTypeSpeed);
  }
  return {
    type: type
  }
}

if (document.getElementById("typewriter") !== null) {
  typewriter = setupTypewriter(typewriter);
  setTimeout(function () {
    typewriter.type();
  }, 1500);
}
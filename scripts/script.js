// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

/* mobile menu */

/*timeline

const revealr = {
  els: {
    button: null
  },

  revealTimeline(e) {
    e.preventDefault();
    let button = e.target;
    let container = button.parentElement;
    let wrapper = container.querySelector(".wrapper");
    let fader = container.querySelector(".timeline-fader");
    let list = container.querySelector(".timeline");
    if (list.classList.contains("revealed")) {
      fader.style.opacity = 1;
      list.classList.remove("revealed");
      wrapper.style.maxHeight = "300px";
      button.innerHTML = "View Full Timeline";
    } else {
      fader.style.opacity = 0;
      list.classList.add("revealed");
      wrapper.style.maxHeight = list.offsetHeight + "px";
      button.innerHTML = "Collapse Timeline";
    }
  },
  init(target) {
    let buttons = document.querySelectorAll(target);
    for (let button of buttons) {
      button.addEventListener("click", this.revealTimeline, false);
    }
  }
};

revealr.init(".timeline-reveal");
*/

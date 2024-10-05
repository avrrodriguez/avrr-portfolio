export default function ScrollViewportChecker() {

  let win = document.getElementById("about-me-container");
  let elemInViewPort = win?.getBoundingClientRect();

  if (elemInViewPort) {
      return (
        elemInViewPort.top + 128 <= (window.innerHeight || document.documentElement.clientHeight) &&
        elemInViewPort.left >= 0 &&
        elemInViewPort.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
};

// full element in view port check
// elemInViewPort.top >= 0 &&
// elemInViewPort.left >= 0 &&
// elemInViewPort.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
// elemInViewPort.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
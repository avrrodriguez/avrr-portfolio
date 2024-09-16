export default function ScrollViewportChecker() {


  let win = document.getElementById("about-me-container");
  let elemInViewPort = win?.getBoundingClientRect();
  console.log(elemInViewPort);

  if (elemInViewPort) {
      return (
        elemInViewPort.top >= 0 &&
        elemInViewPort.left >= 0 &&
        elemInViewPort.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        elemInViewPort.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  } else {
    return false;
  }
};

export default function ScrollViewportChecker(elemClassName: string) {

  let win: HTMLElement | null = document.getElementById(elemClassName);
  let elemInViewPort: DOMRect | undefined = win?.getBoundingClientRect();

  if (elemInViewPort) {
      return (
        elemInViewPort.top + 128 <= (window.innerHeight || document.documentElement.clientHeight) &&
        elemInViewPort.left >= 0 &&
        elemInViewPort.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
};
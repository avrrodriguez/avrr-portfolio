export default function ScrollViewportChecker(elemClassName: string) {

  const win: HTMLElement | null = document.getElementById(elemClassName);
  const elemInViewPort: DOMRect | undefined = win?.getBoundingClientRect();

  if (elemInViewPort) {
      return (
        elemInViewPort.top + 128 <= (window.innerHeight || document.documentElement.clientHeight) &&
        elemInViewPort.left >= 0 &&
        elemInViewPort.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};
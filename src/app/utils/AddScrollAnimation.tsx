import ScrollViewportChecker from "../utils/ScrollViewportChecker";

export default function ScrollAnimation(elemId: string) {
  const elemInViewPort: boolean | undefined = ScrollViewportChecker(elemId);
  const inViewElem: null | Element = document.getElementById(elemId);

  if (elemInViewPort && inViewElem) {
    inViewElem.classList.add("border-scrolling-effect")
  }
}
import ScrollViewportChecker from "../utils/ScrollViewportChecker";

export default function ScrollAnimation(elemId: string) {
  let elemInViewPort: boolean | undefined = ScrollViewportChecker(elemId);
  let inViewElem: null | Element = document.getElementById(elemId);

  if (elemInViewPort && inViewElem) {
    inViewElem.classList.add("border-scrolling-effect")
  }
}
// src/hooks/useScrollToTopOnClick.ts
import { useEffect } from "react";

export function useScrollToTopOnClick() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      let target = e.target as HTMLElement | null;
      // Traverse up to find button or anchor
      while (target && target !== document.body) {
        if (
          target.tagName === "BUTTON" ||
          (target.tagName === "A" &&
            (target as HTMLAnchorElement).href &&
            ((target as HTMLAnchorElement).getAttribute("href")?.startsWith("/") ||
              (target as HTMLAnchorElement).getAttribute("href")?.startsWith("#")))
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        }
        target = target.parentElement;
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
}

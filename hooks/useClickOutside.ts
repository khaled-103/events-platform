import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const elementRef = useRef<T>(null);
  // Attach the event listener once with a stable handler that reads the latest
  // callback from `callbackRef`. This avoids re-attaching on every render.
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);
  return elementRef;
}
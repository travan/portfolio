"use client";

import { useEffect, useRef, useState } from "react";

const OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -80px 0px",
  threshold: 0.1,
};

export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, OPTIONS);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

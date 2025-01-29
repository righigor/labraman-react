import { useState, useEffect } from "react";

interface IUseAnimationScroll {
  selector: string;
  threshold: number;
}

const useAnimationScroll = ({
  selector,
  threshold = 0.3,
}: IUseAnimationScroll) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element with selector "${selector}" not found.`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [selector, threshold]);

  return isVisible;
};

export default useAnimationScroll;

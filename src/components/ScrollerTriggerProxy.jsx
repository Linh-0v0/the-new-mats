/*************************************************************** 
*Title: none
*Author: Gsap Library
*Date: Nov 2022 
* Code version: none 
*Availability: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy() (Nov 2022) 
****************************************************************/ 
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll/module/useLocomotiveScroll.hook";
import gsap from "gsap";

const ScrollerTriggerProxy = () => {
  // Get the locomotive scroll instance
  const { scroll } = useLocomotiveScroll();

  // Register the scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      // locomotive scrolling element, in this case it's app
      const element = scroll?.el;
      
      // on scroll of locomotive, update ScrollTrigger
      scroll.on("scroll", ScrollTrigger.update);
      // scroll.on("scroll");

      // use scrollerProxy?
      // tell ScrollTrigger to use these proxy methods for the "element" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform
          ? "transform"
          : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())
      ScrollTrigger.refresh();
    }
  }, [scroll]);

  return null;
};

export default ScrollerTriggerProxy;

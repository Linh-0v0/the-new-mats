import React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollerTriggerProxy from "../components/ScrollerTriggerProxy";

const LocoScroll = ({ children, refName }) => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
        // ... all available Locomotive Scroll instance options,
        mobile: {
          breakpoint: 0,
          smooth: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={refName}
    >
      <ScrollerTriggerProxy />
     {children}
    </LocomotiveScrollProvider>
  );
};

export default LocoScroll;

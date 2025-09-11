/* eslint-disable readable-tailwind/multiline */
"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectLogoProps } from "./ProjectLogo.types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectLogo = (props: ProjectLogoProps) => {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const navbarGradientRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // State
  const [hasVideo] = useState<boolean>(!!props.backgroundVideo);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Methods
  const adjustRGBColor = (inputColor: string): string => {
    const rgbRegex =
      /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(0|1|0?\.\d+))?\)$/;
    const match = inputColor.match(rgbRegex);
    if (!match) {
      throw new Error("Invalid input." + props.mainColor);
    }

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    const adjustValue = (value: number, adjustment: number): number => {
      return Math.max(0, Math.min(255, value + adjustment));
    };

    const newR = adjustValue(r, 7);
    const newG = adjustValue(g, -23);
    const newB = adjustValue(b, -18);

    return `rgb(${newR}, ${newG}, ${newB})`;
  };

  // Helper function to convert RGB to RGBA
  const rgbToRgba = (color: string, opacity: number): string => {
    const rgbRegex = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/;
    const match = color.match(rgbRegex);
    if (!match) return `rgba(0, 0, 0, ${opacity})`;
    
    const r = match[1];
    const g = match[2];
    const b = match[3];
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Effects for scroll animations
  useEffect(() => {
    if (!hasVideo) return;

    const section = sectionRef.current;
    const gradient = gradientRef.current;
    const navbarGradient = navbarGradientRef.current;
    const content = contentRef.current;
    const video = videoRef.current;

    if (!section || !gradient || !content) return;

    // Set initial state for video sections
    gsap.set(section, {
      height: "100vh",
      minHeight: "600px",
      maxHeight: "100vh"
    });

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500",
        scrub: 1.5,
        invalidateOnRefresh: true,
      }
    });

    // Animate section height
    tl.to(section, {
      height: "688px",
      minHeight: "unset",
      ease: "power2.inOut",
      duration: 1
    }, 0);

    // Animate gradient opacity (starts subtle, becomes more opaque)
    tl.fromTo(gradient, {
      opacity: 0.3 // Start with very subtle gradient
    }, {
      opacity: 0.85, // End with more opaque gradient
      ease: "power2.in",
      duration: 1
    }, 0);

    // Subtle parallax effect on video
    if (video) {
      tl.to(video, {
        y: 50,
        ease: "none",
        duration: 1
      }, 0);
    }

    // Scale effect on content
    tl.fromTo(content, {
      scale: 1
    }, {
      scale: 0.95,
      ease: "power2.inOut",
      duration: 1
    }, 0);

    // Navbar gradient (starts opaque, fades as user scrolls)
    if (navbarGradient) {
      tl.fromTo(navbarGradient, {
        opacity: 1 // Start fully visible
      }, {
        opacity: 0.3, // Fade significantly as user scrolls
        ease: "power2.out",
        duration: 1
      }, 0);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [hasVideo]);

  // Effect for hover animation
  useEffect(() => {
    if (!hasVideo || !gradientRef.current) return;
    
    gsap.to(gradientRef.current, {
      opacity: isHovering ? 0.3 : 0.7,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, [isHovering, hasVideo]);

  return (
    <section
      ref={sectionRef}
      className={`
        project-logo-section
        cs-section-structure
        tw-relative
        tw-flex
        tw-max-w-full
        tw-flex-col
        tw-items-center
        tw-justify-center
        tw-gap-[10px]
        tw-overflow-hidden
        ${!hasVideo ? `
          tw-h-[688px]
          !tw-min-h-[unset]
          
          lg:tw-h-[597px]
          lg:tw-min-h-0
        ` : ''}
      `}
      style={!hasVideo ? {
        background: `linear-gradient(180deg, #000000 10%, rgba(102, 102, 102, 0) 50%), linear-gradient(180deg, ${
          props.mainColor
        } 42.6%, ${adjustRGBColor(props.mainColor)} 100%)`,
      } : undefined}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video Background Layer */}
      {hasVideo && props.backgroundVideo && (
        <div className="tw-absolute tw-inset-0 tw-z-0">
          <video
            ref={videoRef}
            className={`
              tw-h-full tw-w-full tw-object-cover
              ${videoLoaded ? 'tw-opacity-100' : 'tw-opacity-0'}
              tw-transition-opacity tw-duration-1000
            `}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={props.backgroundVideo} type="video/mp4" />
            <source src={props.backgroundVideo} type="video/webm" />
          </video>
          
          {/* Fallback gradient while video loads */}
          <div 
            className={`
              tw-absolute tw-inset-0
              ${videoLoaded ? 'tw-opacity-0' : 'tw-opacity-100'}
              tw-transition-opacity tw-duration-1000
            `}
            style={{
              background: `linear-gradient(180deg, #000000 10%, rgba(102, 102, 102, 0) 50%), linear-gradient(180deg, ${
                props.mainColor
              } 42.6%, ${adjustRGBColor(props.mainColor)} 100%)`,
            }}
          />
        </div>
      )}

      {/* Gradient Overlay Layer */}
      {hasVideo && (
        <div 
          ref={gradientRef}
          className="tw-pointer-events-none tw-absolute tw-inset-0 tw-z-10"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.2) 0%, 
                rgba(0, 0, 0, 0.05) 30%, 
                rgba(0, 0, 0, 0) 50%, 
                rgba(0, 0, 0, 0.1) 70%, 
                rgba(0, 0, 0, 0.3) 100%
              ),
              linear-gradient(to bottom, 
                ${rgbToRgba(props.mainColor, 0)} 0%,
                ${rgbToRgba(props.mainColor, 0.1)} 20%,
                ${rgbToRgba(props.mainColor, 0.3)} 50%,
                ${rgbToRgba(props.mainColor, 0.6)} 75%,
                ${rgbToRgba(props.mainColor, 0.85)} 100%
              )
            `,
          }}
        />
      )}

      {/* Navbar Background Gradient */}
      {hasVideo && (
        <div 
          ref={navbarGradientRef}
          className="tw-pointer-events-none tw-absolute tw-inset-x-0 tw-top-0 tw-z-30 tw-h-20"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.95) 0%, 
                rgba(0, 0, 0, 0.6) 60%,
                rgba(0, 0, 0, 0) 100%
              )
            `,
          }}
        />
      )}

      {/* Content Layer (Logo and Title) */}
      <div 
        ref={contentRef}
        className="tw-relative tw-z-20 tw-flex tw-flex-col tw-items-center tw-gap-[10px]"
      >
        <img
          className={`
            ${hasVideo ? `
              tw-w-[80px]
              
              md:tw-w-[110px]
            ` : `
              tw-w-[68px]
              
              md:tw-w-[93px]
            `}
            ${hasVideo ? 'tw-drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]' : ''}
          `}
          src={props.favicon}
          alt={`${props.title} logo`}
        />
        <h1 
          className={`
            ${hasVideo ? `
              tw-text-white
              tw-drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
            ` : ''}
            ${hasVideo ? `
              tw-text-4xl
              
              md:tw-text-5xl
            ` : ''}
          `}
          style={hasVideo ? {
            textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)'
          } : undefined}
        >
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default ProjectLogo;
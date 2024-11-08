import React, { useRef, useState, useEffect } from "react";
import { CustomScrollbarProps } from "./CustomScrollbar.types";

const CustomScrollbar = (props: CustomScrollbarProps) => {
  // States
  const [verticalThumbHeight, setVerticalThumbHeight] = useState<number>(0);
  const [horizontalThumbWidth, setHorizontalThumbWidth] = useState<number>(0);
  const [verticalThumbTop, setVerticalThumbTop] = useState<number>(0);
  const [horizontalThumbLeft, setHorizontalThumbLeft] = useState<number>(0);

  //Hooks

  // Refs to track content and scrollbar elements
  const contentRef = useRef<HTMLDivElement>(null);
  const verticalScrollbarRef = useRef<HTMLDivElement>(null);
  const horizontalScrollbarRef = useRef<HTMLDivElement>(null);

  // Refs to manage drag state and starting offset
  const isDragging = useRef({ vertical: false, horizontal: false });
  const startDragOffset = useRef({ vertical: 0, horizontal: 0 });

  //Effects

  // Effect to update thumb sizes on load, scroll, or resize
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    updateThumbSizes();
    content.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateThumbSizes);

    // Cleanup listeners on unmount
    return () => {
      content.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateThumbSizes);
    };
  }, [contentRef.current]);

  useEffect(() => {
    setTimeout(() => {
      updateThumbSizes();
    }, 200);
  }, []);

  //Methods

  // Calculate thumb sizes as a percentage of the scrollbar
  const updateThumbSizes = () => {
    const content = contentRef.current;

    setVerticalThumbHeight(
      (content!.clientHeight / content!.scrollHeight) * 100
    );
    setHorizontalThumbWidth(
      (content!.clientWidth / content!.scrollWidth) * 100
    );
  };

  // Scroll event handler to update thumb position based on scroll amount
  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    setVerticalThumbTop((content.scrollTop / content.scrollHeight) * 100);
    setHorizontalThumbLeft((content.scrollLeft / content.scrollWidth) * 100);

    props.onScroll?.(
      (content.scrollLeft / content.scrollWidth) * 100,
      (content.scrollTop / content.scrollHeight) * 100
    );
  };

  // Initiates vertical drag and calculates initial offset
  const startVerticalDrag = (e: React.MouseEvent) => {
    isDragging.current.vertical = true;
    const thumbTop =
      (verticalThumbTop / 100) * verticalScrollbarRef.current!.clientHeight;
    startDragOffset.current.vertical = e.clientY - thumbTop;
    document.addEventListener("mousemove", handleVerticalDrag);
    document.addEventListener("mouseup", stopVerticalDrag);
  };

  // Handles vertical dragging by updating content scroll position
  const handleVerticalDrag = (e: MouseEvent) => {
    if (
      !isDragging.current.vertical ||
      !contentRef.current ||
      !verticalScrollbarRef.current
    )
      return;

    const newTop = e.clientY - startDragOffset.current.vertical;
    const scrollTopRatio = newTop / verticalScrollbarRef.current.clientHeight;
    contentRef.current.scrollTop =
      scrollTopRatio * contentRef.current.scrollHeight;
  };

  // Ends vertical drag and removes event listeners
  const stopVerticalDrag = () => {
    isDragging.current.vertical = false;
    document.removeEventListener("mousemove", handleVerticalDrag);
    document.removeEventListener("mouseup", stopVerticalDrag);
  };

  // Initiates horizontal drag and calculates initial offset
  const startHorizontalDrag = (e: React.MouseEvent) => {
    isDragging.current.horizontal = true;
    const thumbLeft =
      (horizontalThumbLeft / 100) * horizontalScrollbarRef.current!.clientWidth;
    startDragOffset.current.horizontal = e.clientX - thumbLeft;
    document.addEventListener("mousemove", handleHorizontalDrag);
    document.addEventListener("mouseup", stopHorizontalDrag);
  };

  // Handles horizontal dragging by updating content scroll position
  const handleHorizontalDrag = (e: MouseEvent) => {
    if (
      !isDragging.current.horizontal ||
      !contentRef.current ||
      !horizontalScrollbarRef.current
    )
      return;

    const newLeft = e.clientX - startDragOffset.current.horizontal;
    const scrollLeftRatio =
      newLeft / horizontalScrollbarRef.current.clientWidth;
    contentRef.current.scrollLeft =
      scrollLeftRatio * contentRef.current.scrollWidth;
  };

  // Ends horizontal drag and removes event listeners
  const stopHorizontalDrag = () => {
    isDragging.current.horizontal = false;
    document.removeEventListener("mousemove", handleHorizontalDrag);
    document.removeEventListener("mouseup", stopHorizontalDrag);
  };

  return (
    <div
      className={`custom-scrollbar tw-relative tw-flex tw-size-full tw-flex-col`}
    >
      {/* Content container with overflow auto to enable custom scrolling */}
      <div
        className={`custom-scrollbar-content tw-flex-1 tw-overflow-auto`}
        ref={contentRef}
      >
        {props.children}
      </div>
      {/* Vertical scrollbar */}
      {verticalThumbHeight < 100 && (
        <div
          className={`
            tw-absolute tw-left-full tw-top-0 tw-h-full tw-w-[22px]
            tw-cursor-pointer tw-rounded-xl tw-bg-tertiary
          `}
          ref={verticalScrollbarRef}
          onMouseDown={startVerticalDrag}
        >
          <div
            className={`
              tw-absolute tw-left-0 tw-w-full tw-rounded-xl tw-bg-action
            `}
            style={{
              height: `${verticalThumbHeight}%`,
              top: `${verticalThumbTop}%`,
            }}
          />
        </div>
      )}
      {/* Horizontal scrollbar */}
      {horizontalThumbWidth < 100 && (
        <div
          className={`
            tw-absolute tw-left-0 tw-top-full tw-h-[22px] tw-w-full
            tw-cursor-pointer tw-rounded-xl tw-bg-tertiary
          `}
          ref={horizontalScrollbarRef}
          onMouseDown={startHorizontalDrag}
        >
          <div
            className="tw-absolute tw-top-0 tw-h-full tw-rounded-xl tw-bg-action"
            style={{
              width: `${horizontalThumbWidth}%`,
              left: `${horizontalThumbLeft}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomScrollbar;

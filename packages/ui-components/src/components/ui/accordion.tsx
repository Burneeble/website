/* eslint-disable react/prop-types */
/* eslint-disable @burneeble/burneeble/camel-case-vars */
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("tw-border-b tw-border-white/20", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";
interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  icon?: string | IconDefinition;
}
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, ...props }, ref) => (
  <AccordionPrimitive.Header className="tw-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        `
          tw-group tw-flex tw-flex-1 tw-shrink tw-grow tw-basis-0
          tw-items-center tw-justify-between tw-font-inter tw-text-3xl
          tw-font-black tw-leading-10 tw-text-body tw-transition-all

          [&[data-state=open]>svg]:tw-rotate-180
        `,
        className
      )}
      {...props}
    >
      <div
        className={`
          tw-group page-with-icon tw-inline-flex tw-cursor-pointer
          tw-items-center tw-justify-start tw-gap-2.5 tw-self-stretch
          tw-font-inter tw-text-3xl tw-font-black tw-leading-10

          group-hover:tw-text-white
        `}
      >
        {icon &&
          (typeof icon === "string" ? (
            <img className={`tw-h-5 tw-w-5`} src={icon} />
          ) : (
            <FontAwesomeIcon
              className={`
                tw-h-5 tw-w-5 tw-text-body

                group-hover:tw-text-white
              `}
              icon={icon}
            />
          ))}
        {children}
      </div>
      <ChevronDownIcon
        className={`
          tw-h-4 tw-w-4 tw-shrink-0 tw-text-muted-foreground
          tw-transition-transform tw-duration-200
        `}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`
      tw-group tw-overflow-hiddentw-text-body

      data-[state=closed]:tw-animate-accordion-up

      data-[state=open]:tw-animate-accordion-down
    `}
    {...props}
  >
    <div
      className={cn(
        `
          tw-shrink tw-grow tw-basis-0 tw-pb-2 tw-pt-0 page-name tw-font-inter
          tw-text-2xl tw-font-black tw-leading-10 tw-text-body

          first:tw-pt-4

          group-hover:tw-text-white
        `,
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

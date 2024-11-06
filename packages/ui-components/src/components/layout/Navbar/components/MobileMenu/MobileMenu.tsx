"use client";

import React from "react";
import Link from "next/link";
import { useClientInfoService } from "@/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/ui";
import { MobileMenuProps } from "./MobileMenu.types";
import { ContactCard, ContactCardStyle } from "@/components/common";

const MobileMenu = (props: MobileMenuProps) => {
  //States
  //Hooks
  const { width } = useClientInfoService();
  return (
    <>
      {width && width < 768 && (
        <div
          className={`
            mobile-navbar-menu-popup tw-fixed tw-left-0 tw-top-0 tw-flex
            tw-h-screen tw-w-screen tw-flex-col tw-transition-all
            tw-duration-1000 tw-ease-in-out

            ${props.isOpen ? "-tw-translate-x-0" : "-tw-translate-x-full"}
          `}
        >
          <div
            className={`
              mobile-menu-top-wrapper tw-items-center tw-justify-between
              tw-self-stretch tw-px-5
            `}
          >
            <div
              className={`
                mobile-menu-top tw-border-border-neutral tw-flex tw-h-20
                tw-items-center tw-justify-between tw-border-b
                tw-border-white/20 tw-pb-2.5 tw-pt-5
              `}
            >
              <h1
                className={`
                  burneeble-text-logo tw-text--4xl tw-font-bowlby-one
                  tw-font-normal
                `}
              >
                BURNEEBLE
              </h1>

              <Button
                onClick={() => {
                  props.setIsOpen(false);
                }}
                className="!tw-rounded-[50%]"
                size="icon"
              >
                <FontAwesomeIcon icon={faClose} />
              </Button>
            </div>
          </div>

          <div
            className={`
              mobile-menu-content tw-flex tw-h-[671px] tw-shrink tw-grow
              tw-basis-0 tw-flex-col tw-items-start tw-justify-between tw-gap-8
              tw-self-stretch tw-overflow-scroll tw-p-5 no-scrollbar
            `}
          >
            <div
              className={`
                pages-wrapper tw-flex tw-flex-col tw-items-start
                tw-justify-center tw-gap-2.5 tw-self-stretch
              `}
            >
              <div
                className={`
                  title tw-self-stretch tw-font-inter tw-text-xl tw-font-light
                  tw-leading-7 tw-text-body
                `}
              >
                Explore
              </div>
              <div
                className={`
                  pages tw-flex tw-flex-col tw-items-start tw-justify-start
                  tw-gap-5 tw-self-stretch tw-rounded-lg
                `}
              >
                {props.links.map((link, i) => {
                  return (
                    <Link
                      key={i}
                      onClick={() => {
                        props.setIsOpen(false);
                      }}
                      href={link.href}
                      passHref
                    >
                      <div
                        className={`
                          tw-group page-with-icon tw-inline-flex
                          tw-cursor-pointer tw-items-center tw-justify-start
                          tw-gap-2.5 tw-self-stretch tw-text-sm
                        `}
                      >
                        {link.icon &&
                          (typeof link.icon === "string" ? (
                            <img className={`tw-h-5 tw-w-5`} src={link.icon} />
                          ) : (
                            <FontAwesomeIcon
                              className={`
                                tw-h-5 tw-w-5 tw-text-body

                                group-hover:tw-text-white
                              `}
                              icon={link.icon}
                            />
                          ))}

                        <p
                          className={`
                            page-name tw-shrink tw-grow tw-basis-0 tw-font-inter
                            tw-text-2xl tw-font-black tw-leading-10 tw-text-body

                            group-hover:tw-text-white
                          `}
                        >
                          {link.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}

                {props.dropdowns.length > 0 && (
                  <Accordion type="single" collapsible className="tw-w-full">
                    {props.dropdowns.map((drop, i) => {
                      return (
                        <AccordionItem key={i} value={`item-${i}`}>
                          <AccordionTrigger icon={drop.icon}>
                            {drop.title}
                          </AccordionTrigger>
                          {[
                            ...(drop.primaryItem ? [drop.primaryItem] : []),
                            ...drop.items,
                          ].map((item, j) => {
                            return (
                              <AccordionContent key={j}>
                                <Link
                                  onClick={() => {
                                    props.setIsOpen(false);
                                  }}
                                  href={item.href}
                                  passHref
                                >
                                  {item.title}
                                </Link>
                              </AccordionContent>
                            );
                          })}
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                )}
              </div>
            </div>
            <div
              className={`
                contact-wrapper tw-flex tw-h-[140.10px] tw-flex-col
                tw-items-start tw-justify-start tw-gap-2.5 tw-self-stretch
                tw-rounded-lg
              `}
            >
              <div
                className={`
                  contact-title title tw-self-stretch tw-font-inter tw-text-xl
                  tw-font-light tw-leading-7 tw-text-body
                `}
              >
                Contact Us
              </div>
              <div
                className={`
                  contant-links-wrapper tw-inline-flex tw-items-center
                  tw-justify-between tw-self-stretch
                `}
              >
                <ContactCard
                  style={ContactCardStyle.onlyIcon}
                  icon={faEnvelope}
                  onClick={() => {}}
                  mainColor={"#1dbf73"}
                />
                <ContactCard
                  onClick={() => {}}
                  style={ContactCardStyle.onlyIcon}
                  icon={faEnvelope}
                  mainColor={"#f28307"}
                />
                <ContactCard
                  onClick={() => {}}
                  style={ContactCardStyle.onlyIcon}
                  icon={faEnvelope}
                  mainColor={"#179e00"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

"use client";

import React, { useState } from "react";
import { NavbarProps } from "./Navbar.types";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  ListItem,
} from "./../../ui/navigation-menu";
import Link from "next/link";
import { useClientInfoService } from "@/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/ui";

const Navbar = (props: NavbarProps) => {
  //States
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Hooks
  const { width } = useClientInfoService();
  return (
    <nav
      className={`
        tw-mx-auto tw-flex tw-h-auto tw-w-full tw-max-w-screen-2xl
        tw-justify-between tw-font-inter
      `}
    >
      <div className="tw-flex tw-flex-col tw-p-6">
        <Link href={props.logo.url || "#"}>{props.logo.svg}</Link>
      </div>

      <div className="tw-inline-flex tw-items-center tw-gap-2.5">
        {width < 768 ? (
          <>
            {width > 425 && <Button> Start Building</Button>}

            <Button
              onClick={() => {
                setIsOpen(true);
              }}
              className="!tw-rounded-[50%]"
              size="icon"
              variant={"secondary"}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </>
        ) : (
          <>
            <NavigationMenu>
              <NavigationMenuList>
                {props.dropdowns.map((component, i) => {
                  return (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger>
                        {component.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={`
                            tw-grid tw-gap-3 tw-p-6

                            lg:tw-grid-cols-[.75fr_1fr]

                            md:tw-w-[400px]
                          `}
                        >
                          {component.primaryItem && (
                            <li className="tw-row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className={`
                                    primary-gradient tw-flex tw-h-full tw-w-full
                                    tw-select-none tw-flex-col tw-justify-end
                                    tw-rounded-md tw-bg-gradient-to-b tw-p-6
                                    tw-no-underline tw-outline-none

                                    focus:tw-shadow-md
                                  `}
                                  href={component.primaryItem.href}
                                >
                                  {component.primaryItem.svg}
                                  <div
                                    className={`
                                      tw-mb-2 tw-mt-4 tw-text-xl tw-font-medium
                                      tw-text-headings
                                    `}
                                  >
                                    {component.primaryItem.title}
                                  </div>
                                  <p
                                    className={`
                                      tw-text-sm tw-leading-tight
                                      tw-text-headings
                                    `}
                                  >
                                    {component.primaryItem.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          )}
                          {component.items.map((item, j) => {
                            return (
                              <ListItem
                                key={j}
                                title={item.title}
                                href={item.href}
                              >
                                {item.description}
                              </ListItem>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
                {props.links.map((link, i) => {
                  return (
                    <NavigationMenuItem key={i}>
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <Button> Start Building</Button>
          </>
        )}
      </div>

      {width < 768 && (
        <div
          className={`
            mobile-navbar-menu-popup tw-fixed tw-left-0 tw-top-0 tw-h-screen
            tw-w-screen tw-transition-all tw-duration-1000 tw-ease-in-out

            ${isOpen ? "-tw-translate-x-0" : "-tw-translate-x-full"}
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
                  setIsOpen(false);
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
              tw-basis-0 tw-flex-col tw-items-start tw-justify-between
              tw-self-stretch tw-p-5
            `}
          >
            <div
              className={`
                pages-wrapper tw-flex tw-h-[200px] tw-flex-col tw-items-start
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
                  pages tw-flex tw-h-40 tw-flex-col tw-items-start
                  tw-justify-start tw-gap-5 tw-self-stretch tw-rounded-lg
                `}
              >
                {props.links.map((link, i) => {
                  return (
                    <Link
                      key={i}
                      onClick={() => {
                        setIsOpen(false);
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
                            tw-text-3xl tw-font-black tw-leading-10 tw-text-body

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
                                    setIsOpen(false);
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
          </div>
          {/* TODO ADD Footer */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// DOT NOT DELETE

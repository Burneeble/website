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
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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

                            md:tw-w-[400px]

                            lg:tw-grid-cols-[.75fr_1fr]
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
            tw-fixed tw-left-0 tw-top-0 tw-h-screen tw-w-screen tw-bg-white
            tw-transition-all tw-duration-1000 tw-ease-in-out

            ${isOpen ? "-tw-translate-x-0" : "-tw-translate-x-full"}
          `}
        >
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-flex-col tw-p-6">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href={props.logo.url || "#"}
              >
                {props.logo.svg}
              </Link>
            </div>
            <FontAwesomeIcon
              icon={faXmark}
              className={`tw-cursor-pointer tw-p-6 tw-text-2xl tw-text-black`}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          {props.dropdowns.length > 0 && (
            <Accordion type="single" collapsible className="tw-w-full tw-px-6">
              {props.dropdowns.map((drop, i) => {
                return (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{drop.title}</AccordionTrigger>
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
                            <div
                              className={`
                                tw-cursor-pointer tw-p-1

                                hover:tw-underline
                              `}
                            >
                              {item.title}
                            </div>
                          </Link>
                        </AccordionContent>
                      );
                    })}
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
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
                    tw-cursor-pointer tw-p-6 tw-text-sm

                    hover:tw-underline
                  `}
                >
                  {link.title}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

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
} from "@/components/ui";

const Navbar = (props: NavbarProps) => {
  //States
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Hooks
  const { width } = useClientInfoService();

  return (
    <section>
      <nav className="tw-font-inter tw-mx-auto tw-h-auto tw-w-full tw-max-w-screen-2xl tw-flex max-md:tw-justify-between">
        <div className="tw-flex tw-flex-col tw-px-6 tw-py-6">
          <Link href={props.logo.url || "#"}>{props.logo.svg}</Link>
        </div>
        {width < 768 ? (
          <FontAwesomeIcon
            icon={faBars}
            className="tw-px-6 tw-py-6 tw-cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              {props.dropdowns.map((component, i) => {
                return (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuTrigger>
                      {component.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="tw-grid tw-gap-3 tw-p-6 md:tw-w-[400px] lg:tw-w-[500px] lg:tw-grid-cols-[.75fr_1fr]">
                        {component.primaryItem && (
                          <li className="tw-row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="tw-flex tw-h-full tw-w-full tw-select-none tw-flex-col tw-justify-end tw-rounded-md tw-bg-gradient-to-b tw-from-muted/50 tw-to-muted tw-p-6 tw-no-underline tw-outline-none focus:tw-shadow-md"
                                href={component.primaryItem.href}
                              >
                                {component.primaryItem.svg}
                                <div className="tw-mb-2 tw-mt-4 tw-text-lg tw-font-medium">
                                  {component.primaryItem.title}
                                </div>
                                <p className="tw-text-sm tw-leading-tight tw-text-muted-foreground">
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
        )}
        {width < 768 && (
          <div
            className={`tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-white tw-transition-all tw-ease-in-out tw-duration-1000 ${
              isOpen ? "-tw-translate-x-0" : "-tw-translate-x-full"
            }`}
          >
            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-flex-col tw-px-6 tw-py-6">
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
                className="tw-text-black tw-cursor-pointer tw-text-2xl tw-px-6 tw-py-6"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            {props.dropdowns.length > 0 && (
              <Accordion
                type="single"
                collapsible
                className="tw-w-full tw-px-6"
              >
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
                              <div className="tw-px-1 tw-py-1 tw-cursor-pointer hover:tw-underline">
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
                  <div className="tw-px-6 tw-py-6 tw-cursor-pointer hover:tw-underline tw-text-sm">
                    {link.title}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui";
import { MobileMenu } from "./components";

const Navbar = (props: NavbarProps) => {
  //States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Hooks
  const { width } = useClientInfoService();

  //useEFfects
  useEffect(() => {
    console.log("Navbar mounted");
    console.log(width);
  }, [width]);

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

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

      {/* navbar mobile popup */}
      {width < 768 && (
        <MobileMenu
          dropdowns={props.dropdowns}
          links={props.links}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;

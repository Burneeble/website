import React from "react";
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

const Navbar = (props: NavbarProps) => {
  return (
    <section>
      <nav className="tw-font-inter tw-mx-auto tw-h-auto tw-w-full tw-max-w-screen-2xl tw-flex ">
        <div className="tw-flex tw-flex-col tw-px-6 tw-py-6">
          <a href={props.logo.url || "#"}>{props.logo.svg}</a>
        </div>
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
                          <ListItem key={j} title={item.title} href={item.href}>
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
      </nav>
    </section>
  );
};

export default Navbar;

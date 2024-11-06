import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavbarDropDownItem {
  title: string;
  href: string;
  description: string;
}

export interface NavbarDropDown {
  title: string;
  primaryItem?: NavbarDropDownItem & { svg: JSX.Element };
  items: NavbarDropDownItem[];
  icon?: string | IconDefinition;
}

export interface NavbarLink {
  title: string;
  href: string;
  icon?: string | IconDefinition;
}

export interface NavbarProps {
  logo: {
    svg: JSX.Element;
    url?: string;
  };
  dropdowns: NavbarDropDown[];
  links: NavbarLink[];
}

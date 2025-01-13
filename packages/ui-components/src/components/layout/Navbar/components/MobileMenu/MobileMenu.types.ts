import { NavbarProps } from "../../Navbar.types";

export interface MobileMenuProps extends Omit<NavbarProps, "logo"> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

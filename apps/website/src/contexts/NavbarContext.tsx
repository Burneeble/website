"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  isNavbarVisible: boolean;
  setNavbarVisible: (visible: boolean) => void;
}

const navbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <navbarContext.Provider
      value={{
        isNavbarVisible,
        setNavbarVisible: setIsNavbarVisible,
      }}
    >
      {children}
    </navbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(navbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
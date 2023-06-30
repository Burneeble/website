import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export function ScrollToTop(props: { children: any }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

const App = () => {
  window.addEventListener("load", function () {
    AOS.init();
  });

  const socials = {
    Instagram: "#",
  };

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar
            Pages={[]}
            Socials={{
              Instagram: undefined,
              Linkedin: undefined,
              Twitter: undefined,
              Opensea: undefined,
              Discord: undefined,
              Facebook: undefined,
              Telegram: undefined,
              Tiktok: undefined,
            }}
          ></Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer
          // Copyright={"All rights reserved by BURNEEBLE © 2023"}
          anchorClass={"burneeble-anchor"}
          lineColor={"#2B2B2B"}
          Logo={"burneebleSmall.png"}
          Links={[]}
        ></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;

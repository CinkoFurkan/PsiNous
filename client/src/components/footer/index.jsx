import React from "react";

import Logo from "./components/logo";
import KVKK from "./components/kvkk";
import Links from "./components/links";

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-[#2C2A22]">
      <div className="container flex items-center justify-between mx-auto">
        <Logo />
        <KVKK />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;

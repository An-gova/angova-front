"use client";

import React from "react";
import Image from "next/image";
import Dropdown from "./dropdown";

const Navbar = () => {
  return (
    <nav className="relative z-20 flex-col flex-grow md:pb-0 md:flex md:justify-between md:flex-row">
      <div className="flex justify-between items-center w-full m-3">
        <Dropdown />
        <div className="mr-6">
          <Image src={"/logo.png"} alt="Angova" width={124} height={124} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

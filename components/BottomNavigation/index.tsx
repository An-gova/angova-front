'use client'

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationButton from "./navigationButton";
import { Separator } from "@/components/ui/separator"




const BottomNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" h-20 fixed bottom-0 left-0 right-0 bg-orange sm:h-full sm:w-72 sm:flex sm:flex-col justify-start">
        <Link href="/" className='mr-6 hidden sm:block'>
          <Image
            src={'/logo-white.png'}
            alt="Angova"
            width={144}
            style={{width:"auto",  height:"auto"}} // to fix aspect ratio, this needs to be style to remove warning
            height={144}
            className="py-10"
          />
        </Link>
        <NavigationButton pathName="/" value="?????????" />
        <div className="w-full h-3 px-10 mt-4 hidden sm:block">
          <Separator />
        </div>
        <NavigationButton pathName="/session" value="Sessions" isSession={true} />
        <div className="w-full h-3 px-10 mt-4 hidden sm:block">
          <Separator />
        </div>
        <NavigationButton pathName="/profile" value="Profil" />
      </NavigationMenuList >
    </NavigationMenu >
  );
};

export default BottomNavigation;
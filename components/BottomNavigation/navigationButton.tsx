import React from 'react'
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from 'next/navigation';
import { ShipWheel, MessageCircleIcon, UserIcon } from "lucide-react";

interface NavigationButtonProps {
  isSession?: boolean;
  pathName: string;
  value: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ isSession, pathName, value }) => {
  return (
    <div className="flex-1 sm:flex-none">
      {isSession ? (
        <NavigationMenuItem className="flex-1 sm:flex-none sm:flex sm:justify-center sm:items-center sm:w-full">
          <Link href="/session" legacyBehavior passHref>
            <NavigationMenuLink id="sessions" className={"flex items-center justify-center flex-col h-20 sm:flex-row sm:justify-between sm:w-52 sm:bg-blue-500 sm:rounded-md sm:h-12 sm:px-3"}>
              <ShipWheel id="sessions" color="white" size={24} className="pointer-events-none sm:scale-125 sm:ml-2" />
              <div className="hidden w-full justify-center sm:flex sm:content-center sm:justify-center">
                <span id="sessions" className="text-white font-extrabold mt-4 sm:text-lg sm:font-light sm:mt-0 sm:w-2/4">{value}</span>
              </div>
              {usePathname() === pathName && (
                <div className="flex w-full justify-center sm:hidden ">
                  <span id="sessions" className="text-white mt-2 sm:text-xl sm:mt-0">{value}</span>
                </div>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem className="flex-1 sm:flex-none sm:flex sm:justify-center sm:items-center sm:w-full" >
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="questions" className={"flex items-center justify-center flex-col h-20 sm:flex-row sm:justify-between sm:w-52 sm:border sm:rounded-md sm:h-12 sm:px-3"}>
              {pathName === "/profile" ? (
                <UserIcon id="questions" color="white" size={24} className="pointer-events-none sm:scale-125 sm:ml-2" />
              ) : (
                <MessageCircleIcon id="questions" color="white" size={24} className="pointer-events-none sm:scale-125 sm:ml-2" />
              )}
              <div className="hidden w-full justify-center sm:flex sm:content-center sm:justify-center">
                <span id="profil" className="text-white font-extrabold mt-4 sm:text-xl sm:font-light sm:mt-0 sm:w-2/4">{value}</span>
              </div>
              {usePathname() === pathName && (
                <div className="flex w-full justify-center sm:hidden">
                  <span id="questions" className="text-white mt-2 sm:text-xl sm:mt-0">{value}</span>
                </div>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      )}

    </div>
  )
}


export default NavigationButton
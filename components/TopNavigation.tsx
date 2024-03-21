'use client'

import React from 'react';
import Dropdown from './dropdown';
import { ChevronLeft, Settings } from "lucide-react";

interface TopNavigationProps {
  title?: string;
  isLanguage: boolean;
  isGear: boolean;
  isTitle: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title, isLanguage, isGear, isTitle }) => {
  return (
    <div className="block bg-white">
    <nav className="h-20 sm:hidden border-2 border-b-gray-100 text-lg">
      <div className="flex h-full justify-between items-end w-full pb-3">
        {isLanguage ? (
          <Dropdown />
        ) : (
          <div className='h-16 flex items-end justify-center w-20 cursor-pointer'>
            <ChevronLeft color="black" size={24} />
          </div>
        )}
        {isTitle && (
          <p className="leading-7 font-medium cursor-default">{title}</p>
        )}
        <div className='h-16 flex items-end justify-center w-20 cursor-pointer'>
          {isGear && (
            <Settings color="black" size={24} />
          )}
        </div>
      </div>
    </nav >
    </div>
  )
}

export default TopNavigation
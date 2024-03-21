import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import flags from "../lib/flags.json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className="ml-4 w-20 sm:w-40">
        <Button variant="nav" className="bg-white">
          <Image
            src={"/flags/squared/fr.png"}
            alt="France"
            width={24}
            height={24}
          />
          <span className="text-lg ml-2">
            {isOpen ? (
              <ChevronUp color="black" />
            ) : (
              <ChevronDown color="black" />
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-2 sm:w-40">
        <DropdownMenuGroup>
          {flags.map((flag, index) => (
            <DropdownMenuItem key={index}>
              <div className="flex items-end justify-center space-x-2 cursor-pointer py-2 text-sm text-gray-700 dark:text-gray-400 w-full">
                <Image src={flag.flag} alt={flag.name} width={24} height={24} />
                <div className="hidden sm:block w-full text-start">
                  <span className="hidden sm:block ml-4">{flag.name}</span>
                </div>    
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default Dropdown;

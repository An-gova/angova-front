import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-white h-full">
      <div className="flex justify-around items-center">
        <div className="w-1/2">
          <div className="flex flex-col gap-4">
            <div>
              <span></span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Le code <br /> de la route
              </h1>
            </div>
            <h1 className="text-2xl text-orange-400">
              Traduit dans toutes les langues!
            </h1>
            <Button variant="orange" className="w-48">
              Connexion
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex justify-around items-center">
          <Image src={"/img/car.gif"} alt="Angova" width={500} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

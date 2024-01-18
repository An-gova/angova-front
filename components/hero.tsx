import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Carroussel from "./Carroussel/Carroussel";
import CustomAnimatedText from "./CustomAnimatedText/CustomAnimatedText";
const Hero = () => {
  return (
    <div className="text-white h-full">
      <div className="flex justify-around items-center">
        <div className="w-1/2">
          <div className="flex flex-col gap-4">
            <div>
              <span></span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black">
                Le code <br className="md:hidden lg:hidden" /> de la route
              </h1>
            </div>
            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl  text-orange-400">
              Traduit dans toutes <br className="md:hidden lg:hidden" />
              les langues!
            </h1>
            <Button variant="orange" className="w-48">
              Connexion
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex justify-around items-center">
          {/* <Image
            src={""}
            alt=""
            width={500}
            height={700}
            priority={true}
          /> */}
        </div>
      </div>
      <Carroussel />
      <CustomAnimatedText />
    </div>
  );
};

export default Hero;

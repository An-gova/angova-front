'use client'

import React from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import ProfileForm from "@/components/ProfileForm";
import { Button  } from "@/components/ui/button";
import { InputFile } from '@/components/ui/inputFile';
import { Pen } from "lucide-react";

const UpdatePage = () => {
  const userData = {
    firstName: "Eddy",
    lastName: "Wall",
    userName: "eddwall",
    password: "password",
    mail: "eddywall@gmail.com",
    image_url: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    inscription_date: new Date()
  }

  const [user, setUser] = React.useState(userData);
  const [openAvatarModifier, setOpenAvatarModifier] = React.useState(false)


  const handleAvatarModifier = (e: any) => {
    console.log('open')
    e.preventDefault();
    e.stopPropagation();
    setOpenAvatarModifier(!openAvatarModifier)
  }

  const closeAvatarModifier = () => {
    console.log('close')

    setOpenAvatarModifier(false)
  }

  return (
    <MaxWidthWrapper>
      <TopNavigation title="Modifier mon profil" isTitle={true} isLanguage={false} isGear={false} />
      <div  className="h-40 mb-4 flex justify-center flex-col items-center relative z-30">
        <div onClick={closeAvatarModifier} className="w-2/6 relative flex justify-center items-center">
      <div className="w-20 h-20 rounded-full mb-4 overflow-hidden items-center border-2 border-orange sm:h38 sm:w-38 relative">
        <img src={user.image_url} alt="Profile" className="object-cover w-full h-full relative" />
      </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 m-2 mr-0 border-orange flex items-center justify-center absolute top-0 right-4 sm:right-10 lg:right-28 lg:w-10 lg:h-10  bg-actionblue">
          <Pen strokeWidth={2} color="white" size={18} />
        </div>
      </div>
      <InputFile className={`${openAvatarModifier ? "visible": "hidden"}`}></InputFile>
      <p onClick={handleAvatarModifier} className={`color-black underline cursor-pointer ${openAvatarModifier ? "hidden": "visible"} z-100`}>Modifier mon avatar</p>
      </div>
      <h2 className="font-bold my-4 hidden sm:visible">Modifier mon profil</h2>
      <div className="flex sm:justify-center">
        <ProfileForm {...user} setUser={setUser} />
      </div>
      <div className="h-40 flex items-center justify-between flex-col py-8">
        <Button className="bg-orange mb-2">Deconnexion</Button>
        <p className="color-black underline cursor-pointer">Supprimer mon compte</p>
      </div>
      <BottomNavigation />
    </MaxWidthWrapper>
  );
}

export default UpdatePage;

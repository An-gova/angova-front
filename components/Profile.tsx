'use client'

import React from 'react';
import { Clock, Pen } from "lucide-react";
import Link from 'next/link';

interface ProfileProps {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    mail: string 
    image_url: string;
    inscription_date: Date;
}

const Profile: React.FC<ProfileProps> = ({firstName, lastName, username, password, mail, image_url, inscription_date}) => {
    const createFrenchDate = (date: Date): string => {
        const options: any = {
            year: 'numeric',
            month: 'long',
          };
        const frenchDate = date.toLocaleDateString('fr-FR', options);

        return frenchDate
    }

    return (
        <div className="bg-white h-36 mt-4 mx-6 border-2 rounded-md flex sm:w-full bg-clip-content">
            <div className="h-full w-2/5 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden items-center border-2 border-orange sm:h38 sm:w-38">
                    <img src={image_url} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center w-3/6">
                <p className="text-sm mb-px font-bold sm:font-extrabold sm:text-xl">{`${firstName} ${lastName}`}</p>
                <p className="text-xxs mb-4 sm:text-lg">@{`${username}`}</p>
                <div className="flex justify-center items-center">
                    <Clock color="blue" size={10}/>
                    <span className="w-px"/>
                    <p className="text-[10px] m-px text-blue-500 overflow-wrap:normal word-break:normal">Membre depuis {`${createFrenchDate(inscription_date)}`}</p>
                </div>
            </div>
            <div className="flex items-start justify-center w-2/6 sm:w-3/5 sm:justify-end sm:items-start sm:pr-8 cursor-pointer">
                <Link href="/profile/update" legacyBehavior passHref>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 mt-6 m-2 mr-0 border-orange flex items-center justify-center">
                        <Pen strokeWidth={3} color="orange" size={5} className="w-1/2 h-1/2"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default Profile


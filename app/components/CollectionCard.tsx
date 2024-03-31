import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: number;
  time: string;
  day: string;
  location: string;
  Event: string;
  TicketName:string
}

const CollectionCard: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  date,
  day,
  time,
  location,
  Event,
  TicketName,

}) => {
  return (
    <div className={` bg-light w-[257px] h-[625px] grid grid-rows-3 shadow-md overflow-hidden dark:bg-dark-200`}>
      <div className="h-100 w-[100%] flex flex-col items-center border-styles justify-evenly text-black m-auto mr-6 dark:text-white">
        <div className="h-[90%] grid rounded-b-2xl text-center w-full relative mb-6">
          <Image
            src={imageSrc}
            alt={altText}
            width={217}
            height={385}
            objectFit="cover"
            className="m-auto"
          />
        </div>
        <div className='flex flex-row w-full justify-between '>
        <span className='w-4 h-4 rounded-tr rounded-br bg-white '></span>  
        <span className='border-2 border-dashed border-[#818A97] w-[60%] h-0'></span>
        <span className='w-4 h-4 rounded-full bg-white '></span>  
        </div>
        <div className='flex flex-col mt-auto justify-center items-center'>
        <div className="relative flex flex-col items-center ml-4 text-black dark:text-white">
          <h2 className="text-lg font-bold m-2">{title}</h2>
          <p>{date}||{day}||{time}</p>
          <p className='text-center max-w-[80%]'>{location}</p>
        </div>
      </div>
      <div className='flex flex-col mt-8 justify-center items-center'>
        <Button className='bg-black' btnName={TicketName}/>
      </div>
        </div>
    </div>
  );
};

export default CollectionCard;

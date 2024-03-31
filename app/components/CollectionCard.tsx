import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
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
        <div className='flex flex-row w-full justify-between items-center'>
        <span className='w-3 h-5 rounded-r-full bg-light-gradient dark:bg-dark-gradient'></span>  
        <span className='h-[2px] w-[70%] border border-dashed border-[#A9ACB2] dark:border-[#818A97]'></span> 
        <span className='w-3 h-5 rounded-l-full bg-light-gradient dark:bg-dark-gradient '></span>  
        </div>
        <div className='flex flex-col mt-auto justify-center items-center'>
        <div className="relative flex flex-col items-center ml-4 text-black dark:text-white">
          <h2 className="text-lg font-semibold m-2">{title}</h2>
          <p>{date} | {day} | {time}</p>
          <p className='text-center mt-2 max-w-[80%]'>{location}</p>
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

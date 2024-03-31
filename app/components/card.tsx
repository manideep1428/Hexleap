
import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  totalEvents: string;
  sport: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  totalEvents,
  sport,
}) => {
  return (
    <div className="w-[237px] h-[511px] grid grid-rows-3 shadow-xl bg-white overflow-hidden dark:bg-dark-200 text-white ">
      <div className="relative row-span-1">
        <Image
          src={imageSrc}
          alt={altText}
          width={217}
          height={385}
          objectFit='fill'
          className="m-auto mt-2"
        />
      </div>
      <div className="row-span-3 flex justify-start items-end ml-2 mt-4">
        <h2 className="felx felx justify-start text-black text-lg font-light dark:text-white">{title}</h2>
      </div>
      <div className='bg-[#F6F6F7] text-black rounded flex flex-row justify-evenly m-4 dark:bg-dark-300'>
        <div className="flex flex-col m-2">
          <span className="text-sm  font-semibold dark:text-white">Total Events</span>
          <span className="font-semibold dark:text-white">{totalEvents}</span>
        </div>  
        <div className='flex flex-col m-2'>
          <span className="text-sm font-semibold dark:text-white">Sport</span>
          <span className="font-semibold dark:text-white">{sport}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

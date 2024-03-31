import React from 'react';
import CollectionCard from '../components/CollectionCard';


const Collections: React.FC = () => {
  return (
   <div className='flex flex-col w-[1240px] h-[918px] bg-light-gradient dark:bg-dark-gradient'>
      <div className='flex flex-col gap-4 justify-center items-center text-black mt-10 dark:text-white' >
         <h2 className='font- text-5xl font-[700px] font-poppins'>Collection Spotlight</h2>
         <p  className='max-w-[85%] text-center'>
         Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!     
         </p>
      </div>
      <div className="flex flex-row gap-12 m-8 justify-evenly items-center h-screendarkgradient">
      <div className='w-[36px] h-[49px] flex justify-center items-center border-[#2C9Cf0] border-2 hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#2C9Cf0] font-bold">
          <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
        </svg>
        </div>
        <CollectionCard
      Event='nvfjovnfadljnlnsf'
        altText='nothing'
        imageSrc="/collections/1.jpg"
        title="Las Vegas Aviators"
        date={"OCT 15"}
        day='SUN'
        time='4:30 PM'
        location="Las Vegas Ballpark, Las Vegas, Nevada"
        TicketName='Take Flight Collection'
      />
        <CollectionCard
      Event='nvfjovnfadljnlnsf'
        altText='nothing'
        imageSrc="/collections/2.jpg"
        title="Sacramento River Cats"
        date={"OCT 15"}
        day='SUN'
        time='4:30 PM'
        location="Sutter Health Park, Sacramento, California"
        TicketName='Orange Collection'

      /> 
       <CollectionCard
      Event='nvfjovnfadljnlnsf'
        altText='nothing'
        imageSrc="/collections/1.jpg"
        title="Las Vegas Aviators"
        date={"OCT 15"}
        day='SUN'
        time='4:30 PM'
        location="Las Vegas Ballpark, Las Vegas, Nevada"
        TicketName='Take Flight Collection'
      />
      <div className='w-[36px] h-[49px] flex justify-center items-center border-[#2C9Cf0] border-2 hover:cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#2C9Cf0]">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
      </svg>
      </div>
    </div>
    </div>
  );
};

export default Collections;
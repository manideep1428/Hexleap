import React from 'react'
import Card from './card'
import AdCard from './adCard'
import Button from './ui/Button'
import DarkMode from './ui/DarkMode'

const CardsEvent = () => {
  return (
    <div className="w-[1241px] h-[673px] bg-[#F7F7F8] dark:bg-[#292B32]">
    <p className=" w-[80px] h-[41px] ml-6 text-lg border-blue-sky text-balck border-b-4 dark:text-white">Sports</p>
     <div className="flex flex-row gap-2 m-6">
     <Card altText="Sport" imageSrc="/card/1.jpg" sport="Baseball" totalEvents={"48 Events"} title="Sacramento River Cats" />
     <Card altText="Sport" imageSrc="/card/2.jpg" sport="Baseball" totalEvents={'28 Events'} title="Las Vegas Aviators" />
     <Card altText="Sport" imageSrc="/card/3.jpg" sport="Icehockey" totalEvents={'15 Events'} title="New Jersey Devils" />
     <Card altText="Sport" imageSrc="/card/2.jpg" sport="Baseball" totalEvents={'28 Events'} title="Las Vegas Aviators" />
     <AdCard 
     imageAlt='Ad' imageSource='/ad.jpg' 
     description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      title='Advertisement title'/>
     </div>
      <div className='text-center'>
        <Button btnName='Show More' className='bg-blue-500 hover:bg-blue-700'/>
      </div>
    </div>
  )
}

export default CardsEvent
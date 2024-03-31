'use client'
import CardsEvent from "./components/CardsEvent";
import Collections from "./components/Collections";
import useToggleDarkMode from "./components/hooks/index";
import DarkMode from "./components/ui/DarkMode";


export default function Home() {
  const [isDarkMode,toggleDarkMode]= useToggleDarkMode();
  return (
    <div className={`flex flex-col ${isDarkMode?'dark':''} ${isDarkMode && "bg-[#292B32]"}`}>
        <div className="flex flex-row-reverse my-4 mx-8">
          <DarkMode onClick={toggleDarkMode} DarkMode={isDarkMode ? true:false } />
        </div> 
        <div className='flex flex-col gap-20 items-center mt-4 pt-4 '>
          <div className="">
            <CardsEvent/>
          </div>
          <div className="flex  dark:bg-dark-gradient">  
            <Collections/>
          </div>
        </div>
      </div> 
    )
}


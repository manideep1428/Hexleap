import Image from "next/image";
import { describe } from "node:test";
interface CardProps {
  imageSource: string;
  imageAlt: string;
  title: string;
  description:string
}

const AdCard: React.FC<CardProps> = ({
  imageSource,
  imageAlt,
  title,
  description
}) => {
  return (
    <div className="shadow-md overflow-hidden text-black dark:bg-dark-200 dark:text-white  ">
        <div className="flex flex-row-reverse">
        </div>
      <div className="relative h-48">
        <Image
          src={imageSource}
          alt={imageAlt}
          width={ 217}
          height={218}
          objectFit="fill"
          className="p-2"
        />
        <div className="absolute top-0 right-0 mt-2 mr-2">
        <p className="text-white text-lg  bg-black px-4 py-0">Ad</p>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 text-balck dark:text-white">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm max-w-40">{description} </p>
        </div>
      </div>
  );
};

export default AdCard;

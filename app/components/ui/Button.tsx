interface Props{
 btnName: string
 className ?: string
 onClick?:()=>void | undefined
}

const Button = ({ btnName, className }:Props) => {
    return (
      <button
        className={`text-white font-bold py-2 px-4 ${className}`}
      >
        {btnName}
      </button>
    );
  };
  
  export default Button;
  
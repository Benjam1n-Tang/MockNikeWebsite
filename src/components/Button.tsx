
type ButtonProps = {
    label: string;
    iconUrl?: string; 
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full ${props.fullWidth && 'w-full'}`}>
        {props.label}
        {props.iconUrl && 
          <img
            src={props.iconUrl}
            alt="Button"
            className="ml-2 rounded-full w-5 h-5"
          />
        
        }
    </button>
  )
}

export default Button
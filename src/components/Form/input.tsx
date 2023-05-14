import { InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <div>
      <input 
        id={props.name}
        className="bg-gray-200 w-60 h-8 px-3"
        {...register(props.name)} 
        {...props}
      />
    </div>
  )
}
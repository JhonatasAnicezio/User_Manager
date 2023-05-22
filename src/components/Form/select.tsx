import { SelectHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  options: string[],
  placeholder: string,
}

export function Select(props: SelectProps) {
  const { register } = useFormContext();

  return (
    <select
      {...props}
      {...register(props.name)}
      defaultValue=""
      id={props.name}
    >
      <option value="" disabled hidden>
        {props.placeholder}
      </option>
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
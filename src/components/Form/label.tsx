import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string
}

export function Label(props: LabelProps) {
  return (
    <label 
      htmlFor={props.name.toLowerCase()}
      {...props}
    >
      {props.name}
    </label>
  )
}
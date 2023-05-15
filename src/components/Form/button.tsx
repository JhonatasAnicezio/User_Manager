import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
}

export function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="bg-blue-700 hover:bg-blue-500 transition text-white font-semibold text-lg w-60 py-2"
      {...props}
    >
      {props.text}
    </button>
  );
}
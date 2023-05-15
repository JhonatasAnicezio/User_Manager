type Props = {
  text1: string,
  text2: string,
  func: () => void,
}

export function Transiton({ text1, text2, func }: Props) {
  return (
    <p className="text-xs text-center mt-1">
      {text1}
      <button
        onClick={func}
        type="button"
        className="text-blue-950 font-semibold ml-0.5"
      >
        {text2}
      </button>
    </p>
  )
}
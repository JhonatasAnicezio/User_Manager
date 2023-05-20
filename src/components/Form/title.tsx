type Props = {
  title: string
}

export function Title({ title }: Props) {
  return (
    <h1 className="flex justify-center mt-9 text-2xl py-5 font-extrabold">
      {title}
    </h1>
  )
}
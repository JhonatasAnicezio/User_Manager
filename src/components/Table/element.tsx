import { HTMLAttributes } from 'react';

interface ElementProps extends HTMLAttributes<HTMLTableCellElement> {}

export function Element(props: ElementProps) {
  return (
    <td
    {...props}
      className='border border-solid border-blue-500 text-blue-950 text-center'
    />
  );
}

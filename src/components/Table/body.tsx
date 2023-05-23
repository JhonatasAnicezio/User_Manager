import { HTMLAttributes } from 'react';

interface BodyProps extends HTMLAttributes<HTMLTableCaptionElement> {}

export function Body(props: BodyProps) {
  return (
    <tbody {...props} />
  );
}
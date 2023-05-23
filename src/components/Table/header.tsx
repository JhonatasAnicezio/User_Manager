import { HTMLAttributes } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  titles: string[];
  classNameTh: string;
}

export function Header(props: HeaderProps) {
  return (
    <thead>
      <tr>
        { props.titles.map((title, index) => <th className={props.classNameTh} key={ index }>{ title }</th>) }
      </tr>
    </thead>
  );
}

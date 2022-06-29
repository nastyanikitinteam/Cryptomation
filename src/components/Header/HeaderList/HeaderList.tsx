import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './headerList.module.scss';
import { Link as Lk, animateScroll as scroll } from 'react-scroll';

interface IProps {
  stick?: boolean;
}

const arr = [
  {
    id: 0,
    title: 'Pricing',
    link: 'pricing',
    anсhor: true,
  },
  {
    id: 1,
    title: 'Use Cases',
    link: '/1',
  },
  {
    id: 2,
    title: 'Docs',
    link: '/1',
  },
  {
    id: 3,
    title: 'Blog',
    link: '/1',
  },
];

const HeaderList: FC<IProps> = ({ stick }) => {
  return (
    <div className={cn(styles.list, { [styles.stick]: stick })}>
      {arr.map(({ id, title, link, anсhor }) => {
        return anсhor ? (
          <Lk
            key={id}
            to={link}
            smooth={true}
            duration={300}
            className={styles.item}
          >
            {title}
          </Lk>
        ) : (
          <Link href={link} key={id}>
            <a className={styles.item}>{title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderList;

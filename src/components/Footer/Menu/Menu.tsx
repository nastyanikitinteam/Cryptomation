import Link from 'next/link';
import styles from './menu.module.scss';
import { Link as Lk, animateScroll as scroll } from 'react-scroll';

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

const Menu = () => {
  return (
    <div className={styles.list}>
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

export default Menu;

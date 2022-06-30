import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import styles from './headerList.module.scss';
import { Link as Lk, animateScroll as scroll } from 'react-scroll';

interface IProps {
  stick?: boolean;
  handleClick: () => void;
}

const HeaderList: FC<IProps> = ({ stick, handleClick }) => {
  const router = useRouter();

  const arr = useMemo(
    () => [
      {
        id: 0,
        title: 'Pricing',
        link: 'pricing',
        anсhor: true,
      },
      {
        id: 1,
        title: 'Use Cases',
        link: '/',
      },
      {
        id: 2,
        title: 'Docs',
        link: '/',
      },
      {
        id: 3,
        title: 'Blog',
        link: '/',
      },
    ],
    []
  );

  return (
    <div className={cn(styles.list, { [styles.stick]: stick })}>
      {arr.map(({ id, title, link, anсhor }) => {
        return anсhor ? (
          router.asPath == '/' ? (
            <Lk
              key={id}
              to={link}
              smooth={true}
              duration={300}
              className={styles.item}
              onClick={handleClick}
            >
              {title}
            </Lk>
          ) : (
            <Link href={'/#' + link} key={id}>
              <a className={styles.item}>{title}</a>
            </Link>
          )
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

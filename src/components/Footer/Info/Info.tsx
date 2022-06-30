import { useMemo } from 'react';

import Link from 'next/link';
import styles from './info.module.scss';

import TwitterIcon from '../../../assets/images/twitter.svg';

const Info = () => {
  const arr = useMemo(
    () => [
      {
        id: 0,
        title: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        id: 1,
        title: 'Terms & Conditions',
        link: '/',
      },
    ],
    []
  );

  return (
    <div className={styles.list}>
      {arr.map(({ id, title, link }) => (
        <Link href={link} key={id}>
          <a className={styles.item}>{title}</a>
        </Link>
      ))}
      <Link href="/">
        <a className={styles.twitter}>
          <TwitterIcon />
        </a>
      </Link>
    </div>
  );
};

export default Info;

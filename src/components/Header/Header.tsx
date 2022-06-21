import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import styles from './header.module.scss';

import Logo from './Logo/Logo';

const Header = () => {
  const [stick, setStick] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isAnimate === false && setIsAnimate(true);
    }, 500);
  }, []);

  const handleScroll = () => {
    setStick(window.scrollY > 35);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={cn(styles.header, { [styles.stick]: stick })}>
      <div className="wrapper">
        <div className={styles.content}>
          <Link href="/123">
            <a
              className={styles.logo}
              onMouseEnter={() => isAnimate === false && setIsAnimate(true)}
            >
              <Logo isAnimate={isAnimate} setIsAnimate={setIsAnimate} />
            </a>
          </Link>
          <div className={styles.list}>
            <HeaderList stick={stick} />
          </div>

          <div className={styles.enter}>
            <HeaderEnter stick={stick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

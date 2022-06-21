import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './header.module.scss';

import Logo from './Logo/Logo';

const Header = () => {
  const [stick, setStick] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 998 });

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

  const onChangeMenu = () => setIsOpenMenu((prev) => !prev);

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

          {isMobile ? (
            <MobileMenu isOpenMenu={isOpenMenu} />
          ) : (
            <>
              <div className={styles.list}>
                <HeaderList stick={stick} />
              </div>

              <div className={styles.enter}>
                <HeaderEnter stick={stick} />
              </div>
            </>
          )}

          {isMobile && (
            <div
              onClick={onChangeMenu}
              className={cn(styles.menuButton, {
                [styles.openMenu]: isOpenMenu,
              })}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

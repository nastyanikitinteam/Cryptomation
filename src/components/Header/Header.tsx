import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import useMediaQuery from '../../utils/useMediaQuery';

import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './header.module.scss';

import Logo from './Logo/Logo';

const Header = () => {
  const [isStick, setIsStick] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const isMobile = useMediaQuery(998);

  useEffect(() => {
    document.body.className = isOpenMenu ? 'is-open' : '';
  }, [isOpenMenu]);

  useEffect(() => {
    setTimeout(() => {
      isAnimate === false && setIsAnimate(true);
    }, 500);
  }, []);

  const handleScroll = () => {
    isOpenMenu === false && setIsStick(window.scrollY > 35);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const onChangeMenu = () => setIsOpenMenu((prev) => !prev);

  return (
    <div
      className={cn(
        styles.header,
        { [styles.stick]: isStick },
        { [styles.openMenu]: isOpenMenu }
      )}
    >
      <div className="wrapper">
        <div className={styles.content}>
          <Link href="/">
            <a
              className={styles.logo}
              onMouseEnter={() => isAnimate === false && setIsAnimate(true)}
            >
              <Logo
                isAnimate={isAnimate}
                setIsAnimate={setIsAnimate}
                isStick={isStick}
              />
            </a>
          </Link>
          <MobileMenu
            isOpenMenu={isOpenMenu}
            handleClick={() => setIsOpenMenu(false)}
          />

          <div className={styles.list}>
            <HeaderList
              stick={isStick}
              handleClick={() => setIsOpenMenu(false)}
            />
          </div>

          <div className={styles.enter}>
            <HeaderEnter stick={isStick} />
          </div>

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

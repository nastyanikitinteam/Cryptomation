import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import Menu from '../Menu/Menu';
import Info from '../Info/Info';
import styles from './bottom.module.scss';

import LogoSVG from '../../../assets/images/logo.svg';

const Bottom = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={styles.content}>
      <p className={styles.text}>© 2022 CryptoMation. All rights reserved.</p>
      {isMobile && (
        <Link href="/123">
          <a className={styles.logo}>
            <LogoSVG />
          </a>
        </Link>
      )}
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.info}>
        <Info />
      </div>
    </div>
  );
};

export default Bottom;

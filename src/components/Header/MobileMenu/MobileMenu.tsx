import { FC } from 'react';
import cn from 'classnames';
import HeaderList from '../HeaderList/HeaderList';
import HeaderEnter from '../HeaderEnter/HeaderEnter';
import styles from './mobileMenu.module.scss';

interface IProps {
  isOpenMenu: boolean;
}

const MobileMenu: FC<IProps> = ({ isOpenMenu }) => {
  return (
    <div className={cn(styles.menu, { [styles.isOpen]: isOpenMenu })}>
      <div className={styles.block}>
        <HeaderList />
        <div className={styles.buttons}>
          <HeaderEnter />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

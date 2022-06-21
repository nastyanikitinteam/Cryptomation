import HeaderList from '../HeaderList/HeaderList';
import HeaderEnter from '../HeaderEnter/HeaderEnter';
import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.menu}>
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

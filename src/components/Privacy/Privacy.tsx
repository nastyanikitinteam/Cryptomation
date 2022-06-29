import cn from 'classnames';
import styles from './privacy.module.scss';

import Element from '../ElementAbsolute/ElementAbsolute';
import PrivacyIcon from '../../assets/images/Privacy/privacy.svg';

const Privacy = () => {
  return (
    <div className={cn('section', styles.section)}>
      <div className="wrapper">
        <div className={styles.el1}>
          <Element color="blue" />
        </div>
        <div className={styles.icon}>
          <PrivacyIcon />
        </div>
        <h1 className="title white">Privacy Policy</h1>
      </div>
    </div>
  );
};

export default Privacy;

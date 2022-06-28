import Blocks from './Blocks/Blocks';
import cn from 'classnames';

import styles from './helper.module.scss';

import Element from '../ElementAbsolute/ElementAbsolute';

const Helper = () => {
  return (
    <div className={cn('section', styles.section)}>
      <div className="wrapper">
        <div className={styles.el1}>
          <Element color="blue" />
        </div>
        <div className={styles.el2}>
          <Element color="yellow" />
        </div>
        <h2 className="title white">
          Helper API <br /> for you application
        </h2>
        <Blocks />
      </div>
    </div>
  );
};

export default Helper;

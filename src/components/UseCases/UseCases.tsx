import Blocks from './Blocks/Blocks';
import styles from './useCases.module.scss';

import Element from '../ElementAbsolute/ElementAbsolute';

const UseCases = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.el1}>
          <Element color="blue" />
        </div>
        <div className={styles.el2}>
          <Element color="yellow" />
        </div>
        <h2 className="title">Use cases</h2>
        <Blocks />
      </div>
    </div>
  );
};

export default UseCases;

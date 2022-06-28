import Blocks from './Blocks/Blocks';

import Element from '../ElementAbsolute/ElementAbsolute';
import styles from './powered.module.scss';

const Powered = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.el1}>
          <Element color="blue" />
        </div>
        <div className={styles.el2}>
          <Element color="yellow" />
        </div>
        <h2 className="title">Powered API</h2>
        <h3 className={styles.subtitle}>
          Rest API & Webhooks && GRPC methods.
        </h3>
        <div className={styles.text}>
          Our API allows you to
          <span className="yellowBlock">query historical data</span> that is
          currently not stored on your own database.
          <span className="yellowBlock">Provide blockchain data</span>
          and display it within your applications easily.
        </div>
        <Blocks />
      </div>
    </div>
  );
};

export default Powered;

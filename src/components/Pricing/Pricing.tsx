import Blocks from './Blocks/Blocks';
import cn from 'classnames';

import styles from './pricing.module.scss';

const Pricing = () => {
  return (
    <div className={cn('section', styles.section)}>
      <div className={styles.anchor} id="pricing"></div>

      <div className="wrapper">
        <h2 className="title white">Pricing</h2>
        <p className={styles.text}>
          The best choice for developers, hobbyists & web-scale blockchain apps.
        </p>
        <Blocks />
      </div>
    </div>
  );
};

export default Pricing;

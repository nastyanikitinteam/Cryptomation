import useMediaQuery from '../../utils/useMediaQuery';
import cn from 'classnames';

import Scheme from './Scheme/Scheme';
import SchemeMobile from './SchemeMobile/SchemeMobile';
import Element from '../ElementAbsolute/ElementAbsolute';

import styles from './automation.module.scss';

const Automation = () => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={cn('section', styles.section)}>
      <div className="wrapper">
        <div className={styles.el1}>
          <Element color="blue" />
        </div>
        <div className={styles.el2}>
          <Element color="yellow" />
        </div>
        <h2 className="title white">Automation without code</h2>
        <p className={styles.text}>
          <span className="yellowBlock">Build flow without code.</span> <br />{' '}
          Create events/alert on modification blockchain network <br /> (changed
          balance, send transaction from wallet and e.t.c) <br /> and send it
          information to you server with any conditions without code.
        </p>
        <div className={styles.scheme}>
          {isMobile ? <SchemeMobile /> : <Scheme />}
        </div>
      </div>
    </div>
  );
};

export default Automation;

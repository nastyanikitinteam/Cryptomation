import Link from 'next/link';
import Scheme from './Scheme/Scheme';
import SchemeMobile from './SchemeMobile/SchemeMobile';
import { useMediaQuery } from 'react-responsive';

import styles from './mainSection.module.scss';

const MainSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={styles.section}>
      <div className="wrapper wrapper-big">
        <h1 className="mainTitle">
          We give you <br className={styles.brMobile} /> access{' '}
          <br className={styles.brDesktop} /> to a sea of crypto data.
        </h1>
        <h2 className={styles.subtitle}>
          <span className="yellowBlock">Build your own apps</span> using this
          data for your automation, <br /> analytics through standard
          development tools such as{' '}
          <span className={styles.yellow}>Rest API</span> /
          <span className={styles.red}>gRPC</span> /
          <span className={styles.blue}>JDBC</span>.
        </h2>
        <div className={styles.scheme}>
          {isMobile ? <SchemeMobile /> : <Scheme />}
        </div>
        <div className={styles.button}>
          <Link href="/123">
            <a className="button">Create free project</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

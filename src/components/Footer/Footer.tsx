import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import QuestionList from './QuestionList/QuestionList';
import Bottom from './Bottom/Bottom';
import styles from './footer.module.scss';

import LogoSVG from '../../assets/images/logo.svg';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <h2 className="title ">
          have a <br /> question?
        </h2>
        <div className={styles.content}>
          {!isMobile && (
            <Link href="/123">
              <a className={styles.logo}>
                <LogoSVG />
              </a>
            </Link>
          )}

          <div className={styles.questionList}>
            <QuestionList />
          </div>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;

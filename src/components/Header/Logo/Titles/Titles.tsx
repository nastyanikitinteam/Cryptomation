import { FC, useEffect } from 'react';
import cn from 'classnames';

import Mation from '../../../../assets/images/mation.svg';
import Automation from '../../../../assets/images/automation.svg';
import Integration from '../../../../assets/images/integration.svg';
import Transformation from '../../../../assets/images/transformation.svg';

import styles from './titles.module.scss';

interface IProps {
  isAnimate: boolean;
  isStick: boolean;
  setIsAnimate: (val: boolean) => void;
}

const Titles: FC<IProps> = ({ isAnimate, setIsAnimate, isStick }) => {
  useEffect(() => {
    isAnimate === true &&
      setTimeout(() => {
        setIsAnimate(false);
      }, 4600);
  }, [isAnimate]);

  const arr = [
    {
      id: 0,
      icon: <Mation />,
    },
    {
      id: 1,
      icon: <Automation />,
    },
    {
      id: 2,
      icon: <Integration />,
    },
    {
      id: 3,
      icon: <Transformation />,
    },
    {
      id: 4,
      icon: <Mation />,
    },
  ];

  return (
    <g className={styles.bottom}>
      {arr.map(({ id, icon }) => {
        return (
          <g
            key={id}
            className={cn(
              [styles[`title-${id}`]],
              { [styles.isAnimate]: isAnimate },
              styles.title
            )}
          >
            {icon}
          </g>
        );
      })}

      <g
        className={cn(styles.dots, styles.dots1, {
          [styles.isAnimate]: isAnimate,
        })}
      >
        {isStick ? (
          <>
            <g className={styles.dot1}>
              <rect x="69" y="42" width="5" height="5" fill="#FFCF5E" />
            </g>
            <g className={styles.dot2}>
              <rect x="76" y="42" width="5" height="5" fill="#FF7340" />
            </g>
            <g className={styles.dot3}>
              <rect x="83" y="42" width="5" height="5" fill="#20C4FF" />
            </g>
          </>
        ) : (
          <>
            <g filter="url(#filter0_d_0_1383)" className={styles.dot1}>
              <rect x="69" y="42" width="5" height="5" fill="#FFCF5E" />
            </g>
            <g filter="url(#filter1_d_0_1383)" className={styles.dot2}>
              <rect x="76" y="42" width="5" height="5" fill="#FF7340" />
            </g>
            <g filter="url(#filter2_d_0_1383)" className={styles.dot3}>
              <rect x="83" y="42" width="5" height="5" fill="#20C4FF" />
            </g>
          </>
        )}
      </g>
    </g>
  );
};

export default Titles;

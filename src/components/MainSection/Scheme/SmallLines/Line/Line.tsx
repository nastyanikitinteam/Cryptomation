import { FC } from 'react';
import styles from './line.module.scss';
import cn from 'classnames';

interface IProps {
  id: any;
  path: string;
  stroke: string;
  isAnimate: boolean;
}

const Line: FC<IProps> = ({ id, path, stroke, isAnimate }) => {
  return (
    <>
      <path
        className={cn(
          [styles[`line-${id}`]],
          { [styles.isAnimate]: isAnimate },
          styles.line
        )}
        d={path}
        stroke={stroke}
      />
    </>
  );
};

export default Line;

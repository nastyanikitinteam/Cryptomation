import { FC } from 'react';
import styles from './line.module.scss';
import cn from 'classnames';

interface IProps {
  id: any;
  path: string;
  stroke: string;
}

const Line: FC<IProps> = ({ id, path, stroke }) => {
  return (
    <>
      <path
        className={cn([styles[`line-${id}`]], styles.line)}
        d={path}
        stroke={stroke}
      />
    </>
  );
};

export default Line;

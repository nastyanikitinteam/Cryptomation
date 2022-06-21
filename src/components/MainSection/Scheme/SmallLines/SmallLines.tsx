import { FC } from 'react';
import Line from './Line/Line';

interface IProps {
  isAnimate: boolean;
}

const GreyLines: FC<IProps> = ({ isAnimate }) => {
  const arr = [
    {
      id: 0,
      path: 'M164.5 64.9999C164.5 64.9999 382.5 -4.00011 620 241.5',
      stroke: '#A875FF',
    },
    {
      id: 1,
      path: 'M320 165C320 165 434.5 254 612 256.5',
      stroke: '#BBBBBB',
    },
    {
      id: 2,
      path: 'M367 291C367 291 485.5 324 610 275',
      stroke: '#E84142',
    },
    {
      id: 3,
      path: 'M205.5 267.5C205.5 267.5 282.057 355.576 385 363C489 370.5 555 346 620 295',
      stroke: '#F3BA2F',
    },
    {
      id: 4,
      path: 'M1185.5 64.9999C1185.5 64.9999 967.5 -4.00011 730 241.5',
      stroke: '#F7931A',
    },
    {
      id: 5,
      path: 'M1030 165C1030 165 915.5 254 738 256.5',
      stroke: '#BBBBBB',
    },
    {
      id: 6,
      path: 'M983 291C983 291 864.5 324 740 275',
      stroke: '#13B5EC',
    },
    {
      id: 7,
      path: 'M1144.5 267.5C1144.5 267.5 1067.94 355.576 965 363C861 370.5 795 346 730 295',
      stroke: '#2C7DF7',
    },
  ];

  return (
    <>
      {arr.map(({ id, path, stroke }) => {
        return (
          <Line
            id={id}
            key={id}
            path={path}
            stroke={stroke}
            isAnimate={isAnimate}
          ></Line>
        );
      })}
    </>
  );
};

export default GreyLines;
import { FC } from 'react';
import Line from './Line/Line';

interface IProps {
  isAnimate: boolean;
}

const GreyLines: FC<IProps> = ({ isAnimate }) => {
  const arr = [
    {
      id: 0,
      path: 'M59.501 130C59.501 130 88.0584 101 150.47 101',
      stroke: '#A875FF',
    },
    {
      id: 1,
      path: 'M67.2002 215.4C67.2002 215.4 76.3281 134.8 149.47 119',
      stroke: '#F3BA2F',
    },
    {
      id: 2,
      path: 'M135.054 167.2C135.054 167.2 150.908 153.708 155.6 143.11',
      stroke: '#BBBBBB',
    },
    {
      id: 3,
      path: 'M148.262 234.813C148.262 234.813 168.31 210.4 176.6 159.11',
      stroke: '#E84142',
    },
    {
      id: 4,
      path: 'M315.411 130C315.411 130 286.854 101 224.442 101',
      stroke: '#F7931A',
    },
    {
      id: 5,
      path: 'M307.712 215.4C307.712 215.4 298.584 134.8 225.442 119',
      stroke: '#2C7DF7',
    },
    {
      id: 6,
      path: 'M239.858 167.2C239.858 167.2 224.004 153.708 219.313 143.11',
      stroke: '#BBBBBB',
    },
    {
      id: 7,
      path: 'M226.65 234.813C226.65 234.813 206.602 210.4 198.312 159.11',
      stroke: '#13B5EC',
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

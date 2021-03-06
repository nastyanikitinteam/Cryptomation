import { useMemo } from 'react';
import styles from './blocks.module.scss';
import Block from '../Block/Block';

const Blocks = () => {
  const arr = useMemo(
    () => [
      {
        id: 0,
        title: 'Gas station API',
        text: 'Gas station api predict gas price for any network, use it for fast transaction.',
        link: '',
      },
      {
        id: 1,
        title: 'Scan similar api',
        text: 'Scan similar api - we have kept the polygonscan contract so that you can try our service with minimal effort.',
        link: '',
      },
      {
        id: 2,
        title: 'Cryptocurrency API',
        text: 'Get actual price for any coin/token by simply api.',
        link: '',
      },
    ],
    []
  );

  // arrayBuffer

  return (
    <div className={styles.blocks}>
      {arr.map(({ id, title, text, link }) => {
        return (
          <div className={styles.block} key={id}>
            <Block id={id} title={title} text={text} link={link} />
          </div>
        );
      })}
    </div>
  );
};

export default Blocks;

import React, {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  FC,
  ReactNode,
} from 'react';

interface IProps {
  children: ReactNode;
}

const BlocksHeight: FC<IProps> = ({ children }) => {
  const childrenRef = useRef([]);
  const [width] = useWindowSize();
  const [heightBlock, setHeightBlock] = useState(0);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    renderHeight();
  }, [width]);

  const renderHeight = () => {
    childrenRef.current.map((item) => {
      // eslint-disable-next-line @typescript-eslint/bon-ts-comment
      //@ts-ignore
      item.style.height = 'auto';
      // eslint-disable-next-line @typescript-eslint/bon-ts-comment
      //@ts-ignore
      if (item.offsetHeight > heightBlock) {
        // eslint-disable-next-line @typescript-eslint/bon-ts-comment
        //@ts-ignore
        setHeightBlock(item.offsetHeight);
      }
    });
  };

  useEffect(() => {
    childrenRef.current.map((item) => {
      // eslint-disable-next-line @typescript-eslint/bon-ts-comment
      //@ts-ignore
      return (item.style.height = heightBlock + 'px');
    });
  }, [heightBlock, width]);

  return (
    <>
      {React.Children.map(children, (child, index) =>
        // eslint-disable-next-line @typescript-eslint/bon-ts-comment
        //@ts-ignore
        React.cloneElement(child, {
          // eslint-disable-next-line @typescript-eslint/bon-ts-comment
          //@ts-ignore
          ref: (ref) => (childrenRef.current[index] = ref),
        })
      )}
    </>
  );
};

export default BlocksHeight;

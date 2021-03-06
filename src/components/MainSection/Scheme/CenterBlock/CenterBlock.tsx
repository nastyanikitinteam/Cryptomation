import { FC } from 'react';
import cn from 'classnames';
import styles from './centerBlock.module.scss';
import CircleSvg from '../../../../assets/images/mainSection/scheme-centerCircle.svg';

interface IProps {
  isAnimate: boolean;
}

const CenterBlock: FC<IProps> = ({ isAnimate }) => {
  return (
    <g>
      <svg
        width="1350"
        height="395"
        viewBox="0 0 1350 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_1213"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1350"
          height="395"
        >
          <rect width="1350" height="395" fill="white" />
        </mask>
        <g mask="url(#mask0_0_1213)">
          <circle cx="675" cy="268" r="53" fill="white" />
          <mask
            id="mask1_0_1213"
            maskUnits="userSpaceOnUse"
            x="650"
            y="240"
            width="50"
            height="57"
          >
            <rect
              x="650.909"
              y="240.697"
              width="48.1818"
              height="56.2121"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_0_1213)">
            <path
              d="M657.15 275.849C656.281 275.849 655.505 275.523 654.821 274.871C654.138 274.218 653.797 273.427 653.797 272.495V246.599C653.797 245.699 654.138 244.915 654.821 244.247C655.505 243.579 656.281 243.246 657.15 243.246H667.723C668.685 243.246 669.485 243.579 670.122 244.247C670.758 244.915 671.076 245.699 671.076 246.599V252.654L666.745 253.632V249.254C666.745 248.819 666.597 248.431 666.302 248.089C666.007 247.748 665.611 247.577 665.115 247.577H659.805C659.37 247.577 658.982 247.748 658.641 248.089C658.299 248.431 658.128 248.819 658.128 249.254V269.84C658.128 270.337 658.299 270.741 658.641 271.051C658.982 271.362 659.37 271.517 659.805 271.517H665.115C665.611 271.517 666.007 271.362 666.302 271.051C666.597 270.741 666.745 270.337 666.745 269.84V266.44L671.076 265.416V272.495C671.076 273.427 670.758 274.218 670.122 274.871C669.485 275.523 668.685 275.849 667.723 275.849H657.15Z"
              fill="#230F49"
            />
            <path
              d="M675.583 275.849V243.246H679.915L686.389 263.133L692.863 243.246H697.194V275.849H692.863V256.473L688.531 269.747H684.246L679.915 256.473V275.849H675.583Z"
              fill="#230F49"
            />
            <g className={cn({ [styles.animate]: isAnimate })}>
              <rect
                x="654.121"
                y="282.455"
                width="11.2424"
                height="11.2424"
                fill="#FFCF5E"
                className={styles.el1}
              />
              <rect
                x="670.182"
                y="282.455"
                width="11.2424"
                height="11.2424"
                fill="#FF7340"
                className={styles.el2}
              />
              <rect
                x="686.242"
                y="282.455"
                width="11.2424"
                height="11.2424"
                fill="#20C4FF"
                className={styles.el3}
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_0_1213"
            x="556.514"
            y="149.514"
            width="236.972"
            height="236.972"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="32.7429" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1213"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1213"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1213"
            x1="674.5"
            y1="210"
            x2="674.5"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="#390B34" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </g>
  );
};

export default CenterBlock;

import { FC } from 'react';

import styles from './logo.module.scss';

import Titles from './Titles/Titles';

interface IProps {
  isAnimate: boolean;
  isStick: boolean;
  setIsAnimate: (val: boolean) => void;
}

const Logo: FC<IProps> = ({ isAnimate, setIsAnimate, isStick }) => {
  return (
    <>
      <svg
        width="185"
        height="65"
        viewBox="0 0 185 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
      >
        <mask
          id="mask0_0_1383"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="105"
          height="65"
        >
          <rect width="105" height="65" fill="white" />
        </mask>
        <path
          d="M3.886 22C3.34467 22 2.86134 21.797 2.436 21.391C2.01067 20.985 1.798 20.492 1.798 19.912V3.78795C1.798 3.22728 2.01067 2.73912 2.436 2.32345C2.86134 1.90778 3.34467 1.69995 3.886 1.69995H10.469C11.0683 1.69995 11.5662 1.90778 11.9625 2.32345C12.3588 2.73912 12.557 3.22728 12.557 3.78795V7.55795L9.86 8.16695V5.44095C9.86 5.17028 9.76817 4.92862 9.5845 4.71595C9.40084 4.50328 9.15434 4.39695 8.845 4.39695H5.539C5.26834 4.39695 5.02667 4.50328 4.814 4.71595C4.60134 4.92862 4.495 5.17028 4.495 5.44095V18.259C4.495 18.5683 4.60134 18.8196 4.814 19.013C5.02667 19.2063 5.26834 19.303 5.539 19.303H8.845C9.15434 19.303 9.40084 19.2063 9.5845 19.013C9.76817 18.8196 9.86 18.5683 9.86 18.259V16.142L12.557 15.504V19.912C12.557 20.492 12.3588 20.985 11.9625 21.391C11.5662 21.797 11.0683 22 10.469 22H3.886Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.435 1.69995V22H17.132V12.111H19.829L22.526 22H25.194L22.526 12.111H23.135C23.6957 12.111 24.179 11.908 24.585 11.502C24.991 11.096 25.194 10.603 25.194 10.023V3.78795C25.194 3.20795 24.991 2.71495 24.585 2.30895C24.179 1.90295 23.6957 1.69995 23.135 1.69995H14.435ZM21.482 9.41395H17.132V4.39695H21.482C21.7527 4.39695 21.9943 4.49845 22.207 4.70145C22.4197 4.90445 22.526 5.15095 22.526 5.44095V8.36995C22.526 8.65995 22.4197 8.90645 22.207 9.10945C21.9943 9.31245 21.7527 9.41395 21.482 9.41395Z"
          fill="white"
        />
        <path
          d="M29.885 22V12.14L25.912 1.69995H28.609L31.248 8.63095L33.858 1.69995H36.555L32.582 12.14V22H29.885Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.651 1.69995V22H42.348V12.111H48.351C48.9117 12.111 49.3998 11.908 49.8155 11.502C50.2312 11.096 50.439 10.603 50.439 10.023V3.78795C50.439 3.20795 50.2312 2.71495 49.8155 2.30895C49.3998 1.90295 48.9117 1.69995 48.351 1.69995H39.651ZM46.698 9.41395H42.348V4.39695H46.698C46.988 4.39695 47.2345 4.49845 47.4375 4.70145C47.6405 4.90445 47.742 5.14128 47.742 5.41195V8.36995C47.742 8.65995 47.6405 8.90645 47.4375 9.10945C47.2345 9.31245 46.988 9.41395 46.698 9.41395Z"
          fill="white"
        />
        <path
          d="M55.71 22V4.39695H51.679V1.69995H62.438V4.39695H58.407V22H55.71Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M63.997 21.391C64.403 21.797 64.8767 22 65.418 22H72.001C72.6197 22 73.1272 21.797 73.5235 21.391C73.9198 20.985 74.118 20.4823 74.118 19.883V3.81695C74.118 3.21762 73.9198 2.71495 73.5235 2.30895C73.1272 1.90295 72.6197 1.69995 72.001 1.69995H65.418C64.8767 1.69995 64.403 1.90295 63.997 2.30895C63.591 2.71495 63.388 3.21762 63.388 3.81695V19.883C63.388 20.4823 63.591 20.985 63.997 21.391ZM70.348 19.332H67.071C66.8003 19.332 66.5635 19.2256 66.3605 19.013C66.1575 18.8003 66.056 18.5393 66.056 18.23V5.46995C66.056 5.14128 66.1575 4.87545 66.3605 4.67245C66.5635 4.46945 66.8003 4.36795 67.071 4.36795H70.348C70.6767 4.36795 70.9425 4.46945 71.1455 4.67245C71.3485 4.87545 71.45 5.14128 71.45 5.46995V18.23C71.45 18.5393 71.3485 18.8003 71.1455 19.013C70.9425 19.2256 70.6767 19.332 70.348 19.332Z"
          fill="white"
        />

        <Titles
          isAnimate={isAnimate}
          setIsAnimate={setIsAnimate}
          isStick={isStick}
        />

        <defs>
          <filter
            id="filter0_d_0_1383"
            x="68"
            y="41"
            width="11"
            height="11"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1383"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1383"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_0_1383"
            x="75"
            y="41"
            width="11"
            height="11"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1383"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1383"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_0_1383"
            x="82"
            y="41"
            width="11"
            height="11"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1383"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1383"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_f_0_1383"
            x="49.6903"
            y="28.6903"
            width="40.6194"
            height="38.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_0_1383"
            />
          </filter>
          <filter
            id="filter4_f_0_1383"
            x="61.6903"
            y="28.6903"
            width="40.6194"
            height="38.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_0_1383"
            />
          </filter>
          <filter
            id="filter5_f_0_1383"
            x="71.6903"
            y="28.6903"
            width="40.6194"
            height="38.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_0_1383"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Logo;

import { useState, useEffect } from 'react';
import styles from './scheme.module.scss';

import Top from './Top/Top';
import Center from './Center/Center';
import Left from './Left/Left';
import Right from './Right/Right';

const Scheme = () => {
  const [isActiveTop, setIsActiveTop] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveTransaction, setIsActiveTransaction] = useState(false);
  const [isActiveYes, setIsActiveYes] = useState(false);
  const [isActiveLeft, setIsActiveLeft] = useState(false);
  const [isActiveRight, setIsActiveRight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActiveTop(true);
    }, 1000);

    setTimeout(() => {
      setIsActiveTransaction(true);
    }, 1500);

    setTimeout(() => {
      setIsActive(true);
      setTimeout(() => {
        if (isActiveYes) {
          setIsActiveRight(true);
          setIsActiveLeft(false);
        } else {
          setIsActiveLeft(true);
          setIsActiveRight(false);
        }
      }, 700);
    }, 2000);

    setTimeout(() => {
      setIsActiveTop(false);
      setIsActive(false);
      setIsActiveLeft(false);
      setIsActiveRight(false);
      setIsActiveTransaction(false);
      if (isActiveYes) {
        setIsActiveYes(false);
      } else {
        setIsActiveYes(true);
      }
    }, 5200);
  }, [isActiveYes]);

  return (
    <>
      <svg
        width="659"
        height="300"
        viewBox="0 0 659 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="automation-top">
          <Top
            isActive={isActiveTop}
            isActiveTransaction={isActiveTransaction}
          />
        </g>
        <g id="automation-center">
          <Center isActive={isActive} />
        </g>
        <g id="automation-left">
          <Left isActive={isActiveLeft} />
        </g>
        <g id="automation-right">
          <Right isActive={isActiveRight} />
        </g>

        <defs>
          <filter
            id="filter0_b_6_94"
            x="121.817"
            y="177.817"
            width="107.366"
            height="107.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6_94"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6_94"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_6_94"
            x="496.817"
            y="177.817"
            width="107.366"
            height="107.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6_94"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6_94"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_6_94"
            x="562.817"
            y="66.8172"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6_94"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6_94"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_b_6_94"
            x="278.817"
            y="84.8172"
            width="168.366"
            height="77.3656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6_94"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6_94"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_b_6_94"
            x="301.817"
            y="-27.1828"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6_94"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6_94"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_6_94"
            x1="255"
            y1="242"
            x2="255"
            y2="158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="#390B34" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6_94"
            x1="470"
            y1="242"
            x2="470"
            y2="158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="#390B34" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_6_94"
            x1="363"
            y1="112"
            x2="363"
            y2="67"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.902664" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_6_94"
            x1="363"
            y1="135"
            x2="363"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.902664" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <defs>
          <filter
            id="filter0_b_11_73"
            x="301.817"
            y="-27.1828"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_11_73"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_11_73"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_11_73"
            x1="-144.912"
            y1="92.1795"
            x2="-144.025"
            y2="277.248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50104C" />
            <stop offset="1" stopColor="#11073B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11_73"
            x1="255"
            y1="242"
            x2="255"
            y2="158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="#390B34" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_11_73"
            x1="470"
            y1="242"
            x2="470"
            y2="158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.514733" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="#390B34" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_11_73"
            x1="540.5"
            y1="95.0708"
            x2="542.642"
            y2="263.07"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50104C" />
            <stop offset="1" stopColor="#11073B" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_11_73"
            x1="363"
            y1="112"
            x2="363"
            y2="67"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCA5E" />
            <stop
              offset="0.514733"
              stopColor="#FFC85E"
              stopOpacity="0.902664"
            />
            <stop offset="1" stopColor="#FFBE5E" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_11_73"
            x1="363"
            y1="135"
            x2="363"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCA5E" />
            <stop
              offset="0.514733"
              stopColor="#FFC85E"
              stopOpacity="0.902664"
            />
            <stop offset="1" stopColor="#FFBE5E" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_11_73"
            x1="224.218"
            y1="112.357"
            x2="224.362"
            y2="168.366"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50104C" />
            <stop offset="1" stopColor="#11073B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Scheme;

import { useState, useEffect } from 'react';
import styles from './schemeMobile.module.scss';

import Top from './Top/Top';
import Center from './Center/Center';
import Left from './Left/Left';
import Right from './Right/Right';

const SchemeMobile = () => {
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
        width="335"
        height="415"
        viewBox="0 0 335 415"
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
            id="filter0_b_12_35"
            x="2.81718"
            y="235.817"
            width="107.366"
            height="107.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_12_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_12_35"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_12_35"
            x="224.817"
            y="235.817"
            width="107.366"
            height="107.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_12_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_12_35"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_12_35"
            x="105.817"
            y="-27.1828"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_12_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_12_35"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_b_12_35"
            x="-27.1828"
            y="311.817"
            width="256.366"
            height="130.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_12_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_12_35"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_b_12_35"
            x="238.817"
            y="311.817"
            width="123.366"
            height="123.366"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="13.5914" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_12_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_12_35"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_12_35"
            x1="70.4263"
            y1="340.723"
            x2="70.4263"
            y2="241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#390B34" stop-opacity="0.01" />
            <stop
              offset="0.210052"
              stop-color="white"
              stop-opacity="0.903398"
            />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12_35"
            x1="264"
            y1="340.723"
            x2="264"
            y2="241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#390B34" stop-opacity="0.01" />
            <stop
              offset="0.210052"
              stop-color="white"
              stop-opacity="0.903398"
            />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_12_35"
            x1="167"
            y1="90"
            x2="167"
            y2="67"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop
              offset="0.514733"
              stop-color="white"
              stop-opacity="0.902664"
            />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_12_35"
            x1="167"
            y1="111"
            x2="167"
            y2="133"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop
              offset="0.514733"
              stop-color="white"
              stop-opacity="0.902664"
            />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_12_35"
            x1="28.2177"
            y1="89.3569"
            x2="28.3618"
            y2="145.366"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#50104C" />
            <stop offset="1" stop-color="#11073B" />
          </linearGradient>
        </defs>

        <defs>
          <filter
            id="filter0_b_3_103"
            x="105.817"
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
              result="effect1_backgroundBlur_3_103"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_3_103"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3_103"
            x1="-144.912"
            y1="340.179"
            x2="-144.025"
            y2="525.248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50104C" />
            <stop offset="1" stopColor="#11073B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_103"
            x1="70.4263"
            y1="340.723"
            x2="70.4263"
            y2="241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#390B34" stopOpacity="0.01" />
            <stop offset="0.210052" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3_103"
            x1="264"
            y1="340.723"
            x2="264"
            y2="241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#390B34" stopOpacity="0.01" />
            <stop offset="0.210052" stopColor="white" stopOpacity="0.903398" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3_103"
            x1="167"
            y1="90"
            x2="167"
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
            id="paint4_linear_3_103"
            x1="167"
            y1="111"
            x2="167"
            y2="133"
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
            id="paint5_linear_3_103"
            x1="28.2177"
            y1="89.3569"
            x2="28.3618"
            y2="145.366"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50104C" />
            <stop offset="1" stopColor="#11073B" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_3_103"
            x1="216.5"
            y1="340.071"
            x2="218.642"
            y2="508.07"
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

export default SchemeMobile;

import { FC } from 'react';

interface IProps {
  color: string;
}

const ElementAbsolute: FC<IProps> = ({ color }) => {
  return (
    <>
      <svg
        className="svgNoHidden"
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {color === 'blue' ? (
          <>
            <g>
              <rect
                width="48"
                height="40"
                rx="12"
                fill="url(#paint0_linear_0_1124)"
              />
              <g>
                <path
                  d="M18.12 28.1682C17.4907 28.1682 16.9494 28.0642 16.496 27.8562C16.0427 27.6482 15.6987 27.3442 15.464 26.9442C15.2294 26.5442 15.128 26.0668 15.16 25.5122L15.32 22.8882C15.352 22.3228 15.2667 21.9148 15.064 21.6642C14.8614 21.4135 14.4134 21.2882 13.72 21.2882H11.96V20.0082H13.72C14.4134 20.0082 14.8614 19.8828 15.064 19.6322C15.2667 19.3815 15.352 18.9735 15.32 18.4082L15.16 15.7842C15.128 15.2188 15.2294 14.7388 15.464 14.3442C15.6987 13.9495 16.0427 13.6482 16.496 13.4402C16.9494 13.2322 17.4907 13.1282 18.12 13.1282H18.84V14.4082H18.12C17.6187 14.4082 17.2347 14.5228 16.968 14.7522C16.7014 14.9815 16.5787 15.3255 16.6 15.7842L16.76 18.4082C16.8027 19.1015 16.6374 19.6535 16.264 20.0642C15.8907 20.4748 15.3627 20.6802 14.68 20.6802V20.6002C15.352 20.6002 15.8774 20.8082 16.256 21.2242C16.6347 21.6402 16.8027 22.1948 16.76 22.8882L16.6 25.5122C16.5787 25.9708 16.7014 26.3148 16.968 26.5442C17.2347 26.7735 17.6187 26.8882 18.12 26.8882H18.84V28.1682H18.12Z"
                  fill="white"
                />
                <path
                  d="M20.9 28.1682L26.58 13.1282H28.1L22.42 28.1682H20.9Z"
                  fill="white"
                />
                <path
                  d="M30.16 28.1682V26.8882H30.88C31.3814 26.8882 31.7654 26.7735 32.032 26.5442C32.2987 26.3148 32.4214 25.9708 32.4 25.5122L32.24 22.8882C32.1974 22.1948 32.3654 21.6402 32.744 21.2242C33.1227 20.8082 33.648 20.6002 34.32 20.6002V20.6802C33.6374 20.6802 33.1094 20.4748 32.736 20.0642C32.3627 19.6535 32.1974 19.1015 32.24 18.4082L32.4 15.7842C32.4214 15.3255 32.2987 14.9815 32.032 14.7522C31.7654 14.5228 31.3814 14.4082 30.88 14.4082H30.16V13.1282H30.88C31.5094 13.1282 32.0507 13.2322 32.504 13.4402C32.9574 13.6482 33.3014 13.9495 33.536 14.3442C33.7707 14.7388 33.872 15.2188 33.84 15.7842L33.68 18.4082C33.648 18.9735 33.7334 19.3815 33.936 19.6322C34.1387 19.8828 34.5867 20.0082 35.28 20.0082H37.04V21.2882H35.28C34.5974 21.2882 34.152 21.4135 33.944 21.6642C33.736 21.9148 33.648 22.3228 33.68 22.8882L33.84 25.5122C33.872 26.0668 33.7707 26.5442 33.536 26.9442C33.3014 27.3442 32.9574 27.6482 32.504 27.8562C32.0507 28.0642 31.5094 28.1682 30.88 28.1682H30.16Z"
                  fill="white"
                />
              </g>
              <animateMotion
                dur="30s"
                repeatCount="indefinite"
                path="M98.4999 51C66.7252 56.7867 33.5 11 13.0001 23.5C-7.0387 35.7188 -3.12619 61.9169 26.8867 70.9071C28.2197 71.3064 29.6832 71.0871 30.808 70.2679C56.2097 51.7697 50.4805 3.93238 93.0001 1C119 16.5 114.5 39.5 98.4999 51Z"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_1124"
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#009FFA" />
                <stop offset="1" stop-color="#0066F3" />
              </linearGradient>
            </defs>
          </>
        ) : (
          <>
            <g>
              <rect
                width="40"
                height="33"
                rx="10"
                fill="url(#paint0_linear_0_1130)"
              />
              <g>
                <path
                  d="M14.5799 23.5399C14.0293 23.5399 13.5556 23.4489 13.1589 23.2669C12.7623 23.0849 12.4613 22.8189 12.2559 22.4689C12.0506 22.1189 11.9619 21.7012 11.9899 21.2159L12.1299 18.9199C12.1579 18.4252 12.0833 18.0682 11.9059 17.8489C11.7286 17.6295 11.3366 17.5199 10.7299 17.5199H9.18994V16.3999H10.7299C11.3366 16.3999 11.7286 16.2902 11.9059 16.0709C12.0833 15.8515 12.1579 15.4945 12.1299 14.9999L11.9899 12.7039C11.9619 12.2092 12.0506 11.7892 12.2559 11.4439C12.4613 11.0985 12.7623 10.8349 13.1589 10.6529C13.5556 10.4709 14.0293 10.3799 14.5799 10.3799H15.2099V11.4999H14.5799C14.1413 11.4999 13.8053 11.6002 13.5719 11.8009C13.3386 12.0015 13.2313 12.3025 13.2499 12.7039L13.3899 14.9999C13.4273 15.6065 13.2826 16.0895 12.9559 16.4489C12.6293 16.8082 12.1673 16.9879 11.5699 16.9879V16.9179C12.1579 16.9179 12.6176 17.0999 12.9489 17.4639C13.2803 17.8279 13.4273 18.3132 13.3899 18.9199L13.2499 21.2159C13.2313 21.6172 13.3386 21.9182 13.5719 22.1189C13.8053 22.3195 14.1413 22.4199 14.5799 22.4199H15.2099V23.5399H14.5799Z"
                  fill="white"
                />
                <path
                  d="M16.95 23.5399L21.92 10.3799H23.25L18.28 23.5399H16.95Z"
                  fill="white"
                />
                <path
                  d="M24.99 23.5399V22.4199H25.62C26.0587 22.4199 26.3947 22.3195 26.628 22.1189C26.8613 21.9182 26.9687 21.6172 26.95 21.2159L26.81 18.9199C26.7727 18.3132 26.9197 17.8279 27.251 17.4639C27.5823 17.0999 28.042 16.9179 28.63 16.9179V16.9879C28.0327 16.9879 27.5707 16.8082 27.244 16.4489C26.9173 16.0895 26.7727 15.6065 26.81 14.9999L26.95 12.7039C26.9687 12.3025 26.8613 12.0015 26.628 11.8009C26.3947 11.6002 26.0587 11.4999 25.62 11.4999H24.99V10.3799H25.62C26.1707 10.3799 26.6443 10.4709 27.041 10.6529C27.4377 10.8349 27.7387 11.0985 27.944 11.4439C28.1493 11.7892 28.238 12.2092 28.21 12.7039L28.07 14.9999C28.042 15.4945 28.1167 15.8515 28.294 16.0709C28.4713 16.2902 28.8633 16.3999 29.47 16.3999H31.01V17.5199H29.47C28.8727 17.5199 28.483 17.6295 28.301 17.8489C28.119 18.0682 28.042 18.4252 28.07 18.9199L28.21 21.2159C28.238 21.7012 28.1493 22.1189 27.944 22.4689C27.7387 22.8189 27.4377 23.0849 27.041 23.2669C26.6443 23.4489 26.1707 23.5399 25.62 23.5399H24.99Z"
                  fill="white"
                />
              </g>
              <animateMotion
                dur="30s"
                repeatCount="indefinite"
                path="M59.2197 89.786C36.833 66.506 56.6221 13.5086 34.8736 3.33519C13.6142 -6.60936 -6.05459 11.1328 3.04415 41.113C3.44825 42.4445 4.44001 43.5428 5.74441 44.0274C35.201 54.9699 71.8982 23.752 97.8458 57.5638C99.3014 87.7983 77.6474 96.7622 59.2197 89.786Z"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_1130"
                x1="-7.04476"
                y1="0"
                x2="-7.04476"
                y2="44.6238"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFCF5E" />
                <stop offset="1" stop-color="#FFB55E" />
              </linearGradient>
            </defs>
          </>
        )}
      </svg>
    </>
  );
};

export default ElementAbsolute;

import { FC } from 'react';
import cn from 'classnames';
import styles from './top.module.scss';

interface IProps {
  isActive: boolean;
  isActiveTransaction: boolean;
}

const Top: FC<IProps> = ({ isActive, isActiveTransaction }) => {
  return (
    <>
      <g className={styles.blackCircle}>
        <g className={cn(styles.block, { [styles.active]: isActive })}>
          <g>
            <circle cx="167.5" cy="34.5" r="34.5" fill="black" />
            <g>
              <path
                d="M167.496 14L167.223 14.9116V41.3604L167.496 41.6281L179.992 34.3711L167.496 14Z"
                fill="#343434"
              />
              <path
                d="M167.496 14L155 34.3711L167.496 41.6281V28.7906V14Z"
                fill="#BCBCBC"
              />
              <path
                d="M167.496 43.9525L167.342 44.1369V53.5584L167.496 53.9999L180 36.6992L167.496 43.9525Z"
                fill="#3C3C3B"
              />
              <path
                d="M167.496 53.9999V43.9525L155 36.6992L167.496 53.9999Z"
                fill="#BCBCBC"
              />
              <path
                d="M167.496 41.6281L179.992 34.371L167.496 28.7905V41.6281Z"
                fill="#141414"
              />
              <path
                d="M155 34.371L167.496 41.6281V28.7905L155 34.371Z"
                fill="#393939"
              />
            </g>
          </g>
          <path
            className={styles.line}
            d="M167.5 67V89.5"
            stroke="url(#paint3_linear_3_103)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4"
          />
          <path
            className={styles.line2}
            d="M168.5 132.5L168 111.5"
            stroke="url(#paint4_linear_3_103)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4"
          />
        </g>
        <g
          className={cn(styles.block, {
            [styles.active]: isActiveTransaction,
          })}
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M110 97C110 94.1997 110 92.7996 110.545 91.73C111.024 90.7892 111.789 90.0243 112.73 89.545C113.8 89 115.2 89 118 89H216C218.8 89 220.2 89 221.27 89.545C222.211 90.0243 222.976 90.7892 223.455 91.73C224 92.7996 224 94.1997 224 97V104C224 106.8 224 108.2 223.455 109.27C222.976 110.211 222.211 110.976 221.27 111.455C220.2 112 218.8 112 216 112H118C115.2 112 113.8 112 112.73 111.455C111.789 110.976 111.024 110.211 110.545 109.27C110 108.2 110 106.8 110 104V97Z"
              fill="url(#paint5_linear_3_103)"
            />
            <path
              d="M121.172 106V94.8H122.66L125.636 102.272V94.8H127.124V106H125.636L122.66 98.528V106H121.172ZM127.969 106V94.8H133.921V96.272H129.457V99.056H132.433L132.097 100.544H129.457V104.512H133.921V106H127.969ZM136.641 106L134.449 94.8H135.937L137.425 102.368L138.913 94.8H140.401L141.873 102.368L143.361 94.8H144.849L142.657 106H141.105L139.649 98.576L138.193 106H136.641ZM150.066 106V96.288H147.842V94.8H153.778V96.288H151.554V106H150.066ZM154.218 106V94.8H159.018C159.327 94.8 159.594 94.912 159.818 95.136C160.042 95.36 160.154 95.632 160.154 95.952V99.392C160.154 99.712 160.042 99.984 159.818 100.208C159.594 100.432 159.327 100.544 159.018 100.544H158.682L160.154 106H158.682L157.194 100.544H155.706V106H154.218ZM155.706 99.056H158.106C158.255 99.056 158.388 99.0027 158.506 98.896C158.623 98.7787 158.682 98.64 158.682 98.48V96.864C158.682 96.704 158.623 96.5707 158.506 96.464C158.388 96.3467 158.255 96.288 158.106 96.288H155.706V99.056ZM160.485 106.016L162.741 94.816H164.197L166.421 106.016H164.933L164.501 103.92H162.373L161.973 106.016H160.485ZM162.661 102.448H164.245L163.477 98.464L162.661 102.448ZM166.781 106V94.8H168.269L171.245 102.272V94.8H172.733V106H171.245L168.269 98.528V106H166.781ZM174.385 106C174.065 106 173.793 105.888 173.569 105.664C173.345 105.44 173.233 105.168 173.233 104.848V102.368L174.721 102.704V103.936C174.721 104.096 174.775 104.235 174.881 104.352C174.999 104.459 175.132 104.512 175.281 104.512H177.105C177.265 104.512 177.399 104.459 177.505 104.352C177.623 104.235 177.681 104.096 177.681 103.936V101.12C177.681 100.96 177.623 100.827 177.505 100.72C177.399 100.603 177.265 100.544 177.105 100.544H174.385C174.065 100.544 173.793 100.432 173.569 100.208C173.345 99.984 173.233 99.712 173.233 99.392V95.952C173.233 95.632 173.345 95.36 173.569 95.136C173.793 94.912 174.065 94.8 174.385 94.8H178.017C178.337 94.8 178.609 94.912 178.833 95.136C179.057 95.36 179.169 95.632 179.169 95.952V97.68L177.681 97.328V96.864C177.681 96.704 177.623 96.5707 177.505 96.464C177.399 96.3467 177.265 96.288 177.105 96.288H175.281C175.132 96.288 174.999 96.3467 174.881 96.464C174.775 96.5707 174.721 96.704 174.721 96.864V98.48C174.721 98.64 174.775 98.7787 174.881 98.896C174.999 99.0027 175.132 99.056 175.281 99.056H178.017C178.337 99.056 178.609 99.168 178.833 99.392C179.057 99.616 179.169 99.888 179.169 100.208V104.848C179.169 105.168 179.057 105.44 178.833 105.664C178.609 105.888 178.337 106 178.017 106H174.385ZM179.344 106.016L181.6 94.816H183.056L185.28 106.016H183.792L183.36 103.92H181.232L180.832 106.016H179.344ZM181.52 102.448H183.104L182.336 98.464L181.52 102.448ZM187.433 106C187.134 106 186.868 105.888 186.633 105.664C186.398 105.44 186.281 105.168 186.281 104.848V95.952C186.281 95.6427 186.398 95.376 186.633 95.152C186.868 94.9173 187.134 94.8 187.433 94.8H191.065C191.396 94.8 191.668 94.9173 191.881 95.152C192.105 95.376 192.217 95.6427 192.217 95.952V98.032L190.729 98.368V96.864C190.729 96.7147 190.676 96.5813 190.569 96.464C190.473 96.3467 190.34 96.288 190.169 96.288H188.345C188.196 96.288 188.062 96.3467 187.945 96.464C187.828 96.5813 187.769 96.7147 187.769 96.864V103.936C187.769 104.107 187.828 104.245 187.945 104.352C188.062 104.459 188.196 104.512 188.345 104.512H190.169C190.34 104.512 190.473 104.459 190.569 104.352C190.676 104.245 190.729 104.107 190.729 103.936V102.768L192.217 102.416V104.848C192.217 105.168 192.105 105.44 191.881 105.664C191.668 105.888 191.396 106 191.065 106H187.433ZM194.91 106V96.288H192.686V94.8H198.622V96.288H196.398V106H194.91ZM199.094 106V94.8H200.582V106H199.094ZM202.385 106C202.087 106 201.825 105.888 201.601 105.664C201.377 105.44 201.265 105.163 201.265 104.832V95.968C201.265 95.6373 201.377 95.36 201.601 95.136C201.825 94.912 202.087 94.8 202.385 94.8H206.017C206.359 94.8 206.636 94.912 206.849 95.136C207.073 95.36 207.185 95.6373 207.185 95.968V104.832C207.185 105.163 207.073 105.44 206.849 105.664C206.636 105.888 206.359 106 206.017 106H202.385ZM203.297 104.528H205.105C205.287 104.528 205.431 104.469 205.537 104.352C205.655 104.235 205.713 104.091 205.713 103.92V96.88C205.713 96.6987 205.655 96.5547 205.537 96.448C205.431 96.3307 205.287 96.272 205.105 96.272H203.297C203.148 96.272 203.015 96.3307 202.897 96.448C202.791 96.5547 202.737 96.6987 202.737 96.88V103.92C202.737 104.091 202.791 104.235 202.897 104.352C203.015 104.469 203.148 104.528 203.297 104.528ZM207.875 106V94.8H209.363L212.339 102.272V94.8H213.827V106H212.339L209.363 98.528V106H207.875Z"
              fill="#FFCB5E"
            />
          </g>
        </g>

        <g className={cn(styles.block, { [styles.active]: !isActive })}>
          <g opacity="0.3">
            <g filter="url(#filter2_b_12_35)">
              <circle cx="167.5" cy="34.5" r="34.5" fill="black" />
            </g>
            <g>
              <path
                d="M167.496 14L167.223 14.9116V41.3604L167.496 41.6281L179.992 34.3711L167.496 14Z"
                fill="#343434"
              />
              <path
                d="M167.496 14L155 34.3711L167.496 41.6281V28.7906V14Z"
                fill="#BCBCBC"
              />
              <path
                d="M167.496 43.9525L167.342 44.1369V53.5584L167.496 53.9999L180 36.6992L167.496 43.9525Z"
                fill="#3C3C3B"
              />
              <path
                d="M167.496 53.9999V43.9525L155 36.6992L167.496 53.9999Z"
                fill="#BCBCBC"
              />
              <path
                d="M167.496 41.6281L179.992 34.371L167.496 28.7905V41.6281Z"
                fill="#141414"
              />
              <path
                d="M155 34.371L167.496 41.6281V28.7905L155 34.371Z"
                fill="#393939"
              />
            </g>
          </g>
          <path
            opacity="0.3"
            d="M167.5 67V89.5"
            stroke="url(#paint2_linear_12_35)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
          />
          <path
            opacity="0.3"
            d="M168.5 132.5L168 111.5"
            stroke="url(#paint3_linear_12_35)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
          />
        </g>
        <g
          className={cn(styles.block, {
            [styles.active]: !isActiveTransaction,
          })}
        >
          <g opacity="0.3">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M110 97C110 94.1997 110 92.7996 110.545 91.73C111.024 90.7892 111.789 90.0243 112.73 89.545C113.8 89 115.2 89 118 89H216C218.8 89 220.2 89 221.27 89.545C222.211 90.0243 222.976 90.7892 223.455 91.73C224 92.7996 224 94.1997 224 97V104C224 106.8 224 108.2 223.455 109.27C222.976 110.211 222.211 110.976 221.27 111.455C220.2 112 218.8 112 216 112H118C115.2 112 113.8 112 112.73 111.455C111.789 110.976 111.024 110.211 110.545 109.27C110 108.2 110 106.8 110 104V97Z"
              fill="url(#paint4_linear_12_35)"
            />
            <path
              d="M121.172 106V94.8H122.66L125.636 102.272V94.8H127.124V106H125.636L122.66 98.528V106H121.172ZM127.969 106V94.8H133.921V96.272H129.457V99.056H132.433L132.097 100.544H129.457V104.512H133.921V106H127.969ZM136.641 106L134.449 94.8H135.937L137.425 102.368L138.913 94.8H140.401L141.873 102.368L143.361 94.8H144.849L142.657 106H141.105L139.649 98.576L138.193 106H136.641ZM150.066 106V96.288H147.842V94.8H153.778V96.288H151.554V106H150.066ZM154.218 106V94.8H159.018C159.327 94.8 159.594 94.912 159.818 95.136C160.042 95.36 160.154 95.632 160.154 95.952V99.392C160.154 99.712 160.042 99.984 159.818 100.208C159.594 100.432 159.327 100.544 159.018 100.544H158.682L160.154 106H158.682L157.194 100.544H155.706V106H154.218ZM155.706 99.056H158.106C158.255 99.056 158.388 99.0027 158.506 98.896C158.623 98.7787 158.682 98.64 158.682 98.48V96.864C158.682 96.704 158.623 96.5707 158.506 96.464C158.388 96.3467 158.255 96.288 158.106 96.288H155.706V99.056ZM160.485 106.016L162.741 94.816H164.197L166.421 106.016H164.933L164.501 103.92H162.373L161.973 106.016H160.485ZM162.661 102.448H164.245L163.477 98.464L162.661 102.448ZM166.781 106V94.8H168.269L171.245 102.272V94.8H172.733V106H171.245L168.269 98.528V106H166.781ZM174.385 106C174.065 106 173.793 105.888 173.569 105.664C173.345 105.44 173.233 105.168 173.233 104.848V102.368L174.721 102.704V103.936C174.721 104.096 174.775 104.235 174.881 104.352C174.999 104.459 175.132 104.512 175.281 104.512H177.105C177.265 104.512 177.399 104.459 177.505 104.352C177.623 104.235 177.681 104.096 177.681 103.936V101.12C177.681 100.96 177.623 100.827 177.505 100.72C177.399 100.603 177.265 100.544 177.105 100.544H174.385C174.065 100.544 173.793 100.432 173.569 100.208C173.345 99.984 173.233 99.712 173.233 99.392V95.952C173.233 95.632 173.345 95.36 173.569 95.136C173.793 94.912 174.065 94.8 174.385 94.8H178.017C178.337 94.8 178.609 94.912 178.833 95.136C179.057 95.36 179.169 95.632 179.169 95.952V97.68L177.681 97.328V96.864C177.681 96.704 177.623 96.5707 177.505 96.464C177.399 96.3467 177.265 96.288 177.105 96.288H175.281C175.132 96.288 174.999 96.3467 174.881 96.464C174.775 96.5707 174.721 96.704 174.721 96.864V98.48C174.721 98.64 174.775 98.7787 174.881 98.896C174.999 99.0027 175.132 99.056 175.281 99.056H178.017C178.337 99.056 178.609 99.168 178.833 99.392C179.057 99.616 179.169 99.888 179.169 100.208V104.848C179.169 105.168 179.057 105.44 178.833 105.664C178.609 105.888 178.337 106 178.017 106H174.385ZM179.344 106.016L181.6 94.816H183.056L185.28 106.016H183.792L183.36 103.92H181.232L180.832 106.016H179.344ZM181.52 102.448H183.104L182.336 98.464L181.52 102.448ZM187.433 106C187.134 106 186.868 105.888 186.633 105.664C186.398 105.44 186.281 105.168 186.281 104.848V95.952C186.281 95.6427 186.398 95.376 186.633 95.152C186.868 94.9173 187.134 94.8 187.433 94.8H191.065C191.396 94.8 191.668 94.9173 191.881 95.152C192.105 95.376 192.217 95.6427 192.217 95.952V98.032L190.729 98.368V96.864C190.729 96.7147 190.676 96.5813 190.569 96.464C190.473 96.3467 190.34 96.288 190.169 96.288H188.345C188.196 96.288 188.062 96.3467 187.945 96.464C187.828 96.5813 187.769 96.7147 187.769 96.864V103.936C187.769 104.107 187.828 104.245 187.945 104.352C188.062 104.459 188.196 104.512 188.345 104.512H190.169C190.34 104.512 190.473 104.459 190.569 104.352C190.676 104.245 190.729 104.107 190.729 103.936V102.768L192.217 102.416V104.848C192.217 105.168 192.105 105.44 191.881 105.664C191.668 105.888 191.396 106 191.065 106H187.433ZM194.91 106V96.288H192.686V94.8H198.622V96.288H196.398V106H194.91ZM199.094 106V94.8H200.582V106H199.094ZM202.385 106C202.087 106 201.825 105.888 201.601 105.664C201.377 105.44 201.265 105.163 201.265 104.832V95.968C201.265 95.6373 201.377 95.36 201.601 95.136C201.825 94.912 202.087 94.8 202.385 94.8H206.017C206.359 94.8 206.636 94.912 206.849 95.136C207.073 95.36 207.185 95.6373 207.185 95.968V104.832C207.185 105.163 207.073 105.44 206.849 105.664C206.636 105.888 206.359 106 206.017 106H202.385ZM203.297 104.528H205.105C205.287 104.528 205.431 104.469 205.537 104.352C205.655 104.235 205.713 104.091 205.713 103.92V96.88C205.713 96.6987 205.655 96.5547 205.537 96.448C205.431 96.3307 205.287 96.272 205.105 96.272H203.297C203.148 96.272 203.015 96.3307 202.897 96.448C202.791 96.5547 202.737 96.6987 202.737 96.88V103.92C202.737 104.091 202.791 104.235 202.897 104.352C203.015 104.469 203.148 104.528 203.297 104.528ZM207.875 106V94.8H209.363L212.339 102.272V94.8H213.827V106H212.339L209.363 98.528V106H207.875Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </>
  );
};

export default Top;
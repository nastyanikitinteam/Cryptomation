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
            <circle cx="363.5" cy="34.5" r="34.5" fill="black" />
          </g>
          <g>
            <path
              d="M363.496 14L363.223 14.9116V41.3604L363.496 41.6281L375.992 34.3711L363.496 14Z"
              fill="#343434"
            />
            <path
              d="M363.496 14L351 34.3711L363.496 41.6281V28.7906V14Z"
              fill="#BCBCBC"
            />
            <path
              d="M363.496 43.9525L363.342 44.1369V53.5584L363.496 53.9999L376 36.6992L363.496 43.9525Z"
              fill="#3C3C3B"
            />
            <path
              d="M363.496 53.9999V43.9525L351 36.6992L363.496 53.9999Z"
              fill="#BCBCBC"
            />
            <path
              d="M363.496 41.6281L375.992 34.371L363.496 28.7905V41.6281Z"
              fill="#141414"
            />
            <path
              d="M351 34.371L363.496 41.6281V28.7905L351 34.371Z"
              fill="#393939"
            />
          </g>
          <path
            d="M363.5 67L364 111.5"
            stroke="url(#paint4_linear_11_73)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
            className={styles.line}
          />
          <path
            d="M363.5 180L364 135.5"
            stroke="url(#paint5_linear_11_73)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
            className={styles.line2}
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
              d="M306 120C306 117.2 306 115.8 306.545 114.73C307.024 113.789 307.789 113.024 308.73 112.545C309.8 112 311.2 112 314 112H412C414.8 112 416.2 112 417.27 112.545C418.211 113.024 418.976 113.789 419.455 114.73C420 115.8 420 117.2 420 120V127C420 129.8 420 131.2 419.455 132.27C418.976 133.211 418.211 133.976 417.27 134.455C416.2 135 414.8 135 412 135H314C311.2 135 309.8 135 308.73 134.455C307.789 133.976 307.024 133.211 306.545 132.27C306 131.2 306 129.8 306 127V120Z"
              fill="url(#paint6_linear_11_73)"
            />
            <path
              d="M317.172 129V117.8H318.66L321.636 125.272V117.8H323.124V129H321.636L318.66 121.528V129H317.172ZM323.969 129V117.8H329.921V119.272H325.457V122.056H328.433L328.097 123.544H325.457V127.512H329.921V129H323.969ZM332.641 129L330.449 117.8H331.937L333.425 125.368L334.913 117.8H336.401L337.873 125.368L339.361 117.8H340.849L338.657 129H337.105L335.649 121.576L334.193 129H332.641ZM346.066 129V119.288H343.842V117.8H349.778V119.288H347.554V129H346.066ZM350.218 129V117.8H355.018C355.327 117.8 355.594 117.912 355.818 118.136C356.042 118.36 356.154 118.632 356.154 118.952V122.392C356.154 122.712 356.042 122.984 355.818 123.208C355.594 123.432 355.327 123.544 355.018 123.544H354.682L356.154 129H354.682L353.194 123.544H351.706V129H350.218ZM351.706 122.056H354.106C354.255 122.056 354.388 122.003 354.506 121.896C354.623 121.779 354.682 121.64 354.682 121.48V119.864C354.682 119.704 354.623 119.571 354.506 119.464C354.388 119.347 354.255 119.288 354.106 119.288H351.706V122.056ZM356.485 129.016L358.741 117.816H360.197L362.421 129.016H360.933L360.501 126.92H358.373L357.973 129.016H356.485ZM358.661 125.448H360.245L359.477 121.464L358.661 125.448ZM362.781 129V117.8H364.269L367.245 125.272V117.8H368.733V129H367.245L364.269 121.528V129H362.781ZM370.385 129C370.065 129 369.793 128.888 369.569 128.664C369.345 128.44 369.233 128.168 369.233 127.848V125.368L370.721 125.704V126.936C370.721 127.096 370.775 127.235 370.881 127.352C370.999 127.459 371.132 127.512 371.281 127.512H373.105C373.265 127.512 373.399 127.459 373.505 127.352C373.623 127.235 373.681 127.096 373.681 126.936V124.12C373.681 123.96 373.623 123.827 373.505 123.72C373.399 123.603 373.265 123.544 373.105 123.544H370.385C370.065 123.544 369.793 123.432 369.569 123.208C369.345 122.984 369.233 122.712 369.233 122.392V118.952C369.233 118.632 369.345 118.36 369.569 118.136C369.793 117.912 370.065 117.8 370.385 117.8H374.017C374.337 117.8 374.609 117.912 374.833 118.136C375.057 118.36 375.169 118.632 375.169 118.952V120.68L373.681 120.328V119.864C373.681 119.704 373.623 119.571 373.505 119.464C373.399 119.347 373.265 119.288 373.105 119.288H371.281C371.132 119.288 370.999 119.347 370.881 119.464C370.775 119.571 370.721 119.704 370.721 119.864V121.48C370.721 121.64 370.775 121.779 370.881 121.896C370.999 122.003 371.132 122.056 371.281 122.056H374.017C374.337 122.056 374.609 122.168 374.833 122.392C375.057 122.616 375.169 122.888 375.169 123.208V127.848C375.169 128.168 375.057 128.44 374.833 128.664C374.609 128.888 374.337 129 374.017 129H370.385ZM375.344 129.016L377.6 117.816H379.056L381.28 129.016H379.792L379.36 126.92H377.232L376.832 129.016H375.344ZM377.52 125.448H379.104L378.336 121.464L377.52 125.448ZM383.433 129C383.134 129 382.868 128.888 382.633 128.664C382.398 128.44 382.281 128.168 382.281 127.848V118.952C382.281 118.643 382.398 118.376 382.633 118.152C382.868 117.917 383.134 117.8 383.433 117.8H387.065C387.396 117.8 387.668 117.917 387.881 118.152C388.105 118.376 388.217 118.643 388.217 118.952V121.032L386.729 121.368V119.864C386.729 119.715 386.676 119.581 386.569 119.464C386.473 119.347 386.34 119.288 386.169 119.288H384.345C384.196 119.288 384.062 119.347 383.945 119.464C383.828 119.581 383.769 119.715 383.769 119.864V126.936C383.769 127.107 383.828 127.245 383.945 127.352C384.062 127.459 384.196 127.512 384.345 127.512H386.169C386.34 127.512 386.473 127.459 386.569 127.352C386.676 127.245 386.729 127.107 386.729 126.936V125.768L388.217 125.416V127.848C388.217 128.168 388.105 128.44 387.881 128.664C387.668 128.888 387.396 129 387.065 129H383.433ZM390.91 129V119.288H388.686V117.8H394.622V119.288H392.398V129H390.91ZM395.094 129V117.8H396.582V129H395.094ZM398.385 129C398.087 129 397.825 128.888 397.601 128.664C397.377 128.44 397.265 128.163 397.265 127.832V118.968C397.265 118.637 397.377 118.36 397.601 118.136C397.825 117.912 398.087 117.8 398.385 117.8H402.017C402.359 117.8 402.636 117.912 402.849 118.136C403.073 118.36 403.185 118.637 403.185 118.968V127.832C403.185 128.163 403.073 128.44 402.849 128.664C402.636 128.888 402.359 129 402.017 129H398.385ZM399.297 127.528H401.105C401.287 127.528 401.431 127.469 401.537 127.352C401.655 127.235 401.713 127.091 401.713 126.92V119.88C401.713 119.699 401.655 119.555 401.537 119.448C401.431 119.331 401.287 119.272 401.105 119.272H399.297C399.148 119.272 399.015 119.331 398.897 119.448C398.791 119.555 398.737 119.699 398.737 119.88V126.92C398.737 127.091 398.791 127.235 398.897 127.352C399.015 127.469 399.148 127.528 399.297 127.528ZM403.875 129V117.8H405.363L408.339 125.272V117.8H409.827V129H408.339L405.363 121.528V129H403.875Z"
              fill="#FFCB5E"
            />
          </g>
        </g>

        <g className={cn(styles.block, { [styles.active]: !isActive })}>
          <g opacity="0.3">
            <g>
              <circle cx="363.5" cy="34.5" r="34.5" fill="black" />
            </g>
            <g>
              <path
                d="M363.496 14L363.223 14.9116V41.3604L363.496 41.6281L375.992 34.3711L363.496 14Z"
                fill="#343434"
              />
              <path
                d="M363.496 14L351 34.3711L363.496 41.6281V28.7906V14Z"
                fill="#BCBCBC"
              />
              <path
                d="M363.496 43.9525L363.342 44.1369V53.5584L363.496 53.9999L376 36.6992L363.496 43.9525Z"
                fill="#3C3C3B"
              />
              <path
                d="M363.496 53.9999V43.9525L351 36.6992L363.496 53.9999Z"
                fill="#BCBCBC"
              />
              <path
                d="M363.496 41.6281L375.992 34.371L363.496 28.7905V41.6281Z"
                fill="#141414"
              />
              <path
                d="M351 34.371L363.496 41.6281V28.7905L351 34.371Z"
                fill="#393939"
              />
            </g>
          </g>
          <path
            opacity="0.3"
            d="M363.5 67L364 111.5"
            stroke="url(#paint2_linear_6_94)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4"
          />
          <path
            opacity="0.3"
            d="M363.5 180L364 135.5"
            stroke="url(#paint3_linear_6_94)"
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
          <g id="kokok" opacity="0.3">
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M306 120C306 117.2 306 115.8 306.545 114.73C307.024 113.789 307.789 113.024 308.73 112.545C309.8 112 311.2 112 314 112H412C414.8 112 416.2 112 417.27 112.545C418.211 113.024 418.976 113.789 419.455 114.73C420 115.8 420 117.2 420 120V127C420 129.8 420 131.2 419.455 132.27C418.976 133.211 418.211 133.976 417.27 134.455C416.2 135 414.8 135 412 135H314C311.2 135 309.8 135 308.73 134.455C307.789 133.976 307.024 133.211 306.545 132.27C306 131.2 306 129.8 306 127V120Z"
                fill="black"
              />
            </g>
            <path
              d="M317.172 129V117.8H318.66L321.636 125.272V117.8H323.124V129H321.636L318.66 121.528V129H317.172ZM323.969 129V117.8H329.921V119.272H325.457V122.056H328.433L328.097 123.544H325.457V127.512H329.921V129H323.969ZM332.641 129L330.449 117.8H331.937L333.425 125.368L334.913 117.8H336.401L337.873 125.368L339.361 117.8H340.849L338.657 129H337.105L335.649 121.576L334.193 129H332.641ZM346.066 129V119.288H343.842V117.8H349.778V119.288H347.554V129H346.066ZM350.218 129V117.8H355.018C355.327 117.8 355.594 117.912 355.818 118.136C356.042 118.36 356.154 118.632 356.154 118.952V122.392C356.154 122.712 356.042 122.984 355.818 123.208C355.594 123.432 355.327 123.544 355.018 123.544H354.682L356.154 129H354.682L353.194 123.544H351.706V129H350.218ZM351.706 122.056H354.106C354.255 122.056 354.388 122.003 354.506 121.896C354.623 121.779 354.682 121.64 354.682 121.48V119.864C354.682 119.704 354.623 119.571 354.506 119.464C354.388 119.347 354.255 119.288 354.106 119.288H351.706V122.056ZM356.485 129.016L358.741 117.816H360.197L362.421 129.016H360.933L360.501 126.92H358.373L357.973 129.016H356.485ZM358.661 125.448H360.245L359.477 121.464L358.661 125.448ZM362.781 129V117.8H364.269L367.245 125.272V117.8H368.733V129H367.245L364.269 121.528V129H362.781ZM370.385 129C370.065 129 369.793 128.888 369.569 128.664C369.345 128.44 369.233 128.168 369.233 127.848V125.368L370.721 125.704V126.936C370.721 127.096 370.775 127.235 370.881 127.352C370.999 127.459 371.132 127.512 371.281 127.512H373.105C373.265 127.512 373.399 127.459 373.505 127.352C373.623 127.235 373.681 127.096 373.681 126.936V124.12C373.681 123.96 373.623 123.827 373.505 123.72C373.399 123.603 373.265 123.544 373.105 123.544H370.385C370.065 123.544 369.793 123.432 369.569 123.208C369.345 122.984 369.233 122.712 369.233 122.392V118.952C369.233 118.632 369.345 118.36 369.569 118.136C369.793 117.912 370.065 117.8 370.385 117.8H374.017C374.337 117.8 374.609 117.912 374.833 118.136C375.057 118.36 375.169 118.632 375.169 118.952V120.68L373.681 120.328V119.864C373.681 119.704 373.623 119.571 373.505 119.464C373.399 119.347 373.265 119.288 373.105 119.288H371.281C371.132 119.288 370.999 119.347 370.881 119.464C370.775 119.571 370.721 119.704 370.721 119.864V121.48C370.721 121.64 370.775 121.779 370.881 121.896C370.999 122.003 371.132 122.056 371.281 122.056H374.017C374.337 122.056 374.609 122.168 374.833 122.392C375.057 122.616 375.169 122.888 375.169 123.208V127.848C375.169 128.168 375.057 128.44 374.833 128.664C374.609 128.888 374.337 129 374.017 129H370.385ZM375.344 129.016L377.6 117.816H379.056L381.28 129.016H379.792L379.36 126.92H377.232L376.832 129.016H375.344ZM377.52 125.448H379.104L378.336 121.464L377.52 125.448ZM383.433 129C383.134 129 382.868 128.888 382.633 128.664C382.398 128.44 382.281 128.168 382.281 127.848V118.952C382.281 118.643 382.398 118.376 382.633 118.152C382.868 117.917 383.134 117.8 383.433 117.8H387.065C387.396 117.8 387.668 117.917 387.881 118.152C388.105 118.376 388.217 118.643 388.217 118.952V121.032L386.729 121.368V119.864C386.729 119.715 386.676 119.581 386.569 119.464C386.473 119.347 386.34 119.288 386.169 119.288H384.345C384.196 119.288 384.062 119.347 383.945 119.464C383.828 119.581 383.769 119.715 383.769 119.864V126.936C383.769 127.107 383.828 127.245 383.945 127.352C384.062 127.459 384.196 127.512 384.345 127.512H386.169C386.34 127.512 386.473 127.459 386.569 127.352C386.676 127.245 386.729 127.107 386.729 126.936V125.768L388.217 125.416V127.848C388.217 128.168 388.105 128.44 387.881 128.664C387.668 128.888 387.396 129 387.065 129H383.433ZM390.91 129V119.288H388.686V117.8H394.622V119.288H392.398V129H390.91ZM395.094 129V117.8H396.582V129H395.094ZM398.385 129C398.087 129 397.825 128.888 397.601 128.664C397.377 128.44 397.265 128.163 397.265 127.832V118.968C397.265 118.637 397.377 118.36 397.601 118.136C397.825 117.912 398.087 117.8 398.385 117.8H402.017C402.359 117.8 402.636 117.912 402.849 118.136C403.073 118.36 403.185 118.637 403.185 118.968V127.832C403.185 128.163 403.073 128.44 402.849 128.664C402.636 128.888 402.359 129 402.017 129H398.385ZM399.297 127.528H401.105C401.287 127.528 401.431 127.469 401.537 127.352C401.655 127.235 401.713 127.091 401.713 126.92V119.88C401.713 119.699 401.655 119.555 401.537 119.448C401.431 119.331 401.287 119.272 401.105 119.272H399.297C399.148 119.272 399.015 119.331 398.897 119.448C398.791 119.555 398.737 119.699 398.737 119.88V126.92C398.737 127.091 398.791 127.235 398.897 127.352C399.015 127.469 399.148 127.528 399.297 127.528ZM403.875 129V117.8H405.363L408.339 125.272V117.8H409.827V129H408.339L405.363 121.528V129H403.875Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </>
  );
};

export default Top;

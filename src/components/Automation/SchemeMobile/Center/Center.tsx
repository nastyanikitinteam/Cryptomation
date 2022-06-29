import { FC } from 'react';
import cn from 'classnames';
import styles from './center.module.scss';

interface IProps {
  isActive: boolean;
}

const Center: FC<IProps> = ({ isActive }) => {
  return (
    <>
      <g className={cn(styles.block, { [styles.active]: isActive })}>
        <path
          d="M66.5 172C66.5 164.991 66.5004 159.764 66.8389 155.621C67.177 151.483 67.8498 148.469 69.1703 145.877C71.5192 141.267 75.2673 137.519 79.8772 135.17C82.4689 133.85 85.4829 133.177 89.6208 132.839C93.7645 132.5 98.9911 132.5 106 132.5H228C235.009 132.5 240.236 132.5 244.379 132.839C248.517 133.177 251.531 133.85 254.123 135.17C258.733 137.519 262.481 141.267 264.83 145.877C266.15 148.469 266.823 151.483 267.161 155.621C267.5 159.764 267.5 164.991 267.5 172V206C267.5 213.009 267.5 218.236 267.161 222.379C266.823 226.517 266.15 229.531 264.83 232.123C262.481 236.733 258.733 240.481 254.123 242.83C251.531 244.15 248.517 244.823 244.379 245.161C240.236 245.5 235.009 245.5 228 245.5H106C98.9911 245.5 93.7645 245.5 89.6208 245.161C85.4829 244.823 82.4689 244.15 79.8772 242.83C75.2673 240.481 71.5192 236.733 69.1703 232.123C67.8498 229.531 67.177 226.517 66.8389 222.379C66.5004 218.236 66.5 213.009 66.5 206V172Z"
          stroke="#FFCB5E"
        />

        <path
          d="M118.458 177V175.524H121.968V168.576H118.908V167.1H123.588V175.524H126.918V177H118.458ZM122.598 165.318C122.202 165.318 121.89 165.216 121.662 165.012C121.434 164.808 121.32 164.532 121.32 164.184C121.32 163.824 121.434 163.542 121.662 163.338C121.89 163.122 122.202 163.014 122.598 163.014C122.994 163.014 123.306 163.122 123.534 163.338C123.762 163.542 123.876 163.824 123.876 164.184C123.876 164.532 123.762 164.808 123.534 165.012C123.306 165.216 122.994 165.318 122.598 165.318ZM131.038 177V169.566H128.158V168.09H131.038V166.38C131.038 165.6 131.284 164.988 131.776 164.544C132.268 164.088 132.946 163.86 133.81 163.86H136.708V165.336H133.81C133.438 165.336 133.15 165.426 132.946 165.606C132.754 165.774 132.658 166.032 132.658 166.38V168.09H136.708V169.566H132.658V177H131.038ZM149.034 177V167.1H150.654V168.99H150.996L150.654 169.368C150.654 168.588 150.888 167.988 151.356 167.568C151.824 167.136 152.472 166.92 153.3 166.92C154.296 166.92 155.088 167.226 155.676 167.838C156.264 168.45 156.558 169.284 156.558 170.34V177H154.938V170.52C154.938 169.812 154.746 169.272 154.362 168.9C153.99 168.516 153.48 168.324 152.832 168.324C152.16 168.324 151.626 168.528 151.23 168.936C150.846 169.344 150.654 169.932 150.654 170.7V177H149.034ZM162.928 177.18C162.148 177.18 161.464 177.024 160.876 176.712C160.3 176.4 159.85 175.962 159.526 175.398C159.214 174.822 159.058 174.156 159.058 173.4V170.7C159.058 169.932 159.214 169.266 159.526 168.702C159.85 168.138 160.3 167.7 160.876 167.388C161.464 167.076 162.148 166.92 162.928 166.92C163.708 166.92 164.386 167.076 164.962 167.388C165.55 167.7 166 168.138 166.312 168.702C166.636 169.266 166.798 169.932 166.798 170.7V172.446H160.642V173.4C160.642 174.18 160.84 174.78 161.236 175.2C161.632 175.608 162.196 175.812 162.928 175.812C163.552 175.812 164.056 175.704 164.44 175.488C164.824 175.26 165.058 174.924 165.142 174.48H166.762C166.654 175.308 166.246 175.968 165.538 176.46C164.842 176.94 163.972 177.18 162.928 177.18ZM165.214 171.366V170.7C165.214 169.92 165.016 169.32 164.62 168.9C164.236 168.48 163.672 168.27 162.928 168.27C162.196 168.27 161.632 168.48 161.236 168.9C160.84 169.32 160.642 169.92 160.642 170.7V171.222H165.34L165.214 171.366ZM174.159 177C173.307 177 172.641 176.772 172.161 176.316C171.693 175.86 171.459 175.218 171.459 174.39V168.576H168.669V167.1H171.459V164.31H173.079V167.1H177.039V168.576H173.079V174.39C173.079 175.146 173.439 175.524 174.159 175.524H176.859V177H174.159ZM180.043 177L178.459 167.1H179.899L180.889 174.12C180.925 174.384 180.961 174.672 180.997 174.984C181.045 175.284 181.081 175.536 181.105 175.74C181.129 175.536 181.165 175.284 181.213 174.984C181.273 174.672 181.321 174.384 181.357 174.12L182.455 167.1H184.003L185.101 174.12C185.137 174.384 185.179 174.672 185.227 174.984C185.287 175.284 185.329 175.536 185.353 175.74C185.377 175.536 185.413 175.284 185.461 174.984C185.521 174.672 185.569 174.384 185.605 174.12L186.631 167.1H187.999L186.343 177H184.561L183.499 170.16C183.451 169.824 183.397 169.488 183.337 169.152C183.277 168.816 183.235 168.552 183.211 168.36C183.187 168.552 183.151 168.816 183.103 169.152C183.055 169.488 183.001 169.824 182.941 170.16L181.825 177H180.043ZM193.379 177.144C192.587 177.144 191.903 176.994 191.327 176.694C190.751 176.394 190.301 175.962 189.977 175.398C189.665 174.822 189.509 174.144 189.509 173.364V170.736C189.509 169.944 189.665 169.266 189.977 168.702C190.301 168.138 190.751 167.706 191.327 167.406C191.903 167.106 192.587 166.956 193.379 166.956C194.171 166.956 194.855 167.106 195.431 167.406C196.007 167.706 196.451 168.138 196.763 168.702C197.087 169.266 197.249 169.938 197.249 170.718V173.364C197.249 174.144 197.087 174.822 196.763 175.398C196.451 175.962 196.007 176.394 195.431 176.694C194.855 176.994 194.171 177.144 193.379 177.144ZM193.379 175.704C194.087 175.704 194.639 175.506 195.035 175.11C195.431 174.714 195.629 174.132 195.629 173.364V170.736C195.629 169.968 195.431 169.386 195.035 168.99C194.639 168.594 194.087 168.396 193.379 168.396C192.683 168.396 192.131 168.594 191.723 168.99C191.327 169.386 191.129 169.968 191.129 170.736V173.364C191.129 174.132 191.327 174.714 191.723 175.11C192.131 175.506 192.683 175.704 193.379 175.704ZM200.127 177V167.1H201.711V168.99H202.089L201.567 170.16C201.567 169.092 201.795 168.288 202.251 167.748C202.719 167.196 203.409 166.92 204.321 166.92C205.365 166.92 206.193 167.25 206.805 167.91C207.429 168.558 207.741 169.44 207.741 170.556V171.15H206.121V170.7C206.121 169.92 205.929 169.326 205.545 168.918C205.173 168.498 204.639 168.288 203.943 168.288C203.259 168.288 202.719 168.498 202.323 168.918C201.939 169.338 201.747 169.932 201.747 170.7V177H200.127ZM209.989 177V163.86H211.609V171.186H213.517L216.397 167.1H218.251L214.921 171.816L218.305 177H216.415L213.535 172.59H211.609V177H209.989ZM153.983 187.62V186.18H161.723V187.62H153.983ZM153.983 191.94V190.5H161.723V191.94H153.983ZM174.284 187.62V186.18H182.024V187.62H174.284ZM174.284 191.94V190.5H182.024V191.94H174.284ZM133.809 216.24V203.1H135.429V204.99H135.753L135.429 205.368C135.429 204.612 135.675 204.018 136.167 203.586C136.671 203.142 137.331 202.92 138.147 202.92C139.143 202.92 139.935 203.25 140.523 203.91C141.123 204.558 141.423 205.452 141.423 206.592V209.49C141.423 210.246 141.285 210.9 141.009 211.452C140.745 212.004 140.367 212.43 139.875 212.73C139.395 213.03 138.819 213.18 138.147 213.18C137.343 213.18 136.689 212.958 136.185 212.514C135.681 212.07 135.429 211.476 135.429 210.732L135.753 211.11H135.393L135.429 213.36V216.24H133.809ZM137.607 211.776C138.291 211.776 138.825 211.572 139.209 211.164C139.605 210.756 139.803 210.168 139.803 209.4V206.7C139.803 205.932 139.605 205.344 139.209 204.936C138.825 204.528 138.291 204.324 137.607 204.324C136.947 204.324 136.419 204.534 136.023 204.954C135.627 205.374 135.429 205.956 135.429 206.7V209.4C135.429 210.144 135.627 210.726 136.023 211.146C136.419 211.566 136.947 211.776 137.607 211.776ZM147.703 213.144C146.911 213.144 146.227 212.994 145.651 212.694C145.075 212.394 144.625 211.962 144.301 211.398C143.989 210.822 143.833 210.144 143.833 209.364V206.736C143.833 205.944 143.989 205.266 144.301 204.702C144.625 204.138 145.075 203.706 145.651 203.406C146.227 203.106 146.911 202.956 147.703 202.956C148.495 202.956 149.179 203.106 149.755 203.406C150.331 203.706 150.775 204.138 151.087 204.702C151.411 205.266 151.573 205.938 151.573 206.718V209.364C151.573 210.144 151.411 210.822 151.087 211.398C150.775 211.962 150.331 212.394 149.755 212.694C149.179 212.994 148.495 213.144 147.703 213.144ZM147.703 211.704C148.411 211.704 148.963 211.506 149.359 211.11C149.755 210.714 149.953 210.132 149.953 209.364V206.736C149.953 205.968 149.755 205.386 149.359 204.99C148.963 204.594 148.411 204.396 147.703 204.396C147.007 204.396 146.455 204.594 146.047 204.99C145.651 205.386 145.453 205.968 145.453 206.736V209.364C145.453 210.132 145.651 210.714 146.047 211.11C146.455 211.506 147.007 211.704 147.703 211.704ZM159.203 213C158.627 213 158.123 212.886 157.691 212.658C157.259 212.43 156.923 212.106 156.683 211.686C156.443 211.266 156.323 210.774 156.323 210.21V201.336H152.993V199.86H157.943V210.21C157.943 210.618 158.057 210.942 158.285 211.182C158.513 211.41 158.819 211.524 159.203 211.524H162.353V213H159.203ZM165.808 216.24L167.266 212.388L163.594 203.1H165.394L167.698 209.22C167.782 209.424 167.86 209.67 167.932 209.958C168.004 210.234 168.064 210.468 168.112 210.66C168.16 210.468 168.22 210.234 168.292 209.958C168.364 209.67 168.436 209.424 168.508 209.22L170.668 203.1H172.414L167.536 216.24H165.808ZM175.652 216.24V214.764H178.802C179.306 214.764 179.672 214.65 179.9 214.422C180.14 214.194 180.26 213.84 180.26 213.36V212.1L180.296 210.3H179.972L180.278 210.03C180.278 210.75 180.038 211.32 179.558 211.74C179.078 212.16 178.436 212.37 177.632 212.37C176.612 212.37 175.808 212.04 175.22 211.38C174.632 210.708 174.338 209.808 174.338 208.68V206.592C174.338 205.464 174.632 204.57 175.22 203.91C175.808 203.25 176.612 202.92 177.632 202.92C178.436 202.92 179.078 203.13 179.558 203.55C180.038 203.97 180.278 204.54 180.278 205.26L179.972 204.99H180.278V203.1H181.88V213.36C181.88 214.248 181.604 214.95 181.052 215.466C180.512 215.982 179.756 216.24 178.784 216.24H175.652ZM178.118 210.966C178.79 210.966 179.318 210.756 179.702 210.336C180.086 209.916 180.278 209.334 180.278 208.59V206.7C180.278 205.956 180.086 205.374 179.702 204.954C179.318 204.534 178.79 204.324 178.118 204.324C177.434 204.324 176.9 204.528 176.516 204.936C176.144 205.344 175.958 205.932 175.958 206.7V208.59C175.958 209.358 176.144 209.946 176.516 210.354C176.9 210.762 177.434 210.966 178.118 210.966ZM188.304 213.144C187.512 213.144 186.828 212.994 186.252 212.694C185.676 212.394 185.226 211.962 184.902 211.398C184.59 210.822 184.434 210.144 184.434 209.364V206.736C184.434 205.944 184.59 205.266 184.902 204.702C185.226 204.138 185.676 203.706 186.252 203.406C186.828 203.106 187.512 202.956 188.304 202.956C189.096 202.956 189.78 203.106 190.356 203.406C190.932 203.706 191.376 204.138 191.688 204.702C192.012 205.266 192.174 205.938 192.174 206.718V209.364C192.174 210.144 192.012 210.822 191.688 211.398C191.376 211.962 190.932 212.394 190.356 212.694C189.78 212.994 189.096 213.144 188.304 213.144ZM188.304 211.704C189.012 211.704 189.564 211.506 189.96 211.11C190.356 210.714 190.554 210.132 190.554 209.364V206.736C190.554 205.968 190.356 205.386 189.96 204.99C189.564 204.594 189.012 204.396 188.304 204.396C187.608 204.396 187.056 204.594 186.648 204.99C186.252 205.386 186.054 205.968 186.054 206.736V209.364C186.054 210.132 186.252 210.714 186.648 211.11C187.056 211.506 187.608 211.704 188.304 211.704ZM194.71 213V203.1H196.33V204.99H196.672L196.33 205.368C196.33 204.588 196.564 203.988 197.032 203.568C197.5 203.136 198.148 202.92 198.976 202.92C199.972 202.92 200.764 203.226 201.352 203.838C201.94 204.45 202.234 205.284 202.234 206.34V213H200.614V206.52C200.614 205.812 200.422 205.272 200.038 204.9C199.666 204.516 199.156 204.324 198.508 204.324C197.836 204.324 197.302 204.528 196.906 204.936C196.522 205.344 196.33 205.932 196.33 206.7V213H194.71Z"
          fill="#FFCB5E"
        />
      </g>
      <g className={cn(styles.block, { [styles.active]: !isActive })}>
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M228 133H106C98.9828 133 93.7801 133.001 89.6615 133.337C85.5545 133.673 82.6137 134.337 80.1042 135.616C75.5883 137.917 71.9168 141.588 69.6158 146.104C68.3372 148.614 67.6728 151.555 67.3373 155.661C67.0008 159.78 67 164.983 67 172V206C67 213.017 67.0008 218.22 67.3373 222.339C67.6728 226.445 68.3372 229.386 69.6158 231.896C69.9396 232.531 70.2905 233.15 70.6671 233.75C70.3904 233.949 70.1402 234.183 69.9227 234.444C69.4914 233.768 69.0914 233.069 68.7248 232.35C66 227.002 66 220.001 66 206V172C66 157.999 66 150.998 68.7248 145.65C71.1217 140.946 74.9462 137.122 79.6502 134.725C84.998 132 91.9987 132 106 132H228C242.001 132 249.002 132 254.35 134.725C259.054 137.122 262.878 140.946 265.275 145.65C268 150.998 268 157.999 268 172V206C268 220.001 268 227.002 265.275 232.35C264.909 233.069 264.509 233.768 264.077 234.444C263.86 234.183 263.61 233.949 263.333 233.75C263.71 233.15 264.06 232.531 264.384 231.896C265.663 229.386 266.327 226.445 266.663 222.339C266.999 218.22 267 213.017 267 206V172C267 164.983 266.999 159.78 266.663 155.661C266.327 151.555 265.663 148.614 264.384 146.104C262.083 141.588 258.412 137.917 253.896 135.616C251.386 134.337 248.445 133.673 244.339 133.337C240.22 133.001 235.017 133 228 133ZM258.047 239.698C256.766 240.728 255.376 241.63 253.896 242.384C251.386 243.663 248.445 244.327 244.339 244.663C240.22 244.999 235.017 245 228 245H106C98.9828 245 93.7801 244.999 89.6615 244.663C85.5545 244.327 82.6137 243.663 80.1042 242.384C78.6237 241.63 77.2339 240.728 75.9535 239.698C75.7242 239.948 75.4635 240.17 75.1775 240.356C76.5523 241.48 78.0504 242.46 79.6502 243.275C84.998 246 91.9987 246 106 246H228C242.001 246 249.002 246 254.35 243.275C255.95 242.46 257.448 241.48 258.822 240.356C258.536 240.17 258.276 239.948 258.047 239.698Z"
          fill="white"
        />
        <path
          opacity="0.3"
          d="M118.458 177V175.524H121.968V168.576H118.908V167.1H123.588V175.524H126.918V177H118.458ZM122.598 165.318C122.202 165.318 121.89 165.216 121.662 165.012C121.434 164.808 121.32 164.532 121.32 164.184C121.32 163.824 121.434 163.542 121.662 163.338C121.89 163.122 122.202 163.014 122.598 163.014C122.994 163.014 123.306 163.122 123.534 163.338C123.762 163.542 123.876 163.824 123.876 164.184C123.876 164.532 123.762 164.808 123.534 165.012C123.306 165.216 122.994 165.318 122.598 165.318ZM131.038 177V169.566H128.158V168.09H131.038V166.38C131.038 165.6 131.284 164.988 131.776 164.544C132.268 164.088 132.946 163.86 133.81 163.86H136.708V165.336H133.81C133.438 165.336 133.15 165.426 132.946 165.606C132.754 165.774 132.658 166.032 132.658 166.38V168.09H136.708V169.566H132.658V177H131.038ZM149.034 177V167.1H150.654V168.99H150.996L150.654 169.368C150.654 168.588 150.888 167.988 151.356 167.568C151.824 167.136 152.472 166.92 153.3 166.92C154.296 166.92 155.088 167.226 155.676 167.838C156.264 168.45 156.558 169.284 156.558 170.34V177H154.938V170.52C154.938 169.812 154.746 169.272 154.362 168.9C153.99 168.516 153.48 168.324 152.832 168.324C152.16 168.324 151.626 168.528 151.23 168.936C150.846 169.344 150.654 169.932 150.654 170.7V177H149.034ZM162.928 177.18C162.148 177.18 161.464 177.024 160.876 176.712C160.3 176.4 159.85 175.962 159.526 175.398C159.214 174.822 159.058 174.156 159.058 173.4V170.7C159.058 169.932 159.214 169.266 159.526 168.702C159.85 168.138 160.3 167.7 160.876 167.388C161.464 167.076 162.148 166.92 162.928 166.92C163.708 166.92 164.386 167.076 164.962 167.388C165.55 167.7 166 168.138 166.312 168.702C166.636 169.266 166.798 169.932 166.798 170.7V172.446H160.642V173.4C160.642 174.18 160.84 174.78 161.236 175.2C161.632 175.608 162.196 175.812 162.928 175.812C163.552 175.812 164.056 175.704 164.44 175.488C164.824 175.26 165.058 174.924 165.142 174.48H166.762C166.654 175.308 166.246 175.968 165.538 176.46C164.842 176.94 163.972 177.18 162.928 177.18ZM165.214 171.366V170.7C165.214 169.92 165.016 169.32 164.62 168.9C164.236 168.48 163.672 168.27 162.928 168.27C162.196 168.27 161.632 168.48 161.236 168.9C160.84 169.32 160.642 169.92 160.642 170.7V171.222H165.34L165.214 171.366ZM174.159 177C173.307 177 172.641 176.772 172.161 176.316C171.693 175.86 171.459 175.218 171.459 174.39V168.576H168.669V167.1H171.459V164.31H173.079V167.1H177.039V168.576H173.079V174.39C173.079 175.146 173.439 175.524 174.159 175.524H176.859V177H174.159ZM180.043 177L178.459 167.1H179.899L180.889 174.12C180.925 174.384 180.961 174.672 180.997 174.984C181.045 175.284 181.081 175.536 181.105 175.74C181.129 175.536 181.165 175.284 181.213 174.984C181.273 174.672 181.321 174.384 181.357 174.12L182.455 167.1H184.003L185.101 174.12C185.137 174.384 185.179 174.672 185.227 174.984C185.287 175.284 185.329 175.536 185.353 175.74C185.377 175.536 185.413 175.284 185.461 174.984C185.521 174.672 185.569 174.384 185.605 174.12L186.631 167.1H187.999L186.343 177H184.561L183.499 170.16C183.451 169.824 183.397 169.488 183.337 169.152C183.277 168.816 183.235 168.552 183.211 168.36C183.187 168.552 183.151 168.816 183.103 169.152C183.055 169.488 183.001 169.824 182.941 170.16L181.825 177H180.043ZM193.379 177.144C192.587 177.144 191.903 176.994 191.327 176.694C190.751 176.394 190.301 175.962 189.977 175.398C189.665 174.822 189.509 174.144 189.509 173.364V170.736C189.509 169.944 189.665 169.266 189.977 168.702C190.301 168.138 190.751 167.706 191.327 167.406C191.903 167.106 192.587 166.956 193.379 166.956C194.171 166.956 194.855 167.106 195.431 167.406C196.007 167.706 196.451 168.138 196.763 168.702C197.087 169.266 197.249 169.938 197.249 170.718V173.364C197.249 174.144 197.087 174.822 196.763 175.398C196.451 175.962 196.007 176.394 195.431 176.694C194.855 176.994 194.171 177.144 193.379 177.144ZM193.379 175.704C194.087 175.704 194.639 175.506 195.035 175.11C195.431 174.714 195.629 174.132 195.629 173.364V170.736C195.629 169.968 195.431 169.386 195.035 168.99C194.639 168.594 194.087 168.396 193.379 168.396C192.683 168.396 192.131 168.594 191.723 168.99C191.327 169.386 191.129 169.968 191.129 170.736V173.364C191.129 174.132 191.327 174.714 191.723 175.11C192.131 175.506 192.683 175.704 193.379 175.704ZM200.127 177V167.1H201.711V168.99H202.089L201.567 170.16C201.567 169.092 201.795 168.288 202.251 167.748C202.719 167.196 203.409 166.92 204.321 166.92C205.365 166.92 206.193 167.25 206.805 167.91C207.429 168.558 207.741 169.44 207.741 170.556V171.15H206.121V170.7C206.121 169.92 205.929 169.326 205.545 168.918C205.173 168.498 204.639 168.288 203.943 168.288C203.259 168.288 202.719 168.498 202.323 168.918C201.939 169.338 201.747 169.932 201.747 170.7V177H200.127ZM209.989 177V163.86H211.609V171.186H213.517L216.397 167.1H218.251L214.921 171.816L218.305 177H216.415L213.535 172.59H211.609V177H209.989ZM153.983 187.62V186.18H161.723V187.62H153.983ZM153.983 191.94V190.5H161.723V191.94H153.983ZM174.284 187.62V186.18H182.024V187.62H174.284ZM174.284 191.94V190.5H182.024V191.94H174.284ZM133.809 216.24V203.1H135.429V204.99H135.753L135.429 205.368C135.429 204.612 135.675 204.018 136.167 203.586C136.671 203.142 137.331 202.92 138.147 202.92C139.143 202.92 139.935 203.25 140.523 203.91C141.123 204.558 141.423 205.452 141.423 206.592V209.49C141.423 210.246 141.285 210.9 141.009 211.452C140.745 212.004 140.367 212.43 139.875 212.73C139.395 213.03 138.819 213.18 138.147 213.18C137.343 213.18 136.689 212.958 136.185 212.514C135.681 212.07 135.429 211.476 135.429 210.732L135.753 211.11H135.393L135.429 213.36V216.24H133.809ZM137.607 211.776C138.291 211.776 138.825 211.572 139.209 211.164C139.605 210.756 139.803 210.168 139.803 209.4V206.7C139.803 205.932 139.605 205.344 139.209 204.936C138.825 204.528 138.291 204.324 137.607 204.324C136.947 204.324 136.419 204.534 136.023 204.954C135.627 205.374 135.429 205.956 135.429 206.7V209.4C135.429 210.144 135.627 210.726 136.023 211.146C136.419 211.566 136.947 211.776 137.607 211.776ZM147.703 213.144C146.911 213.144 146.227 212.994 145.651 212.694C145.075 212.394 144.625 211.962 144.301 211.398C143.989 210.822 143.833 210.144 143.833 209.364V206.736C143.833 205.944 143.989 205.266 144.301 204.702C144.625 204.138 145.075 203.706 145.651 203.406C146.227 203.106 146.911 202.956 147.703 202.956C148.495 202.956 149.179 203.106 149.755 203.406C150.331 203.706 150.775 204.138 151.087 204.702C151.411 205.266 151.573 205.938 151.573 206.718V209.364C151.573 210.144 151.411 210.822 151.087 211.398C150.775 211.962 150.331 212.394 149.755 212.694C149.179 212.994 148.495 213.144 147.703 213.144ZM147.703 211.704C148.411 211.704 148.963 211.506 149.359 211.11C149.755 210.714 149.953 210.132 149.953 209.364V206.736C149.953 205.968 149.755 205.386 149.359 204.99C148.963 204.594 148.411 204.396 147.703 204.396C147.007 204.396 146.455 204.594 146.047 204.99C145.651 205.386 145.453 205.968 145.453 206.736V209.364C145.453 210.132 145.651 210.714 146.047 211.11C146.455 211.506 147.007 211.704 147.703 211.704ZM159.203 213C158.627 213 158.123 212.886 157.691 212.658C157.259 212.43 156.923 212.106 156.683 211.686C156.443 211.266 156.323 210.774 156.323 210.21V201.336H152.993V199.86H157.943V210.21C157.943 210.618 158.057 210.942 158.285 211.182C158.513 211.41 158.819 211.524 159.203 211.524H162.353V213H159.203ZM165.808 216.24L167.266 212.388L163.594 203.1H165.394L167.698 209.22C167.782 209.424 167.86 209.67 167.932 209.958C168.004 210.234 168.064 210.468 168.112 210.66C168.16 210.468 168.22 210.234 168.292 209.958C168.364 209.67 168.436 209.424 168.508 209.22L170.668 203.1H172.414L167.536 216.24H165.808ZM175.652 216.24V214.764H178.802C179.306 214.764 179.672 214.65 179.9 214.422C180.14 214.194 180.26 213.84 180.26 213.36V212.1L180.296 210.3H179.972L180.278 210.03C180.278 210.75 180.038 211.32 179.558 211.74C179.078 212.16 178.436 212.37 177.632 212.37C176.612 212.37 175.808 212.04 175.22 211.38C174.632 210.708 174.338 209.808 174.338 208.68V206.592C174.338 205.464 174.632 204.57 175.22 203.91C175.808 203.25 176.612 202.92 177.632 202.92C178.436 202.92 179.078 203.13 179.558 203.55C180.038 203.97 180.278 204.54 180.278 205.26L179.972 204.99H180.278V203.1H181.88V213.36C181.88 214.248 181.604 214.95 181.052 215.466C180.512 215.982 179.756 216.24 178.784 216.24H175.652ZM178.118 210.966C178.79 210.966 179.318 210.756 179.702 210.336C180.086 209.916 180.278 209.334 180.278 208.59V206.7C180.278 205.956 180.086 205.374 179.702 204.954C179.318 204.534 178.79 204.324 178.118 204.324C177.434 204.324 176.9 204.528 176.516 204.936C176.144 205.344 175.958 205.932 175.958 206.7V208.59C175.958 209.358 176.144 209.946 176.516 210.354C176.9 210.762 177.434 210.966 178.118 210.966ZM188.304 213.144C187.512 213.144 186.828 212.994 186.252 212.694C185.676 212.394 185.226 211.962 184.902 211.398C184.59 210.822 184.434 210.144 184.434 209.364V206.736C184.434 205.944 184.59 205.266 184.902 204.702C185.226 204.138 185.676 203.706 186.252 203.406C186.828 203.106 187.512 202.956 188.304 202.956C189.096 202.956 189.78 203.106 190.356 203.406C190.932 203.706 191.376 204.138 191.688 204.702C192.012 205.266 192.174 205.938 192.174 206.718V209.364C192.174 210.144 192.012 210.822 191.688 211.398C191.376 211.962 190.932 212.394 190.356 212.694C189.78 212.994 189.096 213.144 188.304 213.144ZM188.304 211.704C189.012 211.704 189.564 211.506 189.96 211.11C190.356 210.714 190.554 210.132 190.554 209.364V206.736C190.554 205.968 190.356 205.386 189.96 204.99C189.564 204.594 189.012 204.396 188.304 204.396C187.608 204.396 187.056 204.594 186.648 204.99C186.252 205.386 186.054 205.968 186.054 206.736V209.364C186.054 210.132 186.252 210.714 186.648 211.11C187.056 211.506 187.608 211.704 188.304 211.704ZM194.71 213V203.1H196.33V204.99H196.672L196.33 205.368C196.33 204.588 196.564 203.988 197.032 203.568C197.5 203.136 198.148 202.92 198.976 202.92C199.972 202.92 200.764 203.226 201.352 203.838C201.94 204.45 202.234 205.284 202.234 206.34V213H200.614V206.52C200.614 205.812 200.422 205.272 200.038 204.9C199.666 204.516 199.156 204.324 198.508 204.324C197.836 204.324 197.302 204.528 196.906 204.936C196.522 205.344 196.33 205.932 196.33 206.7V213H194.71Z"
          fill="white"
        />
      </g>
    </>
  );
};

export default Center;
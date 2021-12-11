import React, { useMemo } from 'react';

export const LOGO_TYPE_LIGHT = '#ffffff';
export const LOGO_TYPE_DARK = '#000000';

type LogoProps = {
  logoColor: boolean;
  size?: number;
};

const returnSVG = (size: number, color: boolean) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="200.000000pt"
    height={`${size}pt`}
    viewBox="0 0 200.000000 40.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M73 356 c-36 -17 -53 -43 -53 -83 0 -41 22 -67 78 -91 64 -28 78 -44
57 -66 -21 -21 -33 -20 -77 3 -36 18 -38 18 -54 0 -52 -57 95 -105 170 -55 14
8 29 31 36 50 17 54 -2 84 -77 120 -41 20 -63 36 -63 47 0 25 33 32 72 16 31
-13 34 -13 51 9 17 23 17 24 -7 40 -35 22 -95 27 -133 10z"
      />
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M973 350 c-79 -40 -105 -149 -58 -240 33 -64 146 -88 211 -45 23 15
25 21 22 88 l-3 72 -55 0 c-53 0 -55 -1 -58 -27 -3 -24 0 -28 22 -28 22 0 26
-5 26 -29 0 -55 -73 -48 -103 10 -45 87 24 185 104 145 27 -13 30 -13 44 7 14
19 13 23 -4 40 -29 29 -98 32 -148 7z"
      />
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M280 263 c0 -114 11 -161 44 -192 33 -31 94 -38 139 -16 51 24 67 71
67 200 l0 105 -35 0 -35 0 0 -110 c0 -98 -2 -112 -21 -131 -20 -20 -51 -19
-74 3 -5 5 -12 60 -13 123 l-4 115 -34 0 -34 0 0 -97z"
      />
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M590 205 l0 -155 35 0 35 0 0 98 1 97 52 -97 c52 -97 52 -98 90 -98
l37 0 0 155 0 155 -35 0 -35 0 0 -97 c0 -95 -1 -97 -16 -68 -85 165 -86 165
-126 165 l-38 0 0 -155z"
      />
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M1200 205 l0 -155 35 0 c34 0 35 1 35 41 0 25 7 50 19 66 l20 24 38
-65 c36 -63 39 -66 76 -66 l38 0 -32 58 c-18 31 -43 74 -55 94 l-23 36 40 51
c22 28 44 51 48 51 4 0 26 -39 49 -88 34 -71 42 -98 42 -145 l0 -57 35 0 35 0
0 55 c0 45 9 74 45 152 25 53 45 98 45 100 0 2 -16 3 -36 1 -34 -3 -38 -6 -62
-67 -21 -52 -27 -61 -33 -45 -4 10 -17 40 -28 67 l-20 47 -73 0 -73 -1 -45
-60 -45 -61 -3 61 -3 61 -34 0 -35 0 0 -155z"
      />
      <path
        fill={color ? LOGO_TYPE_DARK : LOGO_TYPE_LIGHT}
        className="logo-color"
        d="M1710 263 c0 -114 11 -161 44 -192 33 -31 94 -38 139 -16 51 24 67
71 67 200 l0 105 -35 0 -35 0 0 -110 c0 -98 -2 -112 -21 -131 -20 -20 -51 -19
-74 3 -5 5 -12 60 -13 123 l-4 115 -34 0 -34 0 0 -97z"
      />
    </g>
  </svg>
);

const Logo = ({ logoColor, size = 60 }: LogoProps) => {
  const memoSVG = useMemo(() => returnSVG(size, logoColor), [logoColor, size]);

  return <>{memoSVG}</>;
};

export default Logo;

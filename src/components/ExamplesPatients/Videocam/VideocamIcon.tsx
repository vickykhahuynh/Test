import { memo, SVGProps } from 'react';

const VideocamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 16C1.45 16 0.975 15.8083 0.575 15.425C0.191667 15.025 0 14.55 0 14V2C0 1.45 0.191667 0.983333 0.575 0.599998C0.975 0.199999 1.45 -9.53674e-07 2 -9.53674e-07H14C14.55 -9.53674e-07 15.0167 0.199999 15.4 0.599998C15.8 0.983333 16 1.45 16 2V6.5L20 2.5V13.5L16 9.5V14C16 14.55 15.8 15.025 15.4 15.425C15.0167 15.8083 14.55 16 14 16H2ZM2 14H14V2H2V14ZM2 14V2V14Z'
      fill='#1D1B20'
    />
  </svg>
);

const Memo = memo(VideocamIcon);
export { Memo as VideocamIcon };

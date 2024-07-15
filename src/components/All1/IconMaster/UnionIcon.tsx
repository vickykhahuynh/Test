import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 1C20 0.447715 19.5523 0 19 0H11.8945C11.3422 0 10.8945 0.447715 10.8945 1V10.4044C10.8945 10.9566 11.3422 11.4044 11.8945 11.4044H19C19.5523 11.4044 20 10.9566 20 10.4044V1ZM1 0C0.447715 0 0 0.447715 0 1V5.92494C0 6.47722 0.447715 6.92494 1 6.92494H8.10549C8.65778 6.92494 9.10549 6.47722 9.10549 5.92494V0.999999C9.10549 0.447715 8.65778 0 8.10549 0H1ZM9.10549 9.59564C9.10549 9.04336 8.65778 8.59564 8.10549 8.59564H1C0.447715 8.59564 0 9.04336 0 9.59564V19C0 19.5523 0.447715 20 1 20H8.10549C8.65778 20 9.10549 19.5523 9.10549 19V9.59564ZM20 14.0751C20 13.5228 19.5523 13.0751 19 13.0751H11.8945C11.3422 13.0751 10.8945 13.5228 10.8945 14.0751V19C10.8945 19.5523 11.3422 20 11.8945 20H19C19.5523 20 20 19.5523 20 19V14.0751Z'
      fill='#8B83BA'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };

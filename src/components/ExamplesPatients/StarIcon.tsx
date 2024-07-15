import { memo, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3332 7.69837L12.3416 7.18171L9.9999 1.66504L7.65823 7.19004L1.66656 7.69837L6.21657 11.64L4.8499 17.4984L9.9999 14.39L15.1499 17.4984L13.7916 11.64L18.3332 7.69837ZM9.9999 12.8317L6.86656 14.7234L7.6999 11.1567L4.93323 8.75671L8.58323 8.44004L9.9999 5.08171L11.4249 8.44837L15.0749 8.76504L12.3082 11.165L13.1416 14.7317L9.9999 12.8317Z'
      fill='#79747E'
    />
  </svg>
);

const Memo = memo(StarIcon);
export { Memo as StarIcon };

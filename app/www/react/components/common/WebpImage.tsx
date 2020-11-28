import * as React from 'react';

interface WebpImageProps {
  src: string;
  fallback?: string;
  alt?: string;
  [k: string]: any;
}

const WebpImage = ({ src, fallback, ...extra }: WebpImageProps) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" {...extra} />
      <img src={fallback} {...extra} />
    </picture>
  );
};

export default WebpImage;

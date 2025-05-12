import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string;
}

export const Image = ({
  src,
  alt,
  fallbackSrc = "/images/placeholder.png",
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      {...props}
      alt={alt}
      src={imgSrc}
      onError={() => {
        console.warn(`Image failed to load: ${src}`);
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

import React from 'react';
import { GatsbyImage as Image } from 'gatsby-plugin-image';

interface ImageProps {
  src: any;
  alt: string;
  // All other props
  [x:string]: any;
}

const GatsbyImage:React.FC<ImageProps> = ({ src, ...rest }) => {
  return <Image image={src} {...rest} />;
}

export default GatsbyImage;
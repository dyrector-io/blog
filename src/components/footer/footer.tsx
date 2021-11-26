import * as React from 'react';
import FooterWrapper from './footer.style';

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  return <FooterWrapper {...props}>{children}</FooterWrapper>;
};

export default Footer;

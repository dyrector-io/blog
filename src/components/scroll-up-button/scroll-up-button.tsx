import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import ScrollUpButtonWrapper from './scroll-up-button.style';

interface ScrollUpButtonProps {}

const ScrollUpButton: React.FunctionComponent<ScrollUpButtonProps> = (
  props
) => {
  return (
    <ScrollUpButtonWrapper {...props}>
      <IoMdArrowRoundUp />
    </ScrollUpButtonWrapper>
  );
};

export default ScrollUpButton;

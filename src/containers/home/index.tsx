import * as React from 'react';
import PersonalBlogWrapper from './style';
import Intro from './intro';
import Posts from './posts';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;

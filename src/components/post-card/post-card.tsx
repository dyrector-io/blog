import * as React from 'react';

import {
  Excerpt,
  PostCardWrapper,
  PostContent,
  PostDate,
  PostDetails,
  PostPreview,
  PostTags,
  PostTitle,
} from './post-card.style';

import GatsbyImage from '../../components/gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import { string } from 'yup';

interface PostCardProps {
  image?: any;
  title: string;
  description?: string;
  seoDescription: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  description,
  seoDescription,
  url,
  date,
  tags,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: date,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <Link to={url}>{title}</Link>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCard;

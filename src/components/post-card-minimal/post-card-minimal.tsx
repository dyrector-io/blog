import * as React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import GatsbyImage from "../../components/gatsby-image";
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
  PostDateAndPreview,
  ReadMore,
} from "./post-card-minimal.style";

interface PostCardMinimalProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
}

const PostCardMinimal: React.FunctionComponent<PostCardMinimalProps> = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      <PostDetails className="post_details">
        <PostDateAndPreview>
          {image == null ? null : (
            <PostPreview className="post_preview">
              <Link to={url}>
                <GatsbyImage src={image} alt="post preview" />
              </Link>
            </PostPreview>
          )}
        </PostDateAndPreview>
        <PostContent className="post_content">
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
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
          <ReadMore>
            <Link to={url}>Read More</Link>
          </ReadMore>
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCardMinimal;

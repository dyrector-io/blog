import * as React from "react";
import GatsbyImage from "../../components/gatsby-image";
import { Link } from "gatsby";
import _ from "lodash";
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostHeader,
  PostHeaderWrapper,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from "./post-details.style";

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  header?: any;
  description: any;
  tags?: [];
  className?: string;
  imagePosition?: "left" | "top";
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  header,
  description,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ["post_details"];

  if (className) {
    addClass.push(className);
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(" ")}>
      {/* <PostHeaderWrapper> */}
      <PostHeader className="post_preview">
        <GatsbyImage src={header} alt={title} />
      </PostHeader>
      {/* </PostHeaderWrapper> */}
      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == "left" ? (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
          ""
        )}
        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: "top",
};

export default PostDetails;

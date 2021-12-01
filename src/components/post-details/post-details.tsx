import * as React from "react";
import GatsbyImage from "../../components/gatsby-image";
import { Link } from "gatsby";
import _ from "lodash";
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostHeader,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from "./post-details.style";

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  header?: any;
  headerAlt?: string;
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
  headerAlt,
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
      {/* Todo create a good back to home screen stuff
      <Link to="/" activeStyle={{ color: "blue" }}>
        Back to homepage
      </Link> */}
      <PostHeader className="post_preview">
        <GatsbyImage src={header} alt={headerAlt ? headerAlt : title} />
      </PostHeader>
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

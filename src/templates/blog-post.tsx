import {
  BlogPostComment,
  BlogPostDetailsWrapper,
  BlogPostFooter,
  PostShare,
  PostTags,
  RelatedPostItem,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostWrapper,
} from "./templates.style";
import {
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import {
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoTwitter,
} from "react-icons/io";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import PostCard from "../components/post-card/post-card";
import PostDetails from "../components/post-details/post-details";
import React from "react";
import SEO from "../components/seo";
import _ from "lodash";
import urljoin from "url-join";

const BlogPostTemplate = (props: any) => {
  const post = props.data.markdownRemark;
  const { edges } = props.data.allMarkdownRemark;
  const title = post.frontmatter.title;
  const slug = post.fields.slug;
  const siteUrl = props.data.site.siteMetadata.siteUrl;
  const shareUrl = urljoin(siteUrl, slug);

  console.log(post.frontmatter.seoTitle);

  return (
    <Layout>
      <SEO
        seoTitle={post.frontmatter.seoTitle}
        title={post.frontmatter.seoTitle}
        description={post.frontmatter.seoDescription || post.excerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          preview={
            post.frontmatter.cover == null
              ? null
              : post.frontmatter.cover.childImageSharp.gatsbyImageData
          }
          header={
            post.frontmatter.header == null
              ? null
              : post.frontmatter.header.childImageSharp.gatsbyImageData
          }
          headerAlt={post.frontmatter.headerAlt}
          description={post.html}
          imagePosition="left"
        />
        <BlogPostFooter
          className={post.frontmatter.cover == null ? "center" : ""}
        >
          {post.frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {post.frontmatter.tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
          <PostShare>
            <span>Share This:</span>
            <FacebookShareButton url={shareUrl} quote={post.excerpt}>
              <IoLogoFacebook />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <IoLogoTwitter />
            </TwitterShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={urljoin(siteUrl, post.frontmatter.cover.publicURL)}
            >
              <IoLogoPinterest />
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${post.frontmatter.title}`}
            >
              <IoLogoReddit />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
        <BlogPostComment
          className={post.frontmatter.cover == null ? "center" : ""}
        ></BlogPostComment>
      </BlogPostDetailsWrapper>
      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  url={node.fields.slug}
                  description={node.frontmatter.description}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.gatsbyImageData
                  }
                  tags={node.frontmatter.tags}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: [String!]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        seoTitle
        date(formatString: "DD MMM, YYYY")
        description
        seoDescription
        tags
        header {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        headerAlt
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tag } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            seoTitle
            tags
            header {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            cover {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

import * as React from "react";

import BlogPostsWrapper, { SecTitle } from "./style";
import { graphql, useStaticQuery } from "gatsby";

import Pagination from "../../../components/pagination/pagination";
import PostCardMinimal from "../../../components/post-card-minimal/post-card-minimal";

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          pageContext
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 30
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              coverAlt
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
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const TotalPage = Data?.allSitePage?.nodes[0]?.pageContext?.numPages;
  const CurrentPage = Data?.allSitePage?.nodes[0]?.pageContext?.currentPage;

  return (
    <BlogPostsWrapper>
      <SecTitle>Latest Posts</SecTitle>
      {Posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <PostCardMinimal
            key={node.fields.slug}
            title={title}
            image={
              node.frontmatter.cover == null
                ? null
                : node.frontmatter.cover.childImageSharp.gatsbyImageData
            }
            imageAlt={
              node.frontmatter.coverAlt ? node.frontmatter.coverAlt : title
            }
            url={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        );
      })}

      {TotalPage >> 1 ? (
        <Pagination
          nextLink="/page/2"
          currentPage={CurrentPage}
          totalPage={TotalPage}
        />
      ) : (
        ""
      )}
    </BlogPostsWrapper>
  );
};

export default Posts;

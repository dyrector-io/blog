import * as React from 'react';
import { graphql } from 'gatsby';
import PostCardMinimal from '../components/post-card-minimal/post-card-minimal';
import Pagination from '../components/pagination/pagination';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogPostsWrapper } from './templates.style';

const BlogList = (props: any) => {
  const { data } = props;
  const Posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;
  const PrevLink = !isFirst && prevPage;
  const NextLink = !isLast && nextPage;

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      <BlogPostsWrapper>
        {Posts.map(({ node }: any) => {
          return (
            <PostCardMinimal
              key={node.fields.slug}
              title={node.frontmatter.title || node.fields.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
              url={node.fields.slug}
              description={node.frontmatter.description || node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
            />
          );
        })}

        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            description
            tags
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
`;

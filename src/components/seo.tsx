import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: any;
  title: string;
  seoTitle?: string;
};

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  seoTitle,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        markdownRemark {
          frontmatter {
            title
            seoTitle
            date(formatString: "DD MMM, YYYY")
            description
            seoDescription
            tags
            headerAlt
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const availableSeoTitle = seoTitle || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={availableSeoTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: availableSeoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: availableSeoTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

export default SEO;

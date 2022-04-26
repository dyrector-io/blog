import {
  Desciption,
  IntroImage,
  IntroInfo,
  IntroTitle,
  IntroWrapper,
} from "./style";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { graphql, useStaticQuery } from "gatsby";

import { FaMediumM } from "@react-icons/all-files/fa/FaMediumM";
import GatsbyImage from "../../../components/gatsby-image";
import React from "react";
import SocialProfile from "../../../components/social-profile/social-profile";

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/dyrector-io",
    tooltip: "Github",
  },
  {
    icon: <FaMediumM />,
    url: "https://medium.com/@dyrectorio",
    tooltip: "Medium",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/dyrectorio",
    tooltip: "LinkedIn",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/dyrectorio",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/dyrectorio/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/dyrectorio",
    tooltip: "Facebook",
  },
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpeg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData;

  return (
    <IntroWrapper>
      <IntroImage>
        <GatsbyImage src={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
        Hello! Nice to see you at <b>{author}</b> blog where you can learn about DevOps.
        </IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;

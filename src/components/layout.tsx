import React from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "react-scroll-up";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import ScrollUpButton from "./scroll-up-button/scroll-up-button";
import ResetCss from "./reset-css";
import { theme } from "../theme";
import { Cookie } from "../components/cookie/cookie";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Cookie />
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        <Footer>
          <a href="https://dyrectorio.com"> Made with ❤️ by dyrector.io team</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default Layout;

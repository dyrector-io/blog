import React, { ReactElement } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";

export function Cookie(): ReactElement {
  return (
    <CookieConsent
      style={{ background: "#DCE2F3", color: "#02164B", padding: "20px" }}
      buttonStyle={{
        background: "#771BDF",
        color: "white",
        fontSize: "14px",
        borderRadius: "25px",
        padding: "16px 25px",
      }}
      buttonText="Agree"
    >
      This website uses cookies to personalize content and analyse traffic in
      order to offer you a better experience. Fore more information check out
      the
      <Link to="https://dyrectorio.com/policies/cookie-policy" target="_blank">
        {" "}
        coockie policy{" "}
      </Link>
      site.
    </CookieConsent>
  );
}

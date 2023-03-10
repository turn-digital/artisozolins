import React from "react";
import Header from "./Header";
import Footer from "../components/footer/Footer";
import "./layout.css";
import "../styles/style.scss";

// set app as default lv - resolve plugin bug
typeof window !== "undefined" &&
  localStorage.setItem("gatsby-i18next-language", "lv");

const Layout = ({ children, footerInfo }) => {
  return (
    <>
      <Header />
        <main className="notfound__flex">{children}</main>
        <Footer footerInfo={footerInfo} />
    </>
  );
};
export default Layout;

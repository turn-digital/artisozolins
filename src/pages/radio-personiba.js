import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
import ArticleCard from "../components/article-card/ArticleCard";
import Button from "../components/button/Button";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import heroImage from "../images/radioHomePage.jpg";
import firstArticleImage from "../images/DigitalasBrokastis.jpeg";
import secondArticleImage from "../images/RadioNaba.jpeg";

const isBrowser = typeof window !== "undefined";

const RadioPersona = (props) => {
  const { t } = useTranslation();
  const heroInfo = {
    subtitle: t("Radio_Hero_Subtitle"),
    title: t("Radio_Hero_Title"),
    content: t("Radio_Hero_Content"),
    heroTitle: t("Hero_title"),
    heroPhone: t("Hero_Phone"),
    heroEmail: t("Hero_Emai"),
    heroMessengerPageUrl: t("Hero_Messenger_Page_Url"),
    background: t("Background_Image_Alt"),
    arrowTitle: t("Arrow_Title"),
    anchorName: t("Anchor_Name"),
  };

  const articles = [
    {
      item: firstArticleImage,
      type: "image",
      title: t("Article_1_Title"),
      content: t("Article_1_Content"),
    },
    {
      item: secondArticleImage,
      type: "image",
      title: t("Article_2_Title"),
      content: t("Article_2_Content"),
    },
  ];

  const footerInfo = {
    title: t("Footer_Title_Index"),
    phone: t("Footer_Phone_Index"),
    email: t("Footer_Email_Index"),
    fbLink: t("Footer_FbLink_Index"),
    fbInLink: t("Footer_InLink_Index"),
  };

  const reviewFbBtn = {
    title: t("Review_FaceBook_Button_Title"),
    target: "_blank",
    link: "https://www.facebook.com/artis.ozolins/friends?lst=100000075771612%3A1421011988%3A1560273788&source_ref=pb_friends_tl",
    class: "button--fb",
    icon: "fb-icon",
  };

  const articlesImagesAlt = [
    t("Article_1_Image_Alt"),
    t("Article_2_Image_Alt"),
  ];

  return (
    <>
      <Layout footerInfo={footerInfo}>
        <div className="page page--wedding">
          <Hero type="wedding" info={heroInfo} image={heroImage} />

          <div className="page__articles">
            <ArticleCard article={articles} imagesAlt={articlesImagesAlt} />
          </div>
          <div className="page__reviews">
            <div className="page__reviews-btn">
              <div className="wrapper">
                <Button
                  title={reviewFbBtn.title}
                  link={reviewFbBtn.link}
                  target={reviewFbBtn.target}
                  btnClass={reviewFbBtn.class}
                  icon={reviewFbBtn.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const Head = () => {
  if (isBrowser) {
    return (
      <HeadMeta
        title={
          window.location.href.includes("/en/")
            ? "Artis Ozolins | Radio personality"
            : "Artis Ozoliņš | Radio personība"
        }
        description={
          window.location.href.includes("/en/")
            ? "I host different types of events - both in-person and online, from corporate to entertaining, in Latvian and English. Feel free to write or call me. I will be happy to be your event host. Let’s create memories together!"
            : "Vadu dažāda veida pasākumus – sākot no korporatīvajiem līdz izklaides, gan lielus, gan mazus, latviski un angliski. Improvizācijas teātris un radio raidījuma vadīšana man devusi spēju arī moderēt dažāda veida diskusijas un iedegt dzirksteles cilvēku acīs, vadot kāzas.Radio personība."
        }
      />
    );
  }
};

export default RadioPersona;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "index", "radio_personiba"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

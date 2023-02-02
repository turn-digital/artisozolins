import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
// import Reviews from "../components/reviews/Reviews";
import ArticleCard from "../components/article-card/ArticleCard";
import Button from "../components/button/Button";

const RadioPersona = (props) => {
  const { t } = useTranslation();
  const heroInfo = {
    subtitle: t("radio_personiba:Radio_Hero_Subtitle"),
    title: t("radio_personiba:Radio_Hero_Title"),
    content: t("radio_personiba:Radio_Hero_Content"),
    heroTitle: t("index:Hero_title"),
    heroPhone: t("index:Hero_Phone"),
    heroEmail: t("index:Hero_Emai"),
    heroMessengerPageUrl: t("index:Hero_Messenger_Page_Url"),
    background: t("radio_personiba:Background_Image_Alt"),
    arrowTitle: t("index:Arrow_Title"),
    anchorName: t("index:Anchor_Name"),
  };

  const articles = [
    {
      item: "/DigitalasBrokastis.jpeg",
      type: "image",
      title: t("radio_personiba:Article_1_Title"),
      content: t("radio_personiba:Article_1_Content"),
    },
    {
      item: "/RadioNaba.jpeg",
      type: "image",
      title: t("radio_personiba:Article_2_Title"),
      content: t("radio_personiba:Article_2_Content"),
    },
  ];

  const footerInfo = {
    title: t("index:Footer_Title_Index"),
    phone: t("index:Footer_Phone_Index"),
    email: t("index:Footer_Email_Index"),
    fbLink: t("index:Footer_FbLink_Index"),
    fbInLink: t("index:Footer_InLink_Index"),
  };

  const reviewFbBtn = {
    title: t("index:Review_FaceBook_Button_Title"),
    target: "_blank",
    link: "https://www.facebook.com/artis.ozolins/friends?lst=100000075771612%3A1421011988%3A1560273788&source_ref=pb_friends_tl",
    class: "button--fb",
    icon: "fb-icon",
  };

  const articlesImagesAlt = [
    t("radio_personiba:Article_1_Image_Alt"),
    t("radio_personiba:Article_2_Image_Alt"),
  ];

  return (
    <>
      <HeadMeta
        title={`${t("index:Meta_Title")} | ${t(
          "radio_personiba:Page_Name_For_Title"
        )}`}
        description={t("radio_personiba:Meta_desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--wedding">
          <Hero type="wedding" info={heroInfo} image={"/radioHomePage.jpg"} />

          <div className="page__articles">
            <ArticleCard article={articles} imagesAlt={articlesImagesAlt} />
          </div>
          <div className="page__reviews">
            {/* there is 0 reviews on this page */}
            {/* <Reviews reviews={reviews} /> */}
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

export default RadioPersona;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "index",
        "radio_personiba",
      ])),
      // Will be passed to the page component as props
    },
  };
}

// i18next-extract-mark-ns-start index
import React from "react";
import HeadMeta from "../components/HeadMeta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
import ArticleCard from "../components/article-card/ArticleCard";
import Reviews from "../components/reviews/Reviews";
import Button from "../components/button/Button";

const EwentOrganiser = ({ data }) => {
  const { t } = useTranslation();
  const heroInfo = {
    subtitle: t("pasakumu_vaditajs:Organiser_Hero_Subtitle"),
    title: t("pasakumu_vaditajs:Organiser_Hero_Title"),
    content: t("pasakumu_vaditajs:Organiser_Hero_Content"),
    heroTitle: t("index:Hero_title"),
    heroPhone: t("index:Hero_Phone"),
    heroEmail: t("index:Hero_Emai"),
    heroMessengerPageUrl: t("index:Hero_Messenger_Page_Url"),
    background: t("pasakumu_vaditajs:Background_Image_Alt"),
    arrowTitle: t("index:Arrow_Title"),
    anchorName: t("index:Anchor_Name"),
  };
  const articles = [
    {
      item: "/event-naba.jpg",
      type: "image",
      title: t("pasakumu_vaditajs:Article_1_Title"),
      content: t("pasakumu_vaditajs:Article_1_Content"),
    },
    {
      item: "/eventIgnition.jpg",
      type: "image",
      title: t("pasakumu_vaditajs:Article_2_Title"),
      content: t("pasakumu_vaditajs:Article_2_Content"),
    },
    {
      item: "/event-inovuss.jpg",
      type: "image",
      title: t("pasakumu_vaditajs:Article_3_Title"),
      content: t("pasakumu_vaditajs:Article_3_Content"),
    },
  ];

  const reviews = [
    {
      name: t("pasakumu_vaditajs:Review_1_Title"),
      position: t("pasakumu_vaditajs:Review_1_Position"),
      event: t("pasakumu_vaditajs:Review_1_Event"),
      content: t("pasakumu_vaditajs:Review_1_Content"),
      image: "/elita-apine.jpg",
    },
    {
      name: t("pasakumu_vaditajs:Review_2_Title"),
      position: t("pasakumu_vaditajs:Review_2_Position"),
      event: t("pasakumu_vaditajs:Review_2_Event"),
      content: t("pasakumu_vaditajs:Review_2_Content"),
      image: "/santa-zunda.jpg",
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
    t("pasakumu_vaditajs:Article_1_Image_Alt"),
    t("pasakumu_vaditajs:Article_2_Image_Alt"),
    t("pasakumu_vaditajs:Article_3_Image_Alt"),
  ];

  const reviewesImagesAlt = [
    t("pasakumu_vaditajs:Review_1_Image_Alt"),
    t("pasakumu_vaditajs:Review_2_Image_Alt"),
  ];

  return (
    <>
      <HeadMeta
        title={`${t("index:Meta_Title")} | ${t(
          "pasakumu_vaditajs:Page_Name_For_Title"
        )}`}
        description={t("pasakumu_vaditajs:Meta_desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--wedding">
          <Hero
            type="wedding"
            info={heroInfo}
            image={"/pasakuma-vaditajs-hero-2021.jpg"}
          />
          <div className="page__articles">
            <ArticleCard article={articles} imagesAlt={articlesImagesAlt} />
          </div>
          <div className="page__reviews">
            <Reviews reviews={reviews} imagesAlt={reviewesImagesAlt} />
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

export default EwentOrganiser;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "index",
        "pasakumu_vaditajs",
      ])),
      // Will be passed to the page component as props
    },
  };
}

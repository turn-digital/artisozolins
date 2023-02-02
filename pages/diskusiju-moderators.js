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

const DiscussionModerator = ({ data }) => {
  const { t } = useTranslation();
  const heroInfo = {
    subtitle: t("diskusiju_moderators:Moderator_Hero_Subtitle"),
    title: t("diskusiju_moderators:Moderator_Hero_Title"),
    content: t("diskusiju_moderators:Moderator_Hero_Content"),
    heroTitle: t("index:Hero_title"),
    heroPhone: t("index:Hero_Phone"),
    heroEmail: t("index:Hero_Emai"),
    heroMessengerPageUrl: t("index:Hero_Messenger_Page_Url"),
    background: t("diskusiju_moderators:Background_Image_Alt"),
    arrowTitle: t("index:Arrow_Title"),
    anchorName: t("index:Anchor_Name"),
  };
  const articles = [
    {
      item: "/moderator-event-disc.jpg",
      type: "image",
      title: t("diskusiju_moderators:Article_1_Title"),
      content: t("diskusiju_moderators:Article_1_Content"),
    },
    {
      item: "/moderator-event-lbp-2.png",
      type: "image",
      title: t("diskusiju_moderators:Article_2_Title"),
      content: t("diskusiju_moderators:Article_2_Content"),
    },
    {
      item: "/moderator-event-DFF.jpg",
      type: "image",
      title: t("diskusiju_moderators:Article_3_Title"),
      content: t("diskusiju_moderators:Article_3_Content"),
    },
  ];

  const reviews = [
    {
      name: t("diskusiju_moderators:Review_1_Title"),
      position: t("diskusiju_moderators:Review_1_Position"),
      event: t("diskusiju_moderators:Review_1_Event"),
      content: t("diskusiju_moderators:Review_1_Content"),
      image: "/janis-andzans.jpg",
    },
    {
      name: t("diskusiju_moderators:Review_2_Title"),
      position: t("diskusiju_moderators:Review_2_Position"),
      event: t("diskusiju_moderators:Review_2_Event"),
      content: t("diskusiju_moderators:Review_2_Content"),
      image: "/anete-ugaine.jpg",
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
    t("diskusiju_moderators:Article_1_Image_Alt"),
    t("diskusiju_moderators:Article_2_Image_Alt"),
    t("diskusiju_moderators:Article_3_Image_Alt"),
  ];

  const reviewesImagesAlt = [
    t("diskusiju_moderators:Review_1_Image_Alt"),
    t("diskusiju_moderators:Review_2_Image_Alt"),
  ];

  return (
    <>
      <HeadMeta
        title={`${t("index:Meta_Title")} | ${t(
          "diskusiju_moderators:Page_Name_For_Title"
        )}`}
        description={t("diskusiju_moderators:Meta_desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--wedding">
          <Hero type="wedding" info={heroInfo} image={"/moderators.jpg"} />
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

export default DiscussionModerator;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "index",
        "diskusiju_moderators",
      ])),
      // Will be passed to the page component as props
    },
  };
}

import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Activities from "../components/activities/Activities";
import Clients from "../components/clients/Clients";
import Overview from "../components/overview/Overview";
import Hero from "../components/hero/Hero";
import HeadMeta from "../components/HeadMeta";

const isBrowser = typeof window !== "undefined";

export default function Home(props) {
  const { t } = useTranslation();

  const heroInfo = {
    subtitle: t("Home_Hero_Subtitle"),
    title: t("Home_Hero_Title"),
    content: t("Home_Hero_Content"),
    heroTitle: t("Hero_title"),
    heroPhone: t("Hero_Phone"),
    heroEmail: t("Hero_Emai"),
    heroMessengerPageUrl: t("Hero_Messenger_Page_Url"),
    arrowTitle: t("Arrow_Title"),
    anchorName: t("Anchor_Name"),
  };

  const footerInfo = {
    title: t("Footer_Title_Index"),
    phone: t("Footer_Phone_Index"),
    email: t("Footer_Email_Index"),
    fbLink: t("Footer_FbLink_Index"),
    fbInLink: t("Footer_InLink_Index"),
  };

  const activitiesContent = {
    organiser: t("Organiser_title"),
    moderator: t("Moderator_title"),
    radio: t("Radio_title"),
  };

  const activitiesAlt = {
    event: t("Event_Image_Alt"),
    moderator: t("Moderator_Image_Alt"),
    radio: t("Radio_Image_Alt"),
  };

  return (
    <>
      <Layout footerInfo={footerInfo}>
        <div className="page page--home">
          <Hero type="home" info={heroInfo} />
          <Overview activitiesAlt={activitiesAlt} />
          <Clients title={t("Home_Clients_Title")} />
          <Activities
            title={t("Home_Activieties_Title")}
            content={activitiesContent}
            activitiesAlt={activitiesAlt}
            anchorName={t("Anchor_Name")}
          />
        </div>
      </Layout>
    </>
  );
}

export const Head = () => {
  if (isBrowser) {
    return (
      <HeadMeta
        title={
          window.location.href.includes("/en/")
            ? "Artis Ozolins | Event host"
            : "Artis Ozoli???? | Pas??kuma vad??t??js kl??tien?? un tie??saist??"
        }
        description={
          window.location.href.includes("/en/")
            ? "I host different types of events - both in-person and online, from corporate to entertaining, in Latvian and English. Feel free to write or call me. I will be happy to be your event host. Let???s create memories together!"
            : "Vadu da????da veida pas??kumus ??? gan kl??tien??, gan online, s??kot no korporat??vajiem l??dz izklaides, latviski un angliski. Improviz??cijas te??tris un radio raid??juma vad????ana man devusi sp??ju ar?? moder??t da????da veida diskusijas un iedegt dzirksteles cilv??ku ac??s, vadot k??zas."
        }
      />
    );
  }
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
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

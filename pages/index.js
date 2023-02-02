import HeadMeta from "../components/HeadMeta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout";
import Activities from "../components/activities/Activities";
import Clients from "../components/clients/Clients";
import Overview from "../components/overview/Overview";
import Hero from "../components/hero/Hero";

export default function Home(props) {
  const { t } = useTranslation();

  const heroInfo = {
    subtitle: t("index:Home_Hero_Subtitle"),
    title: t("index:Home_Hero_Title"),
    content: t("index:Home_Hero_Content"),
    heroTitle: t("index:Hero_title"),
    heroPhone: t("index:Hero_Phone"),
    heroEmail: t("index:Hero_Emai"),
    heroMessengerPageUrl: t("index:Hero_Messenger_Page_Url"),
    arrowTitle: t("index:Arrow_Title"),
    anchorName: t("index:Anchor_Name"),
  };

  const footerInfo = {
    title: t("index:Footer_Title_Index"),
    phone: t("index:Footer_Phone_Index"),
    email: t("index:Footer_Email_Index"),
    fbLink: t("index:Footer_FbLink_Index"),
    fbInLink: t("index:Footer_InLink_Index"),
  };

  const activitiesContent = {
    organiser: t("index:Organiser_title"),
    moderator: t("index:Moderator_title"),
    radio: t("index:Radio_title"),
  };

  const activitiesAlt = {
    event: t("index:Event_Image_Alt"),
    moderator: t("index:Moderator_Image_Alt"),
    radio: t("index:Radio_Image_Alt"),
  };

  return (
    <>
      <HeadMeta
        title={`${t("index:Meta_Title")} | ${t(
          "index:Page_Name_For_Title_Home"
        )}`}
        description={t("index:Meta_Desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--home">
          <Hero type="home" info={heroInfo} />
          <Overview activitiesAlt={activitiesAlt} />
          <Clients title={t("index:Home_Clients_Title")} />
          <Activities
            title={t("index:Home_Activieties_Title")}
            content={activitiesContent}
            activitiesAlt={activitiesAlt}
            anchorName={t("index:Anchor_Name")}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
      // Will be passed to the page component as props
    },
  };
}

// i18next-extract-mark-ns-start 404

import React from "react";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const NotFoundPage = (props) => {
  const { t } = useTranslation();
  const footerInfo = {
    title: t("index:Footer_Title_Index"),
    phone: t("index:Footer_Phone_Index"),
    email: t("index:Footer_Email_Index"),
    fbLink: t("index:Footer_FbLink_Index"),
    fbInLink: t("index:Footer_InLink_Index"),
  };

  return (
    <div className="notfound">
      <HeadMeta
        title={`${t("index:Meta_Title")} | ${t("404:Meta_Title")}`}
        description={t("404:Meta_Desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="notfound__box">
          <div className="notfound__content">
            <p className="notfound__label">{t("404:LABEL")}</p>
            <div className="notfound__image">
              <picture>
                <img
                  src="/404.svg"
                  alt={t("404:ALT")}
                />
              </picture>
            </div>
            <h1 className="notfound__title">{t("404:TITLE")}</h1>
            <p className="notfound__desc">{t("404:DESC")}</p>
            <p> <Link className="notfound__link" href={`/`}>{t("404:LINK")}</Link></p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index", "404"])),
      // Will be passed to the page component as props
    },
  };
}

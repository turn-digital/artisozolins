import React from "react";
import Link from "next/link";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import patternSvg from "../../images/svg/pattern-round-blade.svg";
import SvgCircle from "../SvgCircle";
import moderatorsImage from "../../images/moderators.jpg";
import pasakumaImage from "../../images/pasakuma-vaditajs-hero.jpg";
import radioImage from "../../images/radioHomePage.jpg";
import Image from "next/image";

const OverviewBlock = ({ title, content, activitiesAlt, anchorName }) => {
  const { event, moderator, radio } = activitiesAlt;
  return (
    <div className="activities" id={anchorName}>
      <div className="wrapper">
        <h3 className="activities__title title titlePadding">{title}</h3>
        <ul className="activities__list">
          <li className="activities__item">
            <Link
              className="activities__link"
              href="/pasakumu-vaditajs/"
            ></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <SvgCircle />
              <div className={`activities__image-tag pasakumu-vaditajs`}>
                <Image
                  src={pasakumaImage}
                  alt={event}
                  placeholder="blurred"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.organiser}</h4>
          </li>
          <li className="activities__item">
            <Link
              className="activities__link"
              href="/diskusiju-moderators/"
            ></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <SvgCircle />
              <div className={`activities__image-tag diskusiju-moderators`}>
                <Image
                  src={moderatorsImage}
                  alt={moderator}
                  placeholder="blurred"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.moderator}</h4>
          </li>
          <li className="activities__item">
            <Link className="activities__link" href="/radio-personiba/"></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <SvgCircle />
              <div className={`activities__image-tag radio-personiba`}>
                <Image
                  src={radioImage}
                  alt={radio}
                  placeholder="blurred"
                  objectFit="cover"
                  fill
                />
              </div>
            </div>
            <h4 className="activities__section">{content.radio}</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewBlock;
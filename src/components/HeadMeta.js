import React from "react";
import ImageApple from "../images/favicons/apple-touch-icon.png";
import ImageChrome192 from "../images/favicons/android-chrome-192x192.png";
import ImageChrome512 from "../images/favicons/android-chrome-512x512.png";
import Image32 from "../images/favicons/favicon-32x32.png";
import Image16 from "../images/favicons/favicon-16x16.png";
// import ImageWebmanifest from "../images/favicons/site.webmanifest";
import ImageSafari from "../images/favicons/safari-pinned-tab.svg";

const HeadMeta = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href={ImageApple} />
      <link rel="andorid-chrome-icon" sizes="192x192" href={ImageChrome192} />
      <link rel="andorid-chrome-icon" sizes="512x512" href={ImageChrome512} />
      <link rel="icon" type="image/png" sizes="32x32" href={Image32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Image16} />
      {/* <link rel="manifest" href={ImageWebmanifest} /> */}
      <link rel="manifest" href="../images/favicons/site.webmanifest" />
      <link rel="mask-icon" href={ImageSafari} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
export default HeadMeta;

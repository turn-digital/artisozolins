# How to change texts in localisation.

## If you want to change some text for some page e.g. radio-personiba page

- You have to go to the public folder-> locales -> needed language folder -> open file with the name of the page radio-personiba.js
- Find the line where you want to change the text e.g. `"Article_1_Title": "Digitālās brokastis"`, then change it `"Article_1_Title": "Digitālās broadcasts"` then save your changes
- Write commit msg and commit
- Do the same for second language if needed

# How to change the image

## If you wantto change image for some page e.g. radio-personiba page

- First you need to upload new image e.g. ArtisRadioImage.smth into public folder
- Go to the pages folder -> needed page folder (radio-personiba.js in our case)
- Find the place where you want to add this image e.g. we want to change the second article image
- `const articles = [
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
];`
- Second article have the `item: "/RadioNaba.jpeg"`, then change it to -> `item: "/ArtisRadioImage.smth"`
- Write commit msg and commit
- Do the same for second language if needed

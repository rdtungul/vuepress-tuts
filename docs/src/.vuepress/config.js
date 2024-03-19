const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "RD VuePress (Testing)",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  // description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "author", content: "Roseph Darl" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  // Navbar, Logo, and Links
  themeConfig: {
    logo: "./images/logo.png",
    nav: [
      {
        text: "Topics",
        link: "/topics/",
      },
      {
        text: "Posts",
        items: [
          { text: "All Posts", link: "/Posts/Facebook/" },
          {
            text: "All Posts",
            items: [
              { text: "Facebook", link: "/topics/Facebook/" },
              { text: "Instagram", link: "/topics/Instagram/" },
              { text: "Twitter", link: "/topics/Twitter/" },
            ],
          },
        ],
      },
      {
        text: "Resources",
        link: "/resources/",
      },
      {
        text: "Donate",
        link: "/donate/",
      },
      {
        text: "GitHub",
        link: "https://github.com/rdtungul",
        target: "_blank",
        rel: false,
      },
    ],
  },
  plugins: ["@goy/svg-icons"],
};

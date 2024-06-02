import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://thatsoftware.dev/", // replace this with your deployed domain
  author: "Akash Raju M",
  desc: "Experienced Software Developer with 5 years of expertise in JavaScript and Python. Demonstrated success in solo and leadership roles across startups and Fortune 500 companies, including Ford.",
  title: "ThatSoftware.Dev",
  ogImage: "akash-banner.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/akashrajum7",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akashrajum/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:akashrajum7@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

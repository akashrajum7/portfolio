import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://thatsoftware.dev/", // replace this with your deployed domain
  author: "Akash Raju M",
  desc: "My tiny little corner on the internet where I write about software development, tech, and life.",
  title: "ThatSoftware.Dev",
  ogImage: "akash-banner.jpg",
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

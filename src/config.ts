import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://test.hardlug.com/",
  author: "Mark Anderson",
  desc: "Testing a new website format for the HaRdLUG LEGO Fan Community.",
  title: "HaRdLug",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 70,
  height: 70,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://facebook.com/hardlug",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hardlug",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hardlug2002@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/uNxdQyMfby",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];

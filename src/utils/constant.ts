import type { IFooterLinks } from "@/types/footerLinks";
import type { IPaymentData } from "@/types/paymentPlan";

export const paymentData: Array<IPaymentData> = [
  {
    text: "Hulu Streaming Library with thousands of TV episodes and movies",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: true,
  },

  {
    text: "Most new episodes the day after they air^",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },

  {
    text: "Access to award-winning Hulu Originals",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Watch on your TV, laptop, phone, or tablet",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Up to 6 user profiles",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: true,
  },
  {
    text: "Watch on 2 different screens at the same time",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "No ads in streaming library",
    firstColumn: false,
    secondColumn: true,
    thirdColumn: false,
    hasInfo: true,
  },
  {
    text: "Download and watch",
    firstColumn: false,
    secondColumn: true,
    thirdColumn: false,
    hasInfo: true,
  },
  {
    text: "Live TV with 75+ top channels. No cable required.",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
  {
    text: "Live TV guide to navigate channels",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Record Live TV with 50 hours of Cloud DVR storage",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Endless entertainment with Disney+, ad-free",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
  {
    text: "Live sports with ESPN+, now on Hulu",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
];

export const addOns: Array<IPaymentData> = [
  {
    text: "HBO Max™",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },

  {
    text: "CINEMAX®",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },

  {
    text: "SHOWTIME®",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "STARZ®",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Unlimited Screens",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
  {
    text: "Enhanced Cloud DVR",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: false,
  },
  {
    text: "Entertainment Add-on",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
  {
    text: "Espanol Add-on",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    hasInfo: true,
  },
];

export const footerLinks: Array<IFooterLinks> = [
  {
    section: "Browse",
    links: [
      "Streaming Library",
      "Live TV",
      "Live News",
      "Live Sports",
      " ",
      "TV shows",
      "Movies",
      "Originals",
      "Networks",
      "Kids",
      "FX",
      "",
      "HBO Max \u2122",
      "Cinemax",
      "Showtime",
      "STARZ",
      "",
      "Hulu, Disney+, and ESPN+",
      "Hulu (No Ads), Disney+, and ESPN+",
      "Student Discount",
    ],
  },
  {
    section: "Help",
    links: [
      "Account & Billing",
      "Plans & Pricing",
      "Supported devices",
      "Accessibility",
    ],
  },
  { section: "About Us", links: ["Shop Hulu", "Press", "Jobs", "Contact"] },
];

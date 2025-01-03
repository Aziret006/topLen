import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Gilroy-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Gilroy-Heavy.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Gilroy-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/Gilroy-LightItalic.ttf", weight: "300", style: "italic" },
    {
      path: "./fonts/Gilroy-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    { path: "./fonts/Gilroy-MediumItalic.ttf", weight: "500", style: "italic" },
    {
      path: "./fonts/Gilroy-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/Gilroy-BoldItalic.ttf", weight: "700", style: "italic" },
    {
      path: "./fonts/Gilroy-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/Gilroy-HeavyItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

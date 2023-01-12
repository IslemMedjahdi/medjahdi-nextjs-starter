import { NextSeoProps } from "next-seo/lib/types";
import { INFO } from "./info";

export const SEO: NextSeoProps = {
  titleTemplate: `${INFO.title} | %s`,
  description: INFO.description,
};

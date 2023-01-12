import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { SEO } from "../constants/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

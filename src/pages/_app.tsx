// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Structure from "../components/Structure";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Charles Njoroge - Software Engineer, Web & Mobile Developer
        </title>
        <meta
          name="description"
          content="Professional web and mobile developer specializing in creating modern, responsive applications. View my portfolio and services."
        />
        <meta
          name="keywords"
          content="web development, mobile development, frontend developer, full-stack developer, kenya, nairobi, software developer, software engineer, web design"
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Charles Njoroge - Software Engineer, Web & Mobile Developer"
        />
        <meta
          property="og:description"
          content="Professional web and mobile developer specializing in creating modern, responsive applications."
        />
        <meta property="og:url" content="https://dev-charles.vercel.app/" />
        <meta
          property="og:image"
          content="https://dev-charles.vercel.app/images/passport.jpeg"
        />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/passport.jpeg" />
      </Head>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}

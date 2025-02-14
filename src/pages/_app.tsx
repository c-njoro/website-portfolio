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
          content="Charles Njoroge, Charles Njoroge software engineer, Charles Njoroge web developer, Charles Njoroge website designer in Kenya, Software developer in Nairobi, Full-stack developer in Kenya, Best website developer in Kenya, Website design services in Kenya, Mobile app developer in Kenya, Software engineer in Nairobi, Best website developer in Nairobi, Full-stack developer in Kenya (React, Next.js, Node.js), Website development services in Kenya, Custom website design for businesses in Kenya, E-commerce website developer in Kenya, Web and mobile development in Nairobi, Software development company in Kenya, Professional web designer in Nairobi, Freelance web developer in Kenya, About Charles Njoroge – Web Developer in Kenya, Expert software developer in Nairobi, Web designer with 5+ years of experience in Kenya, Best freelance software engineer in Kenya, Affordable website developer in Kenya, JavaScript & React.js developer in Nairobi, MERN stack developer in Kenya, Professional web development services in Kenya, Custom website development in Nairobi, Full-stack web development with React.js and Next.js, Best eCommerce website developer in Kenya, CMS development (WordPress, Strapi, Shopify), Android and iOS mobile app development in Kenya, Affordable mobile app developer in Nairobi, React Native app development in Kenya, Website design and development in Kenya, Best UI/UX designer in Nairobi, Figma to website development services, SEO optimization services in Kenya, Improve website ranking in Google Kenya, Website speed optimization services, Enterprise software development in Kenya, Custom CRM and ERP software solutions, POS system development for businesses in Nairobi, Contact Charles Njoroge – Web Developer in Kenya, Hire a software developer in Nairobi, How to find the best website developer in Kenya, Looking for a freelance web developer in Kenya?, Request a quote for website design in Kenya, Get affordable web development services in Nairobi."
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
        <meta property="og:type" content="website" />

        {/*Twitter cards*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Charles Njoroge - Software Engineer, Web & Mobile Developer"
        />
        <meta
          name="twitter:description"
          content="Professional web and mobile developer specializing in creating modern, responsive applications."
        />
        <meta
          name="twitter:image"
          content="https://dev-charles.vercel.app/images/passport.jpeg"
        />
        <meta name="twitter:url" content="https://dev-charles.vercel.app/" />
        <meta name="twitter:site" content="@njoroUTD" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}

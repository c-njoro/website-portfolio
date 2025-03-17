// src/pages/_document.tsx
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Schema.org for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Charles Njoroge",
              url: "https://dev-charles.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/charles-njoroge-063b0626a/",
                "https://github.com/c-njoro",
              ],
              jobTitle: "Software Engineer, Web & Mobile Developer",
              description:
                "Professional web and mobile developer specializing in modern applications development using MERN, mongodb, react, node and express and next",
              image: "https://dev-charles.vercel.app/images/charles.jpeg",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

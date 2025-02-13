import { GetServerSideProps } from "next";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get your site's actual pages
  const pages = [
    "https://dev-charles.vercel.app",
    "https://dev-charles.vercel.app/services/web-and-mobile-development",
    "https://dev-charles.vercel.app/services",
    "https://dev-charles.vercel.app/contact",
    // Add all your pages here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

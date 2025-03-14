const baseURL = "https://www.fmwebagency.it";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}

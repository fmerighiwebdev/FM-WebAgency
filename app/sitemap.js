import { projects } from "@/utils/projects";

const baseURL = "https://www.fmwebagency.it";

export default function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    {
      url: `${baseURL}/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseURL}/servizi`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/portfolio`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/chi-siamo`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseURL}/contatti`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseURL}/privacy-cookie-policy`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    }
  ];

  const projectRoutes = Object.keys(projects).map((slug) => ({
    url: `${baseURL}/portfolio/${slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}

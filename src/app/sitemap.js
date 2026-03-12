import { getServerData } from "@/lib/data";

export default async function sitemap() {
    const baseUrl = "https://kdsinternational.com";
    const data = await getServerData();

    // Static routes
    const routes = ["", "/about", "/services", "/projects", "/contact", "/blog"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Dynamic service routes
    const serviceRoutes = data.services.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    // Combine
    return [...routes, ...serviceRoutes];
}

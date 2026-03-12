export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/private/"],
        },
        sitemap: "https://kdsinternational.com/sitemap.xml",
    };
}

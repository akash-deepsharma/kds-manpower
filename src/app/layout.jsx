import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getServerData } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOSInit from "@/components/common/AOSInit";

export const metadata = {
  title: {
    default: "KDS International | Precision Global Solutions",
    template: "%s | KDS International",
  },
  description:
    "KDS International delivers precision global solutions across testing & inspection, quality management, logistics, sourcing, and project management — trusted by industries worldwide for 43+ years.",
  keywords: [
    "KDS International",
    "precision solutions",
    "testing inspection",
    "global logistics",
    "quality assurance",
    "sourcing",
  ],
  openGraph: {
    type: "website",
    siteName: "KDS International",
    title: "KDS International | Precision Global Solutions",
    description:
      "Trusted global partner for testing, quality, logistics, and precision engineering.",
    url: "https://kdsinternational.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "KDS International | Precision Global Solutions",
    description:
      "Trusted global partner for precision industrial solutions since 1983.",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }) {
  const data = await getServerData();
  const theme = process.env.NEXT_PUBLIC_THEME || 'light';

  return (
    <html lang="en" className={theme}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KDS International",
              url: "https://kdsinternational.com",
              description: "Trusted global partner for testing, quality, logistics, and precision engineering.",
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-[#0d1117] dark:text-[#e6edf3] min-h-screen flex flex-col">
        <AOSInit />
        <Header services={data.services} siteName={data.siteInfo.name} theme={theme} />
        <main className="flex-1">{children}</main>
        <Footer siteInfo={data.siteInfo} services={data.services} theme={theme} />
      </body>
    </html>
  );
}

import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  geoRegion?: string;
  geoPlace?: string;
  geoPosition?: string;
  useSimpleTitle?: boolean;
}

const SEO = ({
  title,
  description,
  canonical = "https://www.neuralsolutions.cloud/",
  ogImage = "https://www.neuralsolutions.cloud/og-image.jpg",
  ogType = "website",
  keywords,
  noindex = false,
  geoRegion,
  geoPlace,
  geoPosition,
  useSimpleTitle = false,
}: SEOProps) => {
  const fullTitle = useSimpleTitle
    ? title
    : `${title} | Neural Solutions — Victoria BC AI Automation Agency`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Author, Publisher, Creator */}
      <meta name="author" content="Neural Solutions" />
      <meta name="publisher" content="Neural Solutions" />
      <meta name="creator" content="Neural Solutions" />

      {/* Geographic Targeting */}
      <meta name="geo.region" content={geoRegion || "CA-BC"} />
      <meta name="geo.placename" content={geoPlace || "Victoria"} />
      <meta name="geo.position" content={geoPosition || "48.4284;-123.3656"} />
      <meta name="ICBM" content={geoPosition ? geoPosition.replace(';', ', ') : "48.4284, -123.3656"} />

      {/* Language & Locale */}
      <meta property="og:locale" content="en_CA" />
      <link rel="alternate" hrefLang="en-ca" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Neural Solutions" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Business Contact */}
      <meta name="contact" content="growth@neuralcoremarketing.com" />
    </Helmet>
  );
};

export default SEO;

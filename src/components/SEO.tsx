import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonical = "https://neuralsolutions.ca",
  ogImage = "https://neuralsolutions.ca/og-image.jpg",
  ogType = "website",
  keywords,
  noindex = false,
}: SEOProps) => {
  const fullTitle = `${title} | Neural Solutions — Victoria BC AI Automation Agency`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Geographic Targeting */}
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Victoria" />
      <meta name="geo.position" content="48.4284;-123.3656" />
      <meta name="ICBM" content="48.4284, -123.3656" />

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

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Business Information */}
      <meta name="author" content="Neural Solutions" />
      <meta name="contact" content="growth@neuralcoremarketing.com" />
    </Helmet>
  );
};

export default SEO;

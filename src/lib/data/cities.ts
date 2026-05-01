export interface CityData {
  slug: string;
  name: string;
  province: string;
  provinceAbbr: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  heroHeadline: string;
  description: string;
}

export const cities: CityData[] = [
  // Tier 1 - Major Markets
  {
    slug: "victoria",
    name: "Victoria",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Automation Agency in Victoria, BC",
    metaDescription: "AI automation and custom software development for Victoria businesses. Expert AI integration, consulting, and intelligent solutions across Vancouver Island.",
    keywords: [
      "AI agency Victoria BC",
      "AI automation Vancouver Island",
      "custom software Victoria",
      "AI consultant Victoria",
      "machine learning Victoria BC",
      "AI integration Victoria",
      "business automation Victoria"
    ],
    coordinates: { lat: 48.4284, lng: -123.3656 },
    heroHeadline: "AI Automation Agency in Victoria, BC",
    description: "Based in Victoria, Neural Solutions delivers cutting-edge AI automation and custom software development to businesses across Vancouver Island and British Columbia. Our local team combines deep technical expertise with an understanding of the BC business landscape."
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Agency Vancouver - Custom AI Solutions & Automation",
    metaDescription: "Leading AI automation and custom software development for Vancouver businesses. Transform your operations with intelligent AI solutions tailored to BC market.",
    keywords: [
      "AI agency Vancouver",
      "AI automation Vancouver BC",
      "custom software Vancouver",
      "AI consultant Vancouver",
      "machine learning Vancouver",
      "AI integration Vancouver",
      "Vancouver AI development"
    ],
    coordinates: { lat: 49.2827, lng: -123.1207 },
    heroHeadline: "AI Solutions for Vancouver Businesses",
    description: "Neural Solutions brings enterprise-grade AI automation and custom software development to Vancouver's dynamic business community. We help BC companies leverage artificial intelligence to scale operations and compete in the global marketplace."
  },
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    provinceAbbr: "ON",
    metaTitle: "AI Automation Agency Toronto - Custom AI Development",
    metaDescription: "Toronto's trusted AI automation and custom software partner. Neural Solutions delivers intelligent AI solutions for Ontario businesses ready to scale fast.",
    keywords: [
      "AI agency Toronto",
      "AI automation Toronto Ontario",
      "Toronto AI consultant",
      "custom software Toronto",
      "machine learning Toronto",
      "AI development Toronto",
      "Toronto business automation"
    ],
    coordinates: { lat: 43.6532, lng: -79.3832 },
    heroHeadline: "AI Solutions for Toronto's Innovation Economy",
    description: "Neural Solutions brings world-class AI automation and intelligent software development to Toronto's thriving business community. We help Ontario enterprises leverage AI to compete globally while serving the local market."
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    provinceAbbr: "AB",
    metaTitle: "AI Agency Calgary - Business Automation & AI Solutions",
    metaDescription: "Calgary's premier AI automation agency. Neural Solutions delivers custom AI development and intelligent software for Alberta businesses modernizing fast.",
    keywords: [
      "AI agency Calgary",
      "AI automation Calgary Alberta",
      "Calgary AI consultant",
      "custom software Calgary",
      "machine learning Calgary",
      "AI integration Calgary",
      "Calgary business automation"
    ],
    coordinates: { lat: 51.0447, lng: -114.0719 },
    heroHeadline: "AI Automation Agency in Calgary, AB",
    description: "Neural Solutions delivers powerful AI automation and custom software development to Calgary's innovative business landscape. Our Alberta-based expertise helps companies modernize operations with intelligent solutions built for growth."
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec",
    provinceAbbr: "QC",
    metaTitle: "AI Agency Montreal - Custom AI Development & Automation",
    metaDescription: "Montreal's AI automation experts. Neural Solutions provides custom AI development and intelligent software for Quebec businesses seeking transformation.",
    keywords: [
      "AI agency Montreal",
      "AI automation Montreal Quebec",
      "Montreal AI consultant",
      "custom software Montreal",
      "machine learning Montreal",
      "AI development Montreal",
      "Montreal business automation"
    ],
    coordinates: { lat: 45.5017, lng: -73.5673 },
    heroHeadline: "AI Solutions for Montreal Enterprises",
    description: "Neural Solutions brings cutting-edge AI automation and custom software development to Montreal's vibrant tech ecosystem. We help Quebec businesses harness artificial intelligence to drive innovation and competitive advantage."
  },

  // Tier 2 - Secondary Markets
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceAbbr: "AB",
    metaTitle: "AI Automation Agency Edmonton - Custom AI Solutions",
    metaDescription: "Edmonton's AI automation partner. Neural Solutions delivers custom software development and intelligent AI solutions for Alberta operational excellence.",
    keywords: [
      "AI agency Edmonton",
      "AI automation Edmonton Alberta",
      "Edmonton AI consultant",
      "custom software Edmonton",
      "machine learning Edmonton",
      "AI integration Edmonton",
      "Edmonton business automation"
    ],
    coordinates: { lat: 53.5461, lng: -113.4938 },
    heroHeadline: "AI Automation Agency in Edmonton, AB",
    description: "Neural Solutions provides advanced AI automation and custom software development for Edmonton businesses. Our Alberta expertise helps companies implement intelligent solutions that streamline operations and accelerate growth."
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    provinceAbbr: "ON",
    metaTitle: "AI Agency Ottawa - Business Automation & AI Development",
    metaDescription: "Ottawa's trusted AI automation agency. Neural Solutions delivers enterprise-grade AI development and custom software for Ontario capital region businesses.",
    keywords: [
      "AI agency Ottawa",
      "AI automation Ottawa Ontario",
      "Ottawa AI consultant",
      "custom software Ottawa",
      "machine learning Ottawa",
      "AI development Ottawa",
      "Ottawa business automation"
    ],
    coordinates: { lat: 45.4215, lng: -75.6972 },
    heroHeadline: "AI Solutions for Ottawa Businesses",
    description: "Neural Solutions brings sophisticated AI automation and custom software development to Ottawa's technology sector. We help Ontario businesses in the capital region leverage artificial intelligence for operational transformation and competitive positioning."
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    provinceAbbr: "MB",
    metaTitle: "AI Automation Agency Winnipeg - Custom AI Solutions",
    metaDescription: "Winnipeg's AI automation experts. Neural Solutions provides custom AI development and intelligent software for Manitoba businesses embracing transformation.",
    keywords: [
      "AI agency Winnipeg",
      "AI automation Winnipeg Manitoba",
      "Winnipeg AI consultant",
      "custom software Winnipeg",
      "machine learning Winnipeg",
      "AI integration Winnipeg",
      "Winnipeg business automation"
    ],
    coordinates: { lat: 49.8951, lng: -97.1384 },
    heroHeadline: "AI Automation Agency in Winnipeg, MB",
    description: "Neural Solutions delivers practical AI automation and custom software development to Winnipeg's growing business community. Our Manitoba-focused approach helps companies implement intelligent solutions that drive measurable results."
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario",
    provinceAbbr: "ON",
    metaTitle: "AI Agency Mississauga - AI Automation & Custom Development",
    metaDescription: "Mississauga's AI automation partner. Neural Solutions delivers custom AI development and intelligent software for Ontario businesses in Greater Toronto.",
    keywords: [
      "AI agency Mississauga",
      "AI automation Mississauga Ontario",
      "Mississauga AI consultant",
      "custom software Mississauga",
      "machine learning Mississauga",
      "AI development Mississauga",
      "Mississauga business automation"
    ],
    coordinates: { lat: 43.5890, lng: -79.6441 },
    heroHeadline: "AI Solutions for Mississauga Enterprises",
    description: "Neural Solutions brings enterprise-level AI automation and custom software development to Mississauga's diverse business landscape. We help Ontario companies in the GTA leverage artificial intelligence to optimize operations and accelerate growth."
  },
  {
    slug: "brampton",
    name: "Brampton",
    province: "Ontario",
    provinceAbbr: "ON",
    metaTitle: "AI Automation Agency Brampton - Custom AI Solutions",
    metaDescription: "Brampton's AI automation experts. Neural Solutions provides custom software development and intelligent AI solutions for innovative Ontario businesses.",
    keywords: [
      "AI agency Brampton",
      "AI automation Brampton Ontario",
      "Brampton AI consultant",
      "custom software Brampton",
      "machine learning Brampton",
      "AI integration Brampton",
      "Brampton business automation"
    ],
    coordinates: { lat: 43.7315, lng: -79.7624 },
    heroHeadline: "AI Automation Agency in Brampton, ON",
    description: "Neural Solutions delivers innovative AI automation and custom software development to Brampton's expanding business community. Our Ontario expertise helps companies implement intelligent solutions that transform operations and create competitive advantages."
  },

  // Tier 3 - Regional Hubs
  {
    slug: "surrey",
    name: "Surrey",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Agency Surrey BC - AI Automation & Custom Development",
    metaDescription: "Surrey's AI automation partner. Neural Solutions delivers custom AI development and intelligent software solutions for BC businesses in Metro Vancouver area.",
    keywords: [
      "AI agency Surrey BC",
      "AI automation Surrey",
      "Surrey AI consultant",
      "custom software Surrey",
      "machine learning Surrey",
      "AI development Surrey BC",
      "Surrey business automation"
    ],
    coordinates: { lat: 49.1913, lng: -122.8490 },
    heroHeadline: "AI Solutions for Surrey Businesses",
    description: "Neural Solutions brings advanced AI automation and custom software development to Surrey's growing business sector. We help BC companies in Metro Vancouver leverage artificial intelligence to streamline operations and drive sustainable growth."
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Automation Agency Burnaby - Custom AI Solutions BC",
    metaDescription: "Burnaby's trusted AI automation agency. Neural Solutions provides enterprise-grade AI development and custom software solutions for British Columbia businesses.",
    keywords: [
      "AI agency Burnaby",
      "AI automation Burnaby BC",
      "Burnaby AI consultant",
      "custom software Burnaby",
      "machine learning Burnaby",
      "AI integration Burnaby",
      "Burnaby business automation"
    ],
    coordinates: { lat: 49.2488, lng: -122.9805 },
    heroHeadline: "AI Automation Agency in Burnaby, BC",
    description: "Neural Solutions delivers sophisticated AI automation and custom software development to Burnaby's technology-forward business community. Our BC expertise helps companies implement intelligent solutions that enhance productivity and competitive positioning."
  },
  {
    slug: "richmond",
    name: "Richmond",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Agency Richmond BC - Business Automation & AI Development",
    metaDescription: "Richmond's AI automation experts. Neural Solutions delivers custom AI development and intelligent software for BC businesses ready for digital transformation.",
    keywords: [
      "AI agency Richmond BC",
      "AI automation Richmond",
      "Richmond AI consultant",
      "custom software Richmond",
      "machine learning Richmond",
      "AI development Richmond BC",
      "Richmond business automation"
    ],
    coordinates: { lat: 49.1666, lng: -123.1336 },
    heroHeadline: "AI Solutions for Richmond Enterprises",
    description: "Neural Solutions brings cutting-edge AI automation and custom software development to Richmond's diverse business landscape. We help BC companies leverage artificial intelligence to optimize operations and unlock new growth opportunities."
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia",
    provinceAbbr: "NS",
    metaTitle: "AI Automation Agency Halifax - Custom AI Solutions NS",
    metaDescription: "Halifax's AI automation partner. Neural Solutions delivers custom software development and intelligent AI solutions for innovative Nova Scotia businesses.",
    keywords: [
      "AI agency Halifax",
      "AI automation Halifax Nova Scotia",
      "Halifax AI consultant",
      "custom software Halifax",
      "machine learning Halifax",
      "AI integration Halifax",
      "Halifax business automation"
    ],
    coordinates: { lat: 44.6488, lng: -63.5752 },
    heroHeadline: "AI Automation Agency in Halifax, NS",
    description: "Neural Solutions delivers proven AI automation and custom software development to Halifax's Atlantic business community. Our Nova Scotia expertise helps companies implement intelligent solutions that drive efficiency and regional competitiveness."
  },
  {
    slug: "kelowna",
    name: "Kelowna",
    province: "British Columbia",
    provinceAbbr: "BC",
    metaTitle: "AI Agency Kelowna BC - AI Automation & Custom Development",
    metaDescription: "Kelowna's AI automation experts. Neural Solutions provides custom AI development and intelligent software solutions for Okanagan businesses scaling with AI.",
    keywords: [
      "AI agency Kelowna",
      "AI automation Kelowna BC",
      "Kelowna AI consultant",
      "custom software Kelowna",
      "machine learning Kelowna",
      "AI development Okanagan",
      "Kelowna business automation"
    ],
    coordinates: { lat: 49.8880, lng: -119.4960 },
    heroHeadline: "AI Solutions for Kelowna Businesses",
    description: "Neural Solutions brings enterprise-level AI automation and custom software development to Kelowna and the Okanagan region. We help BC companies leverage artificial intelligence to modernize operations and compete in expanding markets."
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "Saskatchewan",
    provinceAbbr: "SK",
    metaTitle: "AI Automation Agency Saskatoon - Custom AI Solutions SK",
    metaDescription: "Saskatoon's AI automation partner. Neural Solutions delivers custom software development and intelligent AI solutions for Saskatchewan operational excellence.",
    keywords: [
      "AI agency Saskatoon",
      "AI automation Saskatoon Saskatchewan",
      "Saskatoon AI consultant",
      "custom software Saskatoon",
      "machine learning Saskatoon",
      "AI integration Saskatoon",
      "Saskatoon business automation"
    ],
    coordinates: { lat: 52.1332, lng: -106.6700 },
    heroHeadline: "AI Automation Agency in Saskatoon, SK",
    description: "Neural Solutions delivers practical AI automation and custom software development to Saskatoon's innovative business sector. Our Saskatchewan expertise helps companies implement intelligent solutions that streamline workflows and accelerate growth."
  },
  {
    slug: "regina",
    name: "Regina",
    province: "Saskatchewan",
    provinceAbbr: "SK",
    metaTitle: "AI Agency Regina - Business Automation & AI Development SK",
    metaDescription: "Regina's trusted AI automation agency. Neural Solutions provides enterprise-grade AI development and custom software for Saskatchewan businesses growing fast.",
    keywords: [
      "AI agency Regina",
      "AI automation Regina Saskatchewan",
      "Regina AI consultant",
      "custom software Regina",
      "machine learning Regina",
      "AI development Regina",
      "Regina business automation"
    ],
    coordinates: { lat: 50.4452, lng: -104.6189 },
    heroHeadline: "AI Solutions for Regina Enterprises",
    description: "Neural Solutions brings sophisticated AI automation and custom software development to Regina's business community. We help Saskatchewan companies leverage artificial intelligence to optimize operations and build sustainable competitive advantages."
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    province: "Quebec",
    provinceAbbr: "QC",
    metaTitle: "AI Automation Agency Quebec City - Custom AI Solutions",
    metaDescription: "Quebec City's AI automation experts. Neural Solutions delivers custom software development and intelligent AI solutions for businesses in Canada's capital.",
    keywords: [
      "AI agency Quebec City",
      "AI automation Quebec City",
      "Quebec City AI consultant",
      "custom software Quebec City",
      "machine learning Quebec City",
      "AI integration Quebec City",
      "Quebec City business automation"
    ],
    coordinates: { lat: 46.8139, lng: -71.2080 },
    heroHeadline: "AI Automation Agency in Quebec City, QC",
    description: "Neural Solutions delivers innovative AI automation and custom software development to Quebec City's established business landscape. Our Quebec expertise helps companies implement intelligent solutions that modernize operations while honoring regional business culture."
  }
];

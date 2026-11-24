export type ProjectStatus = 'Live' | 'Not Live' | 'Not Specified';
export type ProjectCategory =
  | 'Website Design'
  | 'E-commerce'
  | 'Landing Pages'
  | 'Redesign'
  | 'Services & Pest Control'
  | 'Junk Removal & Cleanout Services'
  | 'E-commerce & Research Peptides'
  | 'To be confirmed'
  | string;

export interface Project {
  id: string;
  number: string;
  title: string;
  imageKey: string;
  defaultImage?: string;
  hasImageAvailable: boolean;
  hasVideoAvailable: boolean;
  videoUrl?: string;
  websiteUrl?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  projectType?: string;
  isRedesign: boolean;
  description?: string;
  platform?: string;
  caseStudy: {
    overview?: string;
    achieves?: string;
    goal?: string;
    challenge?: string;
    designApproach?: string;
    developmentApproach?: string;
    designHighlights?: string[];
    finalWebsitePreview?: string;
    desktopScreenshots?: string[];
    mobileScreenshots?: string[];
    videoWalkthrough?: {
      title: string;
      description: string;
      duration?: string;
    };
    technologies?: string[];
    deliverables?: string[];
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  deliverables: string[];
  idealFor: string;
}

export interface ProblemSolution {
  id: string;
  number: string;
  title: string;
  problem: string;
  whyItMatters: string;
  solution: string;
  actionableResult: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  badge: string;
  imageUrl?: string;
  skills: string[];
  credentialNotice: string;
}

export interface VideoWalkthrough {
  id: string;
  title: string;
  project: string;
  duration: string;
  description: string;
  thumbnail: string;
  highlights: string[];
  videoUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ClientFeedbackItem {
  id: string;
  projectTitle: string;
  projectId: string;
  clientName?: string;
  category: string;
  summary: string;
  messages: {
    stage?: string;
    text: string;
  }[];
  highlight?: string;
  outcomeNote?: string;
}

/**
 * 11 Verified Projects for SZ — Syeda Zainab Portfolio
 * Configured strictly according to supplied specifications.
 * Unknown categories, descriptions, and technologies are marked editable / to be confirmed.
 */
/**
 * Confirmed Active Projects for SZ — Syeda Zainab Portfolio
 * Project 01: George Central (Screenshot: image_87c00a51.png) - Status unconfirmed (no badge)
 * Project 02: Versatile Pro Junk Solution (Screenshot: image_b07112f3.png) - Live Redesign
 * Project 03: Valhalla Peptides (Screenshot: image_09f9a563.png) - Live Redesign
 */
/**
 * Confirmed Active Projects for SZ — Syeda Zainab Portfolio
 * All 10 active projects with real full-length homepage screenshots:
 * - Project 02: One Desk (Screenshot: image_9b25991e.png) - Not Live, Video Available
 * - Project 03: Aureon (Screenshot: image_3afb12e5.png) - Not Live, Video Available
 * - Project 04: George Central (Screenshot: image_87c00a51.png) - Status unconfirmed (no live badge)
 * - Project 05: Versatile Pro Junk Solution (Screenshot: image_b07112f3.png) - Live Redesign
 * - Project 06: Valhalla Peptides (Screenshot: image_09f9a563.png) - Live Redesign
 * - Project 07: Rouge Fragrance (Screenshot: image_rouge_fragrance_full.png) - Live Redesign
 * - Project 08: ArtPlay (Screenshot: image_652ed45a.png) - Live Redesign
 * - Project 09: NKD (Screenshot: image_nkd_full.png) - Live Redesign
 * - Project 10: Shut the Funk Up (Screenshot: image_212ad106.png) - Live Redesign
 * - Project 11: Easybike (Screenshot: image_a9a7975c.png) - Redesign, Status Not Specified (no live badge!)
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'practice-work-1',
    number: '01',
    title: 'Practice Work',
    imageKey: 'practice-work-1',
    defaultImage: '/assets/aistudio/image_87c00a51.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://georgecentral.wixstudio.com/',
    status: 'Not Specified',
    category: 'Website Design & Development',
    projectType: 'Practice Work Concept',
    isRedesign: false,
    description: 'Concept and practice website design built on Wix Studio featuring editorial layouts, structured service modules, and responsive multi-breakpoint architecture.',
    platform: 'Wix Studio',
    caseStudy: {
      overview: 'A dedicated practice design concept showcasing editorial structure, content layout hierarchy, and responsive interaction patterns on Wix Studio.',
      achieves: 'Demonstrates clean typographic balance, scannable service presentation, and rapid call-to-action pathways.',
      goal: 'Explore advanced Wix Studio layout techniques and fluid responsive breakpoints.',
      challenge: 'Structuring extensive service offerings into an intuitive, visually balanced landing experience.',
      designApproach: 'Natural landscape imagery paired with deep forest greens, soft cream backdrops, and high-contrast action buttons.',
      developmentApproach: 'Engineered with responsive Wix Studio breakpoints, fluid typography, and rapid-loading service cards.',
      designHighlights: [
        'Editorial hero photography and atmosphere',
        'High-contrast action buttons for immediate engagement',
        'Itemized service categories and clear information hierarchy',
        'Responsive full-length layout optimized for desktop and mobile viewports'
      ],
      deliverables: [
        'Homepage Design & Architecture',
        'Wix Studio Responsive Implementation',
        'Service Directory & Cards',
        'Call-to-Action Layouts',
        'Mobile Viewport Optimization'
      ],
      technologies: ['Wix Studio', 'Responsive Breakpoint Engine', 'UI/UX Design']
    }
  },
  {
    id: 'versatile-pro-junk-solution',
    number: '02',
    title: 'Versatile Pro Junk Solutions',
    imageKey: 'versatile-pro-junk-solution',
    defaultImage: '/assets/aistudio/image_b07112f3.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.versatileprojunksolutions.com/',
    status: 'Live',
    category: 'Junk Removal & Cleanout Services',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Complete commercial website redesign for an on-demand junk removal and property cleanout service, featuring transparent upfront truck pricing, service tiers, and fast booking.',
    platform: 'Live Website',
    caseStudy: {
      overview: 'Comprehensive website redesign for Versatile Pro Junk Solutions, transforming their digital presence into a modern, transparent lead-generation hub for residential homeowners, realtors, and commercial property managers.',
      achieves: 'Eliminates client hesitation regarding junk removal costs through upfront volume-based pricing tiers ($250 minimum / $350 half truckload / $450 full truckload), prominent telephone availability, and verified 5-star customer reviews.',
      goal: 'Modernize the brand aesthetic, improve mobile inquiry speed, and structure services clearly so prospective clients can estimate costs and schedule cleanouts within seconds.',
      challenge: 'Balancing extensive service offerings (estate cleanouts, construction debris, appliance removal, yard waste) while keeping the visual layout uncluttered and conversion-focused.',
      designApproach: 'Energetic high-contrast palette of safety yellow, rich charcoal black, and clean white, accented by bold geometric typography and tactile service iconography.',
      developmentApproach: 'Fast-loading, mobile-first responsive architecture with streamlined quote forms and tap-to-call mobile buttons.',
      designHighlights: [
        'High-visibility yellow & black visual identity establishing reliability and speed',
        'Transparent upfront volume pricing matrix ($250 / $350 / $450 truckload rates)',
        'Categorized service cards covering residential, commercial, and emergency cleanouts',
        'Eco-friendly disposal & donation recycling process breakdown',
        'Mobile-optimized booking flow with immediate telephone and estimate touchpoints'
      ],
      deliverables: [
        'Complete Website Redesign',
        'Upfront Pricing Card System',
        'Service Directory & Scope Architecture',
        'Rapid Mobile Quote & Phone Flow',
        'Local SEO & Trust Badge Layouts'
      ],
      technologies: ['Custom Web Architecture', 'Conversion Rate Optimization', 'Mobile-First Layouts', 'Local SEO']
    }
  },
  {
    id: 'valhalla-peptides',
    number: '03',
    title: 'Valhalla Peptides',
    imageKey: 'valhalla-peptides',
    defaultImage: '/assets/aistudio/image_09f9a563.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.valhallapeptide.com/',
    status: 'Live',
    category: 'E-commerce & Research Peptides',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Storefront and catalog redesign for research-grade peptides, featuring a disciplined navy, white, and gold visual language, third-party Certificate of Analysis (COA) access, and streamlined shopping.',
    platform: 'Live E-commerce Storefront',
    caseStudy: {
      overview: 'Full e-commerce storefront redesign for Valhalla Peptides ("Research Peptides Forged in Proof"), elevating product hierarchy, scientific authority, and buyer confidence.',
      achieves: 'Restructures the product catalog to clearly communicate laboratory purity, provide direct access to verified third-party COA batch testing, and streamline vial selection and ordering for academic and clinical researchers.',
      goal: 'Establish an authoritative, high-trust digital storefront that reflects rigorous scientific purity while complying with research-use specifications.',
      challenge: 'Organizing complex biochemical compound specifications (purity percentages, mass ratings, molecular formulas, lyophilized vial handling) into clean, scannable product cards.',
      designApproach: 'Sophisticated dark navy aesthetic complemented by clinical white cards, gold precision accents, and crisp macro vial photography.',
      developmentApproach: 'Fluid responsive e-commerce layout with rapid category filters, quick-view dosage selectors, and frictionless cart interactions.',
      designHighlights: [
        'Prestige navy blue, clinical white, and metallic gold aesthetic',
        'Certificate of Analysis (COA) verification system for third-party lab results',
        'High-resolution product cards featuring compound specifications and mass ratings',
        'Frictionless e-commerce shopping experience with instant quantity controls',
        'Comprehensive research compliance banners and regulatory transparency'
      ],
      deliverables: [
        'E-commerce Storefront Redesign',
        'Product Catalog & COA Hierarchy',
        'Scientific Compound Detail Layouts',
        'Mobile Shopping & Cart Flow',
        'Trust & Laboratory Verification Badges'
      ],
      technologies: ['E-commerce Storefront Architecture', 'Product Catalog Hierarchy', 'Compliance & Testing UI', 'Responsive Design']
    }
  },
  {
    id: 'rouge-fragrance',
    number: '04',
    title: 'Rouge Fragrance',
    imageKey: 'rouge-fragrance',
    defaultImage: '/assets/aistudio/image_rouge_fragrance_full.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://roguefragrances.wixstudio.com/rogue-fragrances-1',
    status: 'Live',
    category: 'Luxury Fragrance & E-commerce',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Luxury boutique perfume and fragrance oil website redesign built on Wix Studio, featuring dark sensory aesthetics, gold typography, wolf iconography, and artisanal product presentation.',
    platform: 'Wix Studio',
    caseStudy: {
      overview: 'Comprehensive visual and storefront redesign for Rouge Fragrances on Wix Studio, capturing olfactory luxury through high-fashion typography, deep black backdrops, and sensory perfume photography.',
      achieves: 'Creates an alluring, editorial digital boutique that communicates scent notes and artisanal craftsmanship, establishing brand prestige and guiding visitors into fragrance discovery and sample pack membership.',
      goal: 'Redesign the online fragrance presence to evoke mystery, exclusivity, and tactile luxury while simplifying bottle size selection (10 mL, 5 mL, 3 mL) and loyalty reward enrollment.',
      challenge: 'Conveying complex scent profiles (top, heart, base notes) and emotional mood purely through visual design and typography on digital screens.',
      designApproach: 'Moody midnight black backdrop accented by regal gold serif headings, luminous white body copy, and high-contrast bottle photography with warm wood and amber tones.',
      developmentApproach: 'Built on Wix Studio with custom layout sections, responsive bottle grids, rewards program integration, and interactive FAQ accordions.',
      designHighlights: [
        'Dramatic dark canvas with gold serif typography and custom wolf emblem',
        'Artisanal bottle photography showcasing glass flacons, travel atomizers, and concentrated oils',
        'Atmospheric storytelling: "Wear The Scent. Own The Moment." and "A Scent That Speaks Before You Do"',
        'Tiered loyalty and rewards program module ("Join the Rogue Pack")',
        'Responsive full-length layout with integrated FAQs and scent guide accordions'
      ],
      deliverables: [
        'Boutique Website Redesign',
        'Wix Studio Responsive Architecture',
        'Scent Profile & Product Showcase Layouts',
        'Loyalty Program & Membership Touchpoints',
        'Mobile-Optimized Fragrance Shopping Experience'
      ],
      technologies: ['Wix Studio', 'Luxury Brand UI', 'Product Catalog Hierarchy', 'Responsive CSS']
    }
  },
  {
    id: 'artplay',
    number: '05',
    title: 'ArtPlay',
    imageKey: 'artplay',
    defaultImage: '/assets/aistudio/image_652ed45a.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.artplay.co.uk/',
    status: 'Live',
    category: 'Creative Studio & Workshop Experiences',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Dynamic creative arts studio and experiential workshop website redesign, showcasing hands-on Sip & Paint, pottery, candle making, and corporate events across London locations.',
    platform: 'Live Website',
    caseStudy: {
      overview: 'Comprehensive website redesign for ArtPlay UK, London\'s premier creative arts and experiential workshop studio offering Sip & Paint, pottery, candle crafting, and corporate creative retreats across Shoreditch and Chelsea locations.',
      achieves: 'Transforms workshop discovery into an inspiring, high-energy digital experience that drives immediate online ticket purchases, private party bookings, and gift card sales.',
      goal: 'Redesign the digital storefront to reflect the vibrant, tactile energy of ArtPlay\'s studio sessions while organizing workshop schedules, event ticketing, and corporate packages into an intuitive booking flow.',
      challenge: 'Harmonizing a diverse array of creative workshops (Sip and Paint, Ceramics & Pottery, Candle Making, Freeflow Canvas) across multiple London venues without confusing prospective attendees.',
      designApproach: 'Energetic high-contrast palette of passionate red, deep charcoal black, and clean studio white, paired with bold expressive typography and lively photography of hands-on creativity.',
      developmentApproach: 'Fast-loading, conversion-optimized responsive architecture featuring interactive workshop filters, clear location badges (Shoreditch & Chelsea), and seamless checkout integration.',
      designHighlights: [
        'Dynamic hero heading: "PICK A WORKSHOP MAKE IT YOURS" with high-energy call to action',
        'Categorized workshop selector: Sip & Paint, Pottery, Candles, Freeflow Painting, Private Events',
        'Prominent dual-location London guides (Shoreditch Studio & Chelsea Studio)',
        'Dedicated private and corporate team-building event inquiry workflows',
        'Mobile-first workshop schedule calendar and frictionless ticket checkout'
      ],
      deliverables: [
        'Complete Brand & Website Redesign',
        'Interactive Workshop Catalog & Booking Layouts',
        'Multi-Venue Location & Studio Directory',
        'Corporate Events & Private Hire Landing Flow',
        'Mobile-Optimized Ticket Purchasing Funnel'
      ],
      technologies: ['Custom Web Redesign', 'Booking Engine UX', 'Mobile-First Architecture', 'Event E-commerce']
    }
  },
  {
    id: 'nkd',
    number: '06',
    title: 'NKD H2O',
    imageKey: 'nkd',
    defaultImage: '/assets/aistudio/image_nkd_full.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.nkdh2o.com/',
    status: 'Live',
    category: 'Distilled Water & Mixology',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Complete brand and e-commerce website redesign for distilled cocktail water, featuring a striking black, cream, and orange palette, editorial typography, and mixology-focused storytelling.',
    platform: 'Live E-commerce Storefront',
    caseStudy: {
      overview: 'Full website and digital brand redesign for NKD Distilled Cocktail Water ("Craft Better. Drink Better."), positioning distilled water as the vital foundation for elevated spirits and craft mixology.',
      achieves: 'Educates spirit enthusiasts and bartenders on why water purity matters in ice cubes and dilution, transforming a simple beverage into an essential craft mixology ingredient through high-impact visual storytelling.',
      goal: 'Overhaul the storefront to articulate the five pillars of the NKD Difference (Purity, Ice, Spirits, Cocktails, Sustainability) while driving direct online sales.',
      challenge: 'Explaining the subtle science of mineral-free distillation and cleaner cocktail dilution in an engaging, premium, and easily scannable format.',
      designApproach: 'High-contrast black, warm cream, and spirited orange color blocking paired with bold condensed sans-serif and editorial serif typography.',
      developmentApproach: 'Fluid responsive e-commerce layout with modular ingredient feature cards, split visual grids, and fast checkout CTAs.',
      designHighlights: [
        'Bold headline typography: "CRAFT BETTER. DRINK BETTER." with warm orange accents',
        'The 5-point "NKD Difference" methodology (Purity, Cube Ice, Spirit Elevation, Cocktail Craft, Sustainability)',
        'Editorial 8-card photo-and-benefit grid combining splash photography with ingredient storytelling',
        'Embossed metallic logo treatment and clear brand manifesto: "Water is an ingredient. Treat it like one."',
        'Streamlined e-commerce navigation with direct "Shop Now" and "View More" purchasing pathways'
      ],
      deliverables: [
        'Complete Storefront Redesign',
        'Mixology & Ingredient Feature Architecture',
        'The NKD Difference 5-Pillar Grid',
        'Mobile-First Responsive Layouts',
        'Conversion Flow & Bottle Presentation'
      ],
      technologies: ['Responsive Web Architecture', 'Product Storytelling UI', 'E-commerce Conversion UX', 'Modern CSS Grid']
    }
  },
  {
    id: 'shut-the-funk-up',
    number: '07',
    title: 'Shut the Funk Up',
    imageKey: 'shut-the-funk-up',
    defaultImage: '/assets/aistudio/image_212ad106.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.shutdafunkup.com/',
    status: 'Live',
    category: 'Lifestyle Apparel & Brand Merchandise',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'High-energy lifestyle streetwear and apparel storefront redesign, featuring bold typography, graphic tees, hoodies, and counter-culture brand storytelling.',
    platform: 'Live E-commerce Storefront',
    caseStudy: {
      overview: 'Complete storefront and lifestyle brand redesign for Shut the Funk Up ("Shut \'da Funk Up!"), a cult streetwear and lifestyle apparel brand rooted in high-energy music, funk culture, and unapologetic self-expression.',
      achieves: 'Infuses the digital storefront with raw cultural personality, driving direct-to-consumer apparel sales and cultivating brand loyalty among streetwear enthusiasts and music lovers worldwide.',
      goal: 'Overhaul the e-commerce experience to showcase graphic apparel collections, express the brand\'s musical DNA, and eliminate cart friction across all mobile and desktop devices.',
      challenge: 'Channeling an explosive, counter-culture aesthetic into a structured, high-converting shopping layout that maintains fast load times and effortless product discovery.',
      designApproach: 'Striking royal blue, deep black, and crisp white palette accented by bold retro-urban typography, dynamic angled containers, and authentic streetwear photography.',
      developmentApproach: 'Modern responsive e-commerce storefront with rapid collection filtering, quick size/color selectors, high-definition apparel zoom, and streamlined checkout.',
      designHighlights: [
        'Electric blue and deep black visual identity reflecting urban funk and streetwear culture',
        'Bold headline presentation: "Shut \'da Funk Up!" with musical heritage storytelling',
        'Curated streetwear catalog: Graphic tees, heavy fleece hoodies, headwear, and lifestyle drops',
        'Brand manifesto emphasizing rhythm, authentic underground community, and self-expression',
        'High-conversion product showcase with direct "Shop Now" and size-selector interactions'
      ],
      deliverables: [
        'E-Commerce Storefront Redesign',
        'Streetwear Product Hierarchy & Lookbook Layouts',
        'Musical DNA & Brand Storytelling Module',
        'High-Speed Mobile Checkout Flow',
        'Collection Drops & Limited-Edition Notification UI'
      ],
      technologies: ['E-commerce Redesign', 'Streetwear Merchandising UX', 'High-Contrast Visual Identity', 'Mobile Shopping Architecture']
    }
  },
  {
    id: 'easybike',
    number: '08',
    title: 'Easybike',
    imageKey: 'easybike',
    defaultImage: '/assets/aistudio/image_a9a7975c.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.easybike24.com/',
    status: 'Not Specified', // Status unconfirmed -> do not display any status badge (CRITICAL)
    category: 'Urban Mobility & E-Bike Rental',
    projectType: 'Redesign',
    isRedesign: true,
    description: 'Urban mobility and electric bicycle rental website redesign for Warsaw, featuring transparent rental tiers, E-BIKE C29 fleet specs, 15-minute quick-booking, and courier pricing.',
    platform: 'Live Website',
    caseStudy: {
      overview: 'Full website redesign for Easybike ("Rent an electric bike in 15 minutes"), a premier urban mobility and electric bicycle rental service operating in Warsaw, Poland for couriers, commuters, and city riders.',
      achieves: 'Demystifies electric bike rentals through transparent pricing tiers, detailed E-BIKE C29 technical specifications, and a rapid 15-minute booking process that dramatically reduces onboarding time for courier fleets and daily commuters.',
      goal: 'Modernize Easybike\'s digital presence to establish technological trust, highlight battery range and durability, and guide users smoothly from bicycle selection to deposit and pickup in Warsaw.',
      challenge: 'Presenting complex technical specifications (battery capacity, motor wattage, range in kilometers, courier rental packages, security deposits) in an accessible, mobile-friendly format for fast decision-making.',
      designApproach: 'Sophisticated navy blue and clean white framework energized by high-visibility neon green accents, technical schematics, and clean urban photography.',
      developmentApproach: 'Responsive web architecture engineered for speed, featuring a dedicated bicycle model showcase (E-BIKE C29), transparent rental period calculators, and a Warsaw service location guide.',
      designHighlights: [
        'Compelling value proposition: "Rent an electric bike in 15 minutes" with immediate booking CTA',
        'Technical flagship showcase for the E-BIKE C29 model (battery lifespan, motor torque, ergonomic frame)',
        'Clear courier vs. commuter rental packages with upfront weekly and monthly rates',
        '3-step rental journey: Select bicycle, complete digital verification, pick up in Warsaw',
        'Comprehensive rider safety protocols, maintenance support details, and accordion FAQs'
      ],
      deliverables: [
        'Complete Website Redesign',
        'E-Bike Fleet Catalog & Technical Specification UI',
        'Courier & Commuter Rental Matrix',
        '15-Minute Booking & Verification Workflow',
        'Warsaw Service Location & FAQs Section'
      ],
      technologies: ['Urban Mobility Web Architecture', 'Fleet Specification UI', 'Rental Calculator UX', 'Responsive CSS Grid']
    }
  },
  {
    id: 'black-rose-archive',
    number: '09',
    title: 'Black Rose Archive',
    imageKey: 'black-rose-archive',
    defaultImage: '/assets/aistudio/image_1b53a7e5.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://www.blackrosearchive.com/',
    status: 'Live',
    category: 'Creative Storytelling / Editorial Website',
    projectType: 'Website Design & Development',
    isRedesign: false,
    description: 'Digital story archive and editorial website featuring immersive creative storytelling, world-building lore, horror, sci-fi, fantasy, and poetry collections.',
    platform: 'Live Website',
    caseStudy: {
      overview: 'Black Rose Archive is an immersive digital story archive and editorial platform exploring fantastical worlds, poetry, and creative storytelling.',
      achieves: 'Provides a captivating literary and visual journey that engages readers through rich narrative worlds, genre explorations, and serialized fiction.',
      goal: 'Design an editorial digital archive that showcases storytelling collections and creative works with high-contrast elegance.',
      challenge: 'Organizing diverse creative media (horror, sci-fi, fantasy, romance, poetry) into an intuitive and atmospheric browsing experience.',
      designApproach: 'Sophisticated midnight black backdrop with glowing warm orange and gold typography, editorial imagery, and seamless story navigation.',
      developmentApproach: 'Responsive web architecture optimized for immersive typography, rich imagery, and smooth reader engagement.',
      designHighlights: [
        'Immersive storytelling archive featuring horror, sci-fi, fantasy, and romance worlds',
        'Featured stories and serialized chapter presentation (Ashgrove Hollow)',
        'Dedicated poetry and spoken word showcase section',
        'Reader community membership and newsletter onboarding flow',
        'Responsive dark-mode layout optimized for desktop and mobile readers'
      ],
      deliverables: [
        'Editorial Website Design & Development',
        'Story Archive & World-Building UI',
        'Poetry & Featured Reading Layouts',
        'Community Membership & Newsletter Flow',
        'Responsive Mobile Readability Optimization'
      ],
      technologies: ['Web Architecture', 'Editorial Typography', 'Responsive CSS', 'Content Layouts']
    }
  },
  {
    id: 'pinnacle-electrical-services',
    number: '10',
    title: 'Pinnacle Electrical Services',
    imageKey: 'pinnacle-electrical-services',
    defaultImage: '/assets/aistudio/image_ab36ea01.png',
    hasImageAvailable: true,
    hasVideoAvailable: false,
    websiteUrl: 'https://kiranhemmings2023.wixstudio.com/pinnacle-e-services',
    status: 'Live',
    category: 'Professional Electrical Services Website',
    projectType: 'Website Design & Development',
    isRedesign: false,
    description: 'Professional electrical installation, testing, maintenance, and emergency services website built on Wix Studio, featuring domestic and commercial service tiers, expert workmanship, and rapid quote requests.',
    platform: 'Wix Studio',
    caseStudy: {
      overview: 'Pinnacle Electrical Services is a professional electrical contractor delivering reliable domestic and commercial installations, safety testing, and 24/7 emergency support.',
      achieves: 'Establishes instant service credibility, clearly outlines specialized domestic and commercial electrical solutions, and drives rapid quote requests and emergency call-outs.',
      goal: 'Build a clean, high-trust professional services website on Wix Studio that highlights safety expertise and streamlines customer inquiries.',
      challenge: 'Presenting critical electrical services (rewiring, EV charger installation, EICR testing, emergency call-outs) in a clear, highly accessible format for property owners.',
      designApproach: 'Professional dark corporate theme accented by warm gold and clean white typography, clear service iconography, and direct action buttons.',
      developmentApproach: 'Engineered with responsive Wix Studio breakpoints, fluid typography, and fast-loading service cards with prominent contact CTAs.',
      designHighlights: [
        'Professional hero presentation with immediate "Get a Quote" and "Emergency Call-Out" actions',
        'Categorized electrical services: Domestic, Commercial, Specialist Systems, Testing & Certification',
        'Dedicated safety-first and craftsmanship guarantees',
        'Verified client testimonials and 5-star service ratings',
        'Responsive lead generation form and mobile tap-to-call integration'
      ],
      deliverables: [
        'Full Homepage Design & Wix Studio Implementation',
        'Electrical Services & Certification Catalog',
        'Emergency Call-Out & Quote Request Flow',
        'Trust Badge & Testimonial Architecture',
        'Multi-Breakpoint Mobile Optimization'
      ],
      technologies: ['Wix Studio', 'Responsive Breakpoint Engine', 'Lead Capture Architecture', 'Service UI']
    }
  }
];

export const UPCOMING_PROJECTS: Omit<Project, 'caseStudy'>[] = [];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Website Design & UI/UX',
    subtitle: 'Thoughtful layouts, visual hierarchy, and intuitive user experiences.',
    description: 'I design custom website layouts that capture your brand character while guiding visitors effortlessly toward what matters most.',
    problemSolved: 'Solves confusing layouts, inconsistent visual identity, and high bounce rates caused by difficult navigation.',
    deliverables: [
      'Custom website layouts crafted from scratch',
      'Intuitive user-friendly navigation flows',
      'Consistent design system and typography scales',
      'Responsive design planning for all screen sizes',
      'Clear, accessible content hierarchy'
    ],
    idealFor: 'Businesses wanting a distinctive, bespoke digital presence that stands out from generic website templates.'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Website Development',
    subtitle: 'Clean implementation on Wix, Shopify, and custom HTML/CSS.',
    description: 'Transforming designs into reliable, fast-loading, responsive websites with clean code, proper semantic markup, and reliable functionality.',
    problemSolved: 'Solves broken mobile layouts, sluggish load times, rigid templates, and non-functional web components.',
    deliverables: [
      'Wix and Wix Studio website development',
      'Shopify custom development and store configuration',
      'Semantic HTML5 & clean modern CSS implementation',
      'Fully responsive page development tested on devices',
      'Precision design-to-development implementation'
    ],
    idealFor: 'Brands that want their design accurately coded into a smooth, maintainable, and high-performance live website.'
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-commerce Solutions',
    subtitle: 'High-converting Shopify stores built for easy shopping.',
    description: 'Setting up and styling Shopify storefronts that highlight your products, simplify purchasing, and build trust from discovery to checkout.',
    problemSolved: 'Solves clunky product pages, confusing cart workflows, and low mobile sales conversion.',
    deliverables: [
      'Full Shopify store setup and theme customization',
      'Compelling product page layouts that highlight craftsmanship',
      'High-impact visual product presentation and gallery zoom',
      'Streamlined store navigation and collection filters',
      'Shopping experience improvements and frictionless checkout'
    ],
    idealFor: 'Independent creators, boutique makers, and retail brands selling physical products online.'
  },
  {
    id: 'seo',
    number: '04',
    title: 'Basic & On-Page SEO',
    subtitle: 'Search-friendly architecture, clean headings, and metadata.',
    description: 'Structuring your website so search engines understand your pages and human visitors find the answers they are searching for.',
    problemSolved: 'Solves invisible search presence, missing meta descriptions, duplicate title tags, and messy heading hierarchies.',
    deliverables: [
      'Fundamental keyword placement and topic alignment',
      'Engaging meta titles and descriptions for search results',
      'Semantic H1–H4 heading hierarchy organization',
      'Descriptive image alt text for accessibility & SEO',
      'On-page content optimization and readability',
      'Clean URL structures and internal linking patterns'
    ],
    idealFor: 'Any business seeking sustainable organic visibility without empty promises or manipulative tactics.'
  },
  {
    id: 'redesign',
    number: '05',
    title: 'Website Redesign',
    subtitle: 'Revitalizing outdated websites into modern digital assets.',
    description: 'Auditing your current website to pinpoint bottlenecks, refresh the visual language, and elevate the overall user experience.',
    problemSolved: 'Solves aged aesthetics that no longer match your brand quality, declining engagement, and difficult mobile usability.',
    deliverables: [
      'Thorough existing website evaluation and heuristic audit',
      'Visual identity refresh and typography modernization',
      'Layout restructuring to highlight core offerings',
      'Navigation improvements and clutter reduction',
      'Complete responsive experience upgrade'
    ],
    idealFor: 'Established businesses whose current websites look dated, sluggish, or disconnected from their growth.'
  },
  {
    id: 'landing-pages',
    number: '06',
    title: 'Landing Page Design & Development',
    subtitle: 'Focused, single-purpose pages that drive action.',
    description: 'Designing and building lead-generating landing pages that introduce an offer clearly and guide visitors toward a single compelling action.',
    problemSolved: 'Solves scattered messaging, lack of focus, and low conversion from marketing campaigns.',
    deliverables: [
      'High-impact landing page layouts built for focus',
      'Strategically positioned calls to action',
      'Clear product and service value presentation',
      'Mobile-optimized responsive implementation',
      'Fast-loading structure with zero distraction'
    ],
    idealFor: 'Product launches, specialized service inquiries, seasonal promotions, and targeted ad campaigns.'
  }
];

export const PROBLEMS_SOLUTIONS_DATA: ProblemSolution[] = [
  {
    id: 'prob-1',
    number: '01',
    title: 'Outdated Website Design',
    problem: 'A website may no longer reflect the current quality, identity, or credibility of a growing business.',
    whyItMatters: 'Visitors make an impression in milliseconds. If your site looks neglected, potential clients assume your services might be as well.',
    solution: 'Refresh the visual design, introduce balanced typography, modernize color palettes, and create a cohesive brand experience that commands confidence.',
    actionableResult: 'Instantly elevates brand perception and creates a memorable first impression.'
  },
  {
    id: 'prob-2',
    number: '02',
    title: 'Poor Mobile Experience',
    problem: 'Visitors struggle to browse or interact with a website on smaller screens due to tiny text, broken grids, or misplaced buttons.',
    whyItMatters: 'More than 60% of web traffic happens on mobile devices. A frustrating mobile layout drives valuable customers straight to competitors.',
    solution: 'Build fluid responsive layouts designed intentionally for touch screens, with thumb-accessible buttons, readable typography, and effortless scrolling.',
    actionableResult: 'Ensures effortless browsing regardless of screen size or device.'
  },
  {
    id: 'prob-3',
    number: '03',
    title: 'Confusing Navigation',
    problem: 'Visitors cannot quickly locate important information or understand how to get from the homepage to what they need.',
    whyItMatters: 'When visitors feel lost, they leave. Overcrowded menus and obscure labels create unnecessary mental friction.',
    solution: 'Restructure pages into intuitive hierarchies, streamline navigation bars to essential routes, and implement contextual links that guide user journeys naturally.',
    actionableResult: 'Reduces bounce rates and helps visitors reach key pages in fewer clicks.'
  },
  {
    id: 'prob-4',
    number: '04',
    title: 'Weak Product Presentation',
    problem: 'Products and services are displayed in generic grids without highlighting craftsmanship, unique benefits, or emotional appeal.',
    whyItMatters: 'Customers need to clearly understand what they are purchasing. Poor imagery or bare text leaves buyers hesitant.',
    solution: 'Craft dedicated product showcases with high-resolution imagery, tactile editorial details, clear specifications, and transparent value communication.',
    actionableResult: 'Builds buyer confidence and directly supports higher purchase intent.'
  },
  {
    id: 'prob-5',
    number: '05',
    title: 'Unclear Calls to Action',
    problem: 'Visitors reach the bottom of a page without knowing what step to take next, or are confronted with competing, confusing buttons.',
    whyItMatters: 'Even interested visitors will abandon a site if the path to contact, booking, or purchase is ambiguous.',
    solution: 'Place clear, well-timed calls to action throughout the page, providing friction-free pathways to contact, inquire, or shop.',
    actionableResult: 'Turns passive browsing into tangible inquiries and customer connections.'
  },
  {
    id: 'prob-6',
    number: '06',
    title: 'Poor On-Page SEO Structure',
    problem: 'Page content, headings, and images are unorganized, making it difficult for both visitors and search engines to interpret relevance.',
    whyItMatters: 'Without semantic structure, search engine crawlers struggle to index your offerings, and users struggle to scan your content.',
    solution: 'Implement clean semantic headings (H1–H4), concise meta tags, descriptive image alt text, and organized content sections aligned with search intent.',
    actionableResult: 'Improves page readability for humans and search engine accessibility.'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding the core intent',
    description: 'We begin by discussing your business, target audience, core offerings, and what the website specifically needs to achieve.',
    deliverable: 'Project brief, content inventory, and alignment on design goals.'
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Structuring the foundation',
    description: 'Organizing the sitemap, content hierarchy, page wireframes, and visual direction before jumping into final styling.',
    deliverable: 'Content outline, page structure map, and design direction palette.'
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Crafting the visual identity',
    description: 'Designing bespoke page compositions, typography pairings, color harmonies, and responsive layouts that feel distinctly yours.',
    deliverable: 'High-fidelity desktop and mobile website layouts for review.'
  },
  {
    number: '04',
    title: 'Develop',
    subtitle: 'Building with precision',
    description: 'Transforming approved designs into clean, functional code or platform setups (Shopify, Wix, HTML/CSS) with smooth responsiveness.',
    deliverable: 'Fully functional, responsive staging website ready for testing.'
  },
  {
    number: '05',
    title: 'Refine & Launch',
    subtitle: 'Polishing every touchpoint',
    description: 'Testing responsiveness, verifying forms and links, optimizing page speed and on-page SEO, and preparing your website for launch.',
    deliverable: 'Final launch-ready website, handover documentation, and deployment.'
  }
];

export const SKILLS_LIST = [
  { name: 'Wix & Wix Studio', category: 'Platforms', focus: 'Custom layouts & client handover' },
  { name: 'Shopify', category: 'E-commerce', focus: 'Store setup & theme customization' },
  { name: 'HTML5 Semantic Code', category: 'Development', focus: 'Accessible & clean structure' },
  { name: 'Modern CSS & Tailwind', category: 'Development', focus: 'Fluid responsive design & styling' },
  { name: 'Basic & On-Page SEO', category: 'Optimization', focus: 'Headings, meta tags & alt text' },
  { name: 'Website Design & UI/UX', category: 'Design', focus: 'Visual hierarchy & user journeys' },
  { name: 'Responsive Layouts', category: 'Architecture', focus: 'Desktop, tablet & mobile parity' },
  { name: 'E-commerce Development', category: 'E-commerce', focus: 'Product catalogs & checkout flows' }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-1',
    title: '1.5-Month AI Social Media Marketing Course',
    institution: 'NDA Digital Skills',
    date: '15-10-2026',
    badge: 'AI & Marketing',
    imageUrl: '/assets/aistudio/image_1b331e93.png',
    skills: ['Social Media Marketing', 'AI Tools & Strategy', 'Digital Campaigns', 'Content Planning'],
    credentialNotice: 'Awarded by NDA Digital Skills for successfully completing training and demonstrating proficiency in industry-relevant AI and social media marketing concepts.'
  },
  {
    id: 'cert-2',
    title: '1.5-Month Spoken English Course',
    institution: 'NDA Digital Skills',
    date: '15-10-2026',
    badge: 'Communication',
    imageUrl: '/assets/aistudio/image_da005d98.png',
    skills: ['Verbal Communication', 'Professional Fluency', 'Presentation Skills', 'Business English'],
    credentialNotice: 'Awarded by NDA Digital Skills for successfully completing the Spoken English training program and demonstrating communication proficiency.'
  },
  {
    id: 'cert-3',
    title: '1.5-Month Vibe Coding Course',
    institution: 'NDA Digital Skills',
    date: '15-10-2026',
    badge: 'Vibe Coding & AI',
    imageUrl: '/assets/aistudio/image_592592ca.png',
    skills: ['AI-Assisted Development', 'Prompt Engineering', 'Rapid Prototyping', 'Modern Coding Workflows'],
    credentialNotice: 'Awarded by NDA Digital Skills for successfully completing the Vibe Coding training program in cutting-edge AI-powered development workflows.'
  },
  {
    id: 'cert-4',
    title: 'NodeJS For Beginners - Build your first REST API',
    institution: 'SkillEcted Campus Program',
    date: '19 April 2025',
    badge: 'Backend Development',
    imageUrl: '/assets/aistudio/image_7b37e93f.png',
    skills: ['Node.js', 'REST APIs', 'Backend Development', 'JavaScript'],
    credentialNotice: 'Certificate of participation in SkillEcted Campus Program for building REST APIs with Node.js.'
  },
  {
    id: 'cert-5',
    title: 'C++ Essentials 1',
    institution: 'Cisco Networking Academy / Virtual University Campus',
    date: '27 Nov 2024',
    badge: 'Programming',
    imageUrl: '/assets/aistudio/image_e62a9314.png',
    skills: ['C++ Programming', 'Data Structures', 'Algorithm Design', 'Object-Oriented Basics'],
    credentialNotice: 'Cisco Networking Academy official certification in C++ Essentials 1 completed through Virtual University Campus.'
  },
  {
    id: 'cert-6',
    title: 'COSMIC365 Expert Program - Certificate of Proficiency',
    institution: 'COSMIC365',
    date: 'June 24, 2025',
    badge: 'Expert Proficiency',
    imageUrl: '/assets/aistudio/image_ac92e669.png',
    skills: ['Professional Proficiency', 'Advanced Skills', 'Expert Execution', 'Project Delivery'],
    credentialNotice: 'Certificate of Proficiency awarded upon successful completion of the COSMIC365 Expert Program.'
  },
  {
    id: 'cert-7',
    title: 'Cosmic365 Skill Development Program - Performance Report Grade A+',
    institution: 'COSMIC365',
    date: 'May 5, 2025',
    badge: 'Grade A+ Performance',
    imageUrl: '/assets/aistudio/image_81e83b38.png',
    skills: ['Skill Development', 'Top Performance', 'Excellence Grade A+', 'Professional Growth'],
    credentialNotice: 'Official Performance Report recognizing Grade A+ distinction in the Cosmic365 Skill Development Program.'
  },
  {
    id: 'cert-8',
    title: 'Freelancing',
    institution: 'DigiSkills.pk / Virtual University / Ignite',
    date: '24/10/2024',
    badge: 'Freelance & Business',
    imageUrl: '/assets/aistudio/image_a289007f.png',
    skills: ['Freelance Platforms', 'Client Management', 'Proposal Writing', 'Remote Professional Services'],
    credentialNotice: 'DigiSkills.pk training program certified by Virtual University of Pakistan and Ignite for digital freelancing mastery.'
  },
  {
    id: 'cert-9',
    title: 'Video Editing, Animation and Vlogging',
    institution: 'DigiSkills.pk / Virtual University / Ignite',
    date: '24/10/2024',
    badge: 'Multimedia & Video',
    imageUrl: '/assets/aistudio/image_a263bd73.png',
    skills: ['Video Editing', 'Motion Animation', 'Vlogging', 'Post-Production'],
    credentialNotice: 'DigiSkills.pk certified training in professional video editing, animation techniques, and content creation.'
  },
  {
    id: 'cert-10',
    title: 'Associate COSMIC365 Intern',
    institution: 'COSMIC365',
    date: 'June 24, 2025',
    badge: 'Internship',
    imageUrl: '/assets/aistudio/image_4197a11b.png',
    skills: ['Professional Internship', 'Team Collaboration', 'Practical Execution', 'Industry Experience'],
    credentialNotice: 'Official recognition for successfully serving as an Associate Intern at COSMIC365.'
  }
];

export const VIDEO_SHOWCASES: VideoWalkthrough[] = [
  {
    id: 'vid-1',
    title: 'One Desk — Practice Work & Concept Walkthrough',
    project: 'One Desk (Practice Work)',
    duration: 'Practice Work Video Walkthrough',
    description: 'Screen-recording walkthrough showcasing the One Desk practice work design on Wix Studio, layout structure, and interactive components.',
    thumbnail: '/assets/aistudio/image_9b25991e.png',
    videoUrl: '/assets/aistudio/VID-20261115-WA0005_19f7744f.mp4',
    highlights: ['Wix Studio Concept', 'Interactive Navigation', 'Layout Exploration']
  },
  {
    id: 'vid-2',
    title: 'Aureon — Practice Work & Concept Walkthrough',
    project: 'Aureon (Practice Work)',
    duration: 'Practice Work Video Walkthrough',
    description: 'Screen-recording walkthrough detailing the Aureon practice work interface, dark aesthetic, and creative concept design.',
    thumbnail: '/assets/aistudio/image_3afb12e5.png',
    videoUrl: '/assets/aistudio/VID-20261115-WA0006_c9ca8e1d.mp4',
    highlights: ['Concept Dark UI', 'Interactive Flow', 'Studio Exploration']
  }
];

export const CLIENT_REVIEWS_DATA: ClientFeedbackItem[] = [
  {
    id: 'review-versatile',
    projectTitle: 'Versatile Pro Junk Solutions',
    projectId: 'versatile-pro-junk-solution',
    category: 'Commercial Redesign',
    summary: 'High client satisfaction and praise for visual transformation.',
    messages: [
      {
        stage: 'Client Testimonial',
        text: "I went through the test link and the website looks amazing! Super satisfied with the design and layout. I really appreciate all your hard work and great communication throughout."
      }
    ]
  },
  {
    id: 'review-artplay',
    projectTitle: 'ArtPlay',
    projectId: 'artplay',
    category: 'Creative Studio Redesign',
    summary: 'Positive feedback and approval for ongoing collaboration.',
    messages: [
      {
        stage: 'Client Testimonial',
        text: "The website is looking really good! Very happy with how everything has come together so far and excited to continue with the remaining work."
      }
    ]
  },
  {
    id: 'review-shut-funk',
    projectTitle: 'Shut the Funk Up',
    projectId: 'shut-the-funk-up',
    clientName: 'Nancy',
    category: 'Streetwear E-Commerce',
    summary: 'Appreciation for storefront design and execution.',
    messages: [
      {
        stage: 'Client Testimonial',
        text: "Everything is going great with the store layout and design. I truly appreciate the dedication and great work so far."
      }
    ]
  },
  {
    id: 'review-rogue',
    projectTitle: 'Rogue Fragrance',
    projectId: 'rouge-fragrance',
    category: 'Luxury Fragrance & E-commerce',
    summary: 'Visual appreciation and bottle photography proportion review.',
    messages: [
      {
        stage: 'Client Testimonial',
        text: "I absolutely love it. The only thing that I see that's a little different is that that bottle for the Square type is slightly too big that's more of a 50 mL bottle. I am working with a 10 mL bottle as you see in the photographs I've took some angled photographs so you can see what the current bottle looks like. Outside of that I absolutely love it. Great job."
      }
    ],
    outcomeNote: 'One small bottle-size adjustment was made, and the project was successfully delivered.'
  }
];

export const PROJECT_MOBILE_PREVIEWS: Record<string, { type: 'video' | 'image'; src: string }> = {
  'practice-work-1': {
    type: 'image',
    src: '/assets/aistudio/image_c2fa290f.png'
  },
  'versatile-pro-junk-solution': {
    type: 'image',
    src: '/assets/aistudio/image_03eae6e1.png'
  },
  'valhalla-peptides': {
    type: 'image',
    src: '/assets/aistudio/image_03eae6e1.png'
  },
  'rouge-fragrance': {
    type: 'image',
    src: '/assets/aistudio/image_ae14014e.png'
  },
  'artplay': {
    type: 'image',
    src: '/assets/aistudio/image_abee3830.png'
  },
  'nkd': {
    type: 'image',
    src: '/assets/aistudio/image_a25eddad.png'
  },
  'shut-the-funk-up': {
    type: 'image',
    src: '/assets/aistudio/image_cbba6cb9.png'
  },
  'easybike': {
    type: 'image',
    src: '/assets/aistudio/image_b4f1e067.png'
  },
  'black-rose-archive': {
    type: 'image',
    src: '/assets/aistudio/image_abee3830.png'
  },
  'pinnacle-electrical-services': {
    type: 'image',
    src: '/assets/aistudio/image_c2fa290f.png'
  }
};

export const FAQS_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What types of websites do you design and build?',
    answer: 'I design and develop custom portfolio websites, boutique e-commerce storefronts (Shopify), business presentation websites (Wix Studio and HTML/CSS), and conversion-focused landing pages and redesigns. Every project is planned around your unique brand identity and audience needs.'
  },
  {
    id: 'faq-2',
    question: 'Which platforms and technologies do you work with?',
    answer: 'My primary platforms are Shopify for e-commerce and Wix / Wix Studio for content-driven websites, alongside clean handcrafted HTML5 and modern CSS for bespoke experiences. This ensures you receive a site that is both aesthetically refined and easy to maintain.'
  },
  {
    id: 'faq-3',
    question: 'Do you develop both Shopify and Wix websites?',
    answer: 'Yes. For Shopify, I configure custom themes, organize product catalogs, and streamline checkout. For Wix and Wix Studio, I build responsive, bespoke layouts that give you complete ownership and simple editing capabilities after launch.'
  },
  {
    id: 'faq-4',
    question: 'Are all your websites responsive across different devices?',
    answer: 'Absolutely. Responsive design is a non-negotiable standard in my work. Every layout is planned and tested to ensure comfortable typography, accessible buttons, and seamless browsing across desktop monitors, laptops, tablets, and smartphones.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer website redesign services?',
    answer: 'Yes. Redesigns are a core specialty (as demonstrated across projects like Versatile Pro Junk Solution, Valhalla Peptides, Rouge Fragrance, ArtPlay, NKD, Shut the Funk Up, and Easybike). I audit the existing site, modernize visual hierarchy, and rebuild the responsive experience.'
  },
  {
    id: 'faq-6',
    question: 'What is included in your SEO services?',
    answer: 'I provide ethical basic and on-page SEO: structuring semantic headings (H1–H4), crafting search-optimized meta titles and descriptions, adding descriptive image alt text, and optimizing page readability. I focus on solid technical foundations rather than making unrealistic ranking guarantees.'
  },
  {
    id: 'faq-7',
    question: 'Can I request a standalone landing page?',
    answer: 'Yes. If you are launching a new product, running a campaign, or need a focused page to capture client inquiries, I can design and build a high-impact, single-purpose landing page with clear calls to action.'
  },
  {
    id: 'faq-8',
    question: 'What information should I provide before starting a project?',
    answer: 'Helpful items include an overview of your business, your primary goals for the site, examples of styles you appreciate, any existing branding (logo, colors, fonts), and your content or product details. If you don’t have all of these ready, we can refine them together during the Discover phase.'
  },
  {
    id: 'faq-9',
    question: 'How can I contact SZ to discuss a project?',
    answer: 'You can submit an inquiry through the contact form on this site, or reach out directly via email or WhatsApp. I review all inquiries thoughtfully and will respond with next steps to explore your project.'
  }
];

export const WHY_WORK_POINTS = [
  {
    title: 'Design with a clear purpose',
    description: 'Every layout decision, typography choice, and spacing rhythm is deliberate—designed to present your business clearly and without unnecessary visual noise.'
  },
  {
    title: 'Attention to detail',
    description: 'From micro-interactions and hover states to consistent padding and typographic balance, the fine details are what make a website feel truly polished.'
  },
  {
    title: 'User-friendly layouts',
    description: 'Visitors should never have to guess where to click or how to find information. I prioritize intuitive navigation and effortless user journeys.'
  },
  {
    title: 'Responsive website experiences',
    description: 'Your website will look and perform comfortably on any screen size, with touch-friendly elements and fluid readability.'
  },
  {
    title: 'Practical development approach',
    description: 'I work with proven, manageable platforms (Shopify, Wix, HTML/CSS) so you have full control over your digital home without frustrating technical hurdles.'
  },
  {
    title: 'Clear, direct communication',
    description: 'No confusing agency jargon or disappearing acts. You receive straightforward updates, thoughtful recommendations, and collaborative discussions throughout.'
  }
];

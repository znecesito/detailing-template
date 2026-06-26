// ─────────────────────────────────────────────
//  CLIENT CONFIG
//  Fill this out for each client deployment.
//  Every field used by the UI lives here.
// ─────────────────────────────────────────────

export type ServiceTier = {
  name: string;          // "Basic" | "Full Detail" | "Ceramic"
  description: string;
  features: string[];
  pricing: {
    sedan: string;
    suv: string;
    truck: string;
  };
};

export type Review = {
  author: string;
  rating: number;        // 1–5
  text: string;
  date: string;          // "March 2025"
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

export type ClientConfig = {
  // ── Business basics ──────────────────────────
  businessName: string;
  tagline: string;
  phone: string;          // displayed format e.g. "(555) 012-3456"
  phoneHref: string;      // tel: link e.g. "tel:+15550123456"
  email: string;
  address: string;
  serviceArea: string;    // "Greater Phoenix Area"
  instagramHandle: string; // without @

  // ── Hours ────────────────────────────────────
  hours: { day: string; time: string }[];

  // ── Trust bar ────────────────────────────────
  trust: {
    googleRating: number; // 4.9
    reviewCount: number;  // 87
    yearsInBusiness: number;
    insured: boolean;
  };

  // ── Hero ─────────────────────────────────────
  hero: {
    headline: string;
    subheadline: string;
    beforeImage: string;  // path under /public/
    afterImage: string;
    ctaLabel: string;     // "Book Your Detail"
  };

  // ── Services ─────────────────────────────────
  services: [ServiceTier, ServiceTier, ServiceTier]; // exactly 3 tiers

  // ── Gallery ──────────────────────────────────
  gallery: string[];      // 6–12 image paths under /public/

  // ── Testimonials ─────────────────────────────
  testimonials: [Review, Review, Review]; // exactly 3

  // ── How It Works ─────────────────────────────
  howItWorks: [HowItWorksStep, HowItWorksStep, HowItWorksStep];

  // ── FAQ ──────────────────────────────────────
  faq: FaqItem[];         // 5 recommended

  // ── Map ──────────────────────────────────────
  googleMapsEmbedUrl: string; // iframe src from Google Maps "Share > Embed"

  // ── Lead tracking ────────────────────────────
  ga4MeasurementId?: string; // "G-XXXXXXXXXX" — create a property in Google Analytics per client
  resendAudienceId?: string;
};

// ─────────────────────────────────────────────
//  PLACEHOLDER DATA  (replace per client)
// ─────────────────────────────────────────────

const client: ClientConfig = {
  businessName: "Shine Pro Detailing",
  tagline: "Showroom Finish. Your Driveway.",
  phone: "(555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@shinepro.com",
  address: "Phoenix, AZ 85001",
  serviceArea: "Greater Phoenix Area",
  instagramHandle: "shinepro_detail",

  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday",  time: "9:00 AM – 4:00 PM" },
    { day: "Sunday",    time: "Closed" },
  ],

  trust: {
    googleRating: 4.9,
    reviewCount: 87,
    yearsInBusiness: 6,
    insured: true,
  },

  hero: {
    headline: "Your Car Deserves Better",
    subheadline: "Professional mobile detailing — we come to you.",
    beforeImage: "/clients/placeholder/before.png",
    afterImage: "/clients/placeholder/after.png",
    ctaLabel: "Book Your Detail",
  },

  services: [
    {
      name: "Basic Wash",
      description: "Exterior wash, dry, and tire shine.",
      features: [
        "Hand wash & dry",
        "Tire & wheel cleaning",
        "Window clean (exterior)",
        "Tire shine",
      ],
      pricing: {
        sedan: "$75",
        suv: "$95",
        truck: "$95",
      },
    },
    {
      name: "Full Detail",
      description: "Complete interior + exterior restoration.",
      features: [
        "Everything in Basic",
        "Interior vacuum & wipe-down",
        "Leather/seat conditioning",
        "Window clean (interior + exterior)",
        "Engine bay wipe",
      ],
      pricing: {
        sedan: "$175",
        suv: "$225",
        truck: "$225",
      },
    },
    {
      name: "Ceramic Coating",
      description: "Long-term paint protection that lasts years.",
      features: [
        "Everything in Full Detail",
        "Paint decontamination",
        "2-year ceramic coating",
        "Hydrophobic protection",
        "UV resistance",
      ],
      pricing: {
        sedan: "$499",
        suv: "$599",
        truck: "$599",
      },
    },
  ],

  gallery: [
    "/clients/placeholder/gallery-1.png",
    "/clients/placeholder/gallery-2.png",
    "/clients/placeholder/gallery-3.png",
    "/clients/placeholder/gallery-4.png",
    "/clients/placeholder/gallery-5.png",
    "/clients/placeholder/gallery-6.png",
  ],

  testimonials: [
    {
      author: "Marcus T.",
      rating: 5,
      text: "Honestly the best detail I've ever gotten. My truck looks better than when I bought it. Will not go anywhere else.",
      date: "April 2025",
    },
    {
      author: "Sandra K.",
      rating: 5,
      text: "Showed up on time, worked fast, and the interior was spotless. Highly recommend the full detail package.",
      date: "March 2025",
    },
    {
      author: "Diego R.",
      rating: 5,
      text: "Got the ceramic coating done — worth every penny. It's been 3 months and water still beads off perfectly.",
      date: "February 2025",
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Book Online",
      description: "Pick your package, vehicle type, and preferred date. Takes 60 seconds.",
    },
    {
      step: 2,
      title: "We Come to You",
      description: "Our team arrives at your home or office with all equipment.",
    },
    {
      step: 3,
      title: "Drive Away Clean",
      description: "Inspect the result, pay only if you're 100% satisfied.",
    },
  ],

  faq: [
    {
      question: "Do you come to my location?",
      answer: "Yes — we're fully mobile. We bring our own water and equipment. All we need is access to your vehicle.",
    },
    {
      question: "How long does a full detail take?",
      answer: "A basic wash takes 1–1.5 hours. A full detail is 3–4 hours. Ceramic coating is a full-day job.",
    },
    {
      question: "What areas do you service?",
      answer: "We cover the Greater Phoenix Area including Scottsdale, Tempe, Chandler, and Gilbert. Contact us if you're unsure.",
    },
    {
      question: "Do I need to be home during the detail?",
      answer: "Nope. Just leave the car accessible and we'll handle the rest. We'll text you when we're done.",
    },
    {
      question: "How do I pay?",
      answer: "We accept cash, Venmo, Zelle, and all major credit cards. Payment is collected after the job.",
    },
  ],

  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=placeholder",

  ga4MeasurementId: "G-XXXXXXXXXX",
  resendAudienceId: undefined,
};

export default client;

import type {
  Activity,
  FAQItem,
  ImpactMetric,
  NavigationItem,
  TimelineStep,
} from "@/types/site";

export const siteContent = {
  organization: {
    name: "Community Outreach Initiative",
    affiliation:
      "An Initiative of the NCC Unit, Rajagiri School of Engineering & Technology (RSET)",
    location: [
      "Rajagiri School of Engineering & Technology",
      "Rajagiri Valley",
      "Kakkanad",
      "Kochi, Kerala 682039",
    ],
  },
  logos: {
    ncc: {
      src: "/logos/ncc.png",
      alt: "NCC logo",
      width: 960,
      height: 1440,
    },
    rset: {
      src: "/logos/rset-logo.png",
      alt: "RSET logo",
      width: 1024,
      height: 1536,
    },
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Services", href: "#service-areas" },
    { label: "Activities", href: "#activities" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    mainHeading: "Action for Happiness",
    headline: "Together, We Can Transform Lives",
    // headline: "Let's take action to be Happier and Kinder, Together",
    subtitle:
      "Join a growing community of volunteers committed to serving those in need through education, food support, healthcare, environmental initiatives and compassionate outreach.",
    buttons: ["Become a Volunteer", "Explore Our Initiatives"],
  },
  about: {
    copy:
      "Our initiative connects students, professionals and members of the public with meaningful opportunities to serve communities through education, healthcare, environmental protection and humanitarian outreach.",
    welcome: "Everyone is welcome to volunteer.",
  },
  mission: [
    "Serve communities with compassion.",
    "Support underprivileged people.",
    "Build volunteer participation.",
    "Create lasting social impact.",
  ],
  serviceAreas: [
    "Food Distribution",
    "Educational Support",
    "Clothes Donation",
    "Blood Donation Camps",
    "Medical Camps",
    "Disaster Relief",
    "Tree Plantation",
    "Beach Cleanup",
    "Community Cleanup",
    "Old Age Home Visits",
    "Orphanage Support",
  ],
  timeline: [
    {
      title: "Register your interest",
      description:
        "Share your contact details and preferred service areas through the volunteer form.",
    },
    {
      title: "Receive updates",
      description: "Updates are shared through email, phone and WhatsApp.",
    },
    {
      title: "Choose an activity",
      description:
        "Upcoming activities include food distribution, beach cleanup and blood donation camps.",
    },
    {
      title: "Serve with compassion",
      description:
        "Volunteer participation supports education, healthcare, environmental protection and humanitarian outreach.",
    },
  ] satisfies TimelineStep[],
  upcomingActivities: [
    {
      title: "Orphanage Visit",
      date: "15 August 2026",
      location: "Kakkanad, Kochi",
      volunteers: "25 Volunteers Needed",
    },
    {
      title: "Food Distribution Drive",
      date: "22 August 2026",
      location: "Kakkanad, Kochi",
      volunteers: "30 Volunteers Needed",
    },
    {
      title: "Blood Donation Camp",
      date: "30 August 2026",
      location: "RSET Campus",
      volunteers: "Open Registration",
    },
  ] satisfies Activity[],
  impact: [
    { value: 520, suffix: "+", label: "Volunteers" },
    { value: 48, suffix: "", label: "Community Drives" },
    { value: 3200, suffix: "+", label: "Meals Distributed" },
    { value: 1150, suffix: "+", label: "Students Supported" },
    { value: 600, suffix: "+", label: "Trees Planted" },
  ] satisfies ImpactMetric[],
  testimonials: [
    "Volunteering here helped me understand the true meaning of community service.",
    "This initiative made it easy to contribute my weekends to meaningful causes.",
  ],
  faq: [
    {
      question: "Can anyone volunteer?",
      answer: "Yes.",
    },
    {
      question: "Do I need to be an NCC cadet?",
      answer: "No.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No.",
    },
    {
      question: "How will I receive updates?",
      answer: "Through email, phone and WhatsApp.",
    },
  ] satisfies FAQItem[],
  contact: {
    emailLabel: "Email",
    email: "outreach@rset.edu.in",
    phoneLabel: "Phone",
    phone: "+91 98765 43210",
    whatsappLabel: "WhatsApp",
    whatsapp: "+91 98765 43210",
  },
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2200&q=85",
      alt: "Volunteers preparing food support boxes for community distribution",
    },
    about: {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=85",
      alt: "Children gathered for a community education session",
    },
    environment: {
      src: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1400&q=85",
      alt: "Volunteers cleaning a beach shoreline",
    },
  },
} as const;

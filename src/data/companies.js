export const certificates = Array.from({ length: 9 }, (_, index) => ({
  image: `/certificates/certificate${index + 1}.jpg`,
  alt: `GMEA certificate and technical training photo ${index + 1}`,
}));

export const solarProjects = [
  { image: "/projects/solar/client5.jpg", title: "Completed Rooftop Installation" },
  { image: "/projects/solar/client1.jpg", title: "Residential Solar Array" },
  { image: "/projects/solar/client2.jpg", title: "Residential Project Site" },
  { image: "/projects/solar/client3.jpg", title: "Installation Materials" },
  { image: "/projects/solar/client4.jpg", title: "Solar Panels Ready for Installation" },
  { image: "/projects/solar/client6.jpg", title: "Solar System Handover with Our Client" },
];

export const companies = {
  electronics: {
    label: "GMEA Electronics & CCTV",
    navLabel: "GMEA Electronics",
    path: "/electronics",
    logo: "/assets/gmea-electronics-logo-v2.jpg",
    theme: "electronics",
    signature: "Smart technology solutions",
    heading: "Solutions & Services",
    filters: ["All services", "Security", "Connectivity", "Safety & Comms", "Automation", "Infrastructure", "Support"],
    products: [
      { name: "CCTV & Video Analytics", category: "Security", price: "Talk to our team", image: "/assets/products/electronics/cctv-video-analytics.png", details: ["Analog cameras — 2MP", "IP cameras — Bullet, Dome, and PTZ", "IP camera resolutions — 2MP, 4MP, and 8MP"] },
      { name: "Fire Detection & Alarm System (FDAS)", category: "Safety & Comms", price: "Talk to our team", image: "/assets/products/electronics/fdas.png", details: ["Conventional FDAS", "Addressable FDAS"] },
      { name: "Access Control & Biometrics", category: "Security", price: "Talk to our team", image: "/assets/products/electronics/access-control-biometrics.png", details: ["Access control systems", "Biometric access solutions"] },
      { name: "Structured Cabling (Copper & Fiber)", category: "Connectivity", price: "Talk to our team", image: "/assets/products/electronics/structured-cabling.png", details: ["Copper structured cabling", "Fiber-optic structured cabling"] },
      { name: "Enterprise Wi-Fi & Networking", category: "Connectivity", price: "Talk to our team", image: "/assets/products/electronics/enterprise-wifi-networking.png", details: ["Enterprise Wi-Fi systems", "LAN network systems"] },
      { name: "PABX/IP Phone Systems", category: "Connectivity", price: "Talk to our team", image: "/assets/products/electronics/pabx-ip-phone.png", details: ["PABX systems", "IP phone systems"] },
      { name: "Nurse Call System", category: "Safety & Comms", price: "Talk to our team", image: "/assets/products/electronics/nurse-call.png", details: ["Nurse call communication systems"] },
      { name: "Public Address & Voice Evacuation", category: "Safety & Comms", price: "Talk to our team", image: "/assets/products/electronics/public-address-voice-evacuation.png", details: ["Public address systems", "Voice evacuation systems"] },
      { name: "Data Center & Server Room Solutions", category: "Infrastructure", price: "Talk to our team", image: "/assets/products/electronics/data-center-server-room.png", details: ["Data center solutions", "Server room solutions"] },
      { name: "Smart Home & Smart Building Automation", category: "Automation", price: "Talk to our team", image: "/assets/products/electronics/smart-home-building-automation.png", details: ["Smart home automation", "Smart building automation"] },
      { name: "Parking & Vehicle Access Systems", category: "Security", price: "Talk to our team", image: "/assets/products/electronics/parking-vehicle-access.png", details: ["Parking access systems", "Vehicle access systems"] },
      { name: "Digital Signage & LED Display Solutions", category: "Safety & Comms", price: "Talk to our team", image: "/assets/products/electronics/digital-signage-led.png", details: ["Digital signage", "LED display solutions"] },
      { name: "Industrial Automation (PLC/SCADA)", category: "Automation", price: "Talk to our team", image: "/assets/products/electronics/industrial-automation-plc-scada.png", details: ["PLC automation", "SCADA solutions"] },
      { name: "Preventive Maintenance & AMC", category: "Support", price: "Talk to our team", image: "/assets/products/electronics/preventive-maintenance-amc.png", details: ["Preventive maintenance", "Annual Maintenance Contracts (AMC)"] },
    ],
  },
  solar: {
    label: "GMEA Sunpower Solutions",
    navLabel: "GMEA Solar",
    path: "/solar",
    logo: "/assets/gmea-sunpower-logo.jpg",
    theme: "solar",
    signature: "Solar solutions",
    heading: "Featured Products",
    filters: ["All products", "Home solar", "Business", "Hybrid systems"],
    products: [
      { name: "3kW Hybrid Solar System", category: "Home solar", price: "₱262,500", image: "/solar-package/package1.png", details: ["6 solar panels", "51.2V 100Ah battery", "Installation and commissioning included"] },
      { name: "6kW Hybrid Solar System", category: "Home solar", price: "₱439,500", image: "/solar-package/package2.png", details: ["8–9 solar panels", "51.2V 200Ah battery", "Installation and commissioning included"] },
      { name: "8kW Hybrid Solar System", category: "Hybrid systems", price: "₱504,000", image: "/solar-package/package8.png", details: ["12 solar panels", "51.2V 314Ah battery", "Hybrid inverter, wiring, installation, and commissioning included"] },
      { name: "10kW Hybrid Solar System", category: "Business", price: "₱630,000", image: "/solar-package/package4.png", details: ["15 solar panels", "Two 51.2V 314Ah batteries", "Installation and commissioning included"] },
      { name: "12kW Hybrid Solar System", category: "Business", price: "₱756,000", image: "/solar-package/package5.png", details: ["18 solar panels", "Two 51.2V 314Ah batteries", "Installation and commissioning included"] },
    ],
  },
  rental: {
    label: "GMEA Rental",
    navLabel: "GMEA Rentals",
    path: "/rental",
    logo: "/assets/gmea-rental-logo.jpg",
    theme: "rental",
    signature: "Heavy equipment rental",
    heading: "Featured Products",
    filters: ["All equipment", "Excavators", "Hauling", "Attachments"],
    products: [
      { name: "Mini Excavator Rental", category: "Excavators", price: "Daily rate quote", image: "/assets/products/rental/mini-excavator-rental.png" },
      { name: "Standard Excavator Rental", category: "Excavators", price: "Weekly rate quote", image: "/assets/products/rental/standard-excavator-rental.png" },
      { name: "Site Dumper Rental", category: "Hauling", price: "Daily rate quote", image: "/assets/products/rental/site-dumper-rental.png" },
      { name: "Material Hauling Support", category: "Hauling", price: "Custom quote", image: "/assets/products/rental/material-hauling-support.png" },
      { name: "Hydraulic Breaker Attachment", category: "Attachments", price: "Add-on quote", image: "/assets/products/rental/hydraulic-breaker-attachment.png" },
      { name: "Auger & Bucket Attachments", category: "Attachments", price: "Add-on quote", image: "/assets/products/rental/auger-bucket-attachments.png" },
    ],
  },
};

export const companyList = Object.values(companies);

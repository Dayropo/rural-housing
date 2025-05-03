export const PROPERTY_TYPES = [
  { value: "house", label: "House" },
  { value: "cabin", label: "Cabin" },
  { value: "farmhouse", label: "Farmhouse" },
  { value: "cottage", label: "Cottage" },
  { value: "land", label: "Land" },
  { value: "ranch", label: "Ranch" },
  { value: "farm", label: "Farm" }
];

export const PROPERTY_STATUSES = [
  { value: "available", label: "Available" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
  { value: "rented", label: "Rented" }
];

export const BED_OPTIONS = [
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" }
];

export const BATH_OPTIONS = [
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" }
];

export const PRICE_RANGES = [
  { value: "100000", label: "100,000" },
  { value: "200000", label: "200,000" },
  { value: "300000", label: "300,000" },
  { value: "400000", label: "400,000" },
  { value: "500000", label: "500,000" },
  { value: "750000", label: "750,000" },
  { value: "1000000", label: "1,000,000" },
  { value: "1500000", label: "1,500,000" },
  { value: "any", label: "Any" }
];

export const RENTAL_PRICE_RANGES = [
  { value: "500", label: "$500" },
  { value: "1000", label: "$1,000" },
  { value: "1500", label: "$1,500" },
  { value: "2000", label: "$2,000" },
  { value: "2500", label: "$2,500" },
  { value: "3000", label: "$3,000" },
  { value: "any", label: "Any" }
];

export const TESTIMONIALS = [
  {
    name: "John & Sarah T.",
    location: "Purchased in Greenfield",
    rating: 5,
    comment: "We found our dream farmhouse through RuralHomes. The process was so smooth, and we love our new country lifestyle!"
  },
  {
    name: "Michael R.",
    location: "Sold in Oak Valley",
    rating: 4,
    comment: "Selling our rural property was easier than we expected. We got a fair price and the team was very professional."
  },
  {
    name: "Jessica L.",
    location: "Renting in Riverside",
    rating: 5,
    comment: "We're renting a beautiful country cottage through RuralHomes and the application process was simple and fast."
  }
];

export const CASH_OFFER_BENEFITS = [
  "No realtor commissions",
  "No repairs needed",
  "Close on your timeline",
  "Fair cash offers"
];

export const FOOTER_LINKS = {
  buyingAndSelling: [
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell a Home", href: "/sell" },
    { label: "We Buy Houses", href: "/we-buy-houses" },
    { label: "Home Loans", href: "#" },
    { label: "Pricing", href: "#" }
  ],
  rentals: [
    { label: "Rent a Home", href: "/rent" },
    { label: "List a Rental", href: "/sell" },
    { label: "Property Management", href: "#" },
    { label: "Rental Applications", href: "#" },
    { label: "Rental Agreements", href: "#" }
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ]
};

import { Shield, Users, Briefcase, Home } from "lucide-react";

// Define the practice areas data
const practiceAreas = [
    {
        id: "criminal-defense",
        icon: <Shield size={48} className="text-green-700" />,
        title: "Criminal Defense",
        description: "We provide aggressive defense against criminal charges, ensuring your rights are protected.",
        overview:
            "Our experienced criminal defense attorneys are dedicated to protecting your rights and achieving the best possible outcome for your case. Whether you're facing misdemeanor or felony charges, we are here to help.",
        keyServices: [
            "Defense against felonies and misdemeanors.",
            "DUI/DWI cases.",
            "Drug offenses.",
            "Theft and fraud cases.",
            "Domestic violence charges.",
        ],
        caseStudies: [
            "Reduced sentence for a client charged with assault.",
            "Successfully defended a client in a high-profile DUI case.",
        ],
    },
    {
        id: "family-law",
        icon: <Users size={48} className="text-green-700" />,
        title: "Family Law",
        description: "We handle sensitive family matters with compassion and expertise.",
        overview:
            "Our family law attorneys provide compassionate and effective legal representation for matters such as divorce, child custody, and adoption. We understand the emotional challenges of family disputes and are here to guide you every step of the way.",
        keyServices: [
            "Divorce and separation.",
            "Child custody and support.",
            "Adoption and guardianship.",
            "Domestic violence restraining orders.",
            "Prenuptial and postnuptial agreements.",
        ],
        caseStudies: [
            "Helped a client gain full custody of their child.",
            "Successfully negotiated a fair divorce settlement.",
        ],
    },
    {
        id: "corporate-law",
        icon: <Briefcase size={48} className="text-green-700" />,
        title: "Corporate Law",
        description: "We help businesses navigate legal challenges and achieve their goals.",
        overview:
            "Our corporate law team provides comprehensive legal services to businesses of all sizes. From formation to compliance, we are here to help your business thrive.",
        keyServices: [
            "Business formation and incorporation.",
            "Contracts and agreements.",
            "Mergers and acquisitions.",
            "Corporate governance.",
            "Intellectual property protection.",
        ],
        caseStudies: [
            "Assisted a startup with incorporation and funding.",
            "Negotiated a multi-million-dollar merger for a client.",
        ],
    },
    {
        id: "real-estate-law",
        icon: <Home size={48} className="text-green-700" />,
        title: "Real Estate Law",
        description: "We assist with property transactions, disputes, and zoning issues.",
        overview:
            "Our real estate attorneys provide expert guidance for buying, selling, and leasing property. We also handle disputes and zoning issues to protect your interests.",
        keyServices: [
            "Buying and selling property.",
            "Lease agreements.",
            "Property disputes.",
            "Zoning and land use.",
            "Real estate litigation.",
        ],
        caseStudies: [
            "Helped a client resolve a boundary dispute.",
            "Successfully negotiated a commercial lease agreement.",
        ],
    },
];

export default practiceAreas;

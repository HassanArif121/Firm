import { Shield, Users, Briefcase, Home } from "lucide-react"; // Changed Building to Home

const practiceAreas = [
    {
        id: "criminal-defense",
        icon: <Shield size={48} className="text-green-700" />,
        title: "Criminal Defense",
        description:
            "We provide aggressive defense against criminal charges, ensuring your rights are protected.",
    },
    {
        id:"family-law",
        icon: <Users size={48} className="text-green-700" />,
        title: "Family Law",
        description:
            "We handle sensitive family matters with compassion and expertise.",
    },
    {
        id: "corporate-law",
        icon: <Briefcase size={48} className="text-green-700" />,
        title: "Corporate Law",
        description:
            "We help businesses navigate legal challenges and achieve their goals.",
    },
    {
        id: "real-estate-law",
        icon: <Home size={48} className="text-green-700" />, // Replaced Building with Home
        title: "Real Estate Law",
        description:
            "We assist with property disputes, contracts, and lease agreements.",
    },
];

export default practiceAreas;

import { Card } from "@/components/Card/Card";
import practiceAreas from "../../data/practice-areas/practicearea";

const PracticeAreas: React.FC = () => {
  return (
    <>
      <div className="mt-18 md:mt-28 p-3">
        <div className="space-y-6">
          <p className="text-3xl font-bold md:text-5xl text-center">
            Our Legal Expertise – Dedicated to Your Success
          </p>
          <p className="text-lg md:text-xl text-center px-8">
            At JusticeLaw, we specialize in various legal areas to provide
            expert guidance and representation. Our experienced attorneys are
            committed to protecting your rights and ensuring the best legal
            outcomes. Explore our key practice areas below.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {practiceAreas.map((area, index) => (
          <Card
            key={index}
            id={area.id}
            title={area.title}
            description={area.description}
            icon={area.icon}
          />
        ))}
      </div>
    </>
  );
};

export default PracticeAreas;

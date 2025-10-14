"use client";
import Link from "next/link"; // ✅ Fix import
import { useEffect, useState } from "react";
import { getAttorneys } from "../../../actions/attorneys";
import Image from "next/image";
interface Attorney {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  [key: string]: string | number | boolean | null;
}
export default function AttorneysPage() {
  const [attorneys, setAttorneys] = useState<Attorney[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const val = await getAttorneys();
      setAttorneys(val);
    };

    fetch();
  }, []);

  return (
    <div className="attorney mt-16 md:mt-28 p-3">
      <div className="border-l p-3 space-y-5">
        <p className="text-3xl font-bold md:text-5xl text-start">
          Meet Our Legal Experts
        </p>
        <p className="text-lg md:text-xl text-start">
          Dedicated attorneys providing trusted legal guidance with years of
          experience.
        </p>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {attorneys.map((attorney) => (
          <Link key={attorney.id} href={`/attorney/${attorney._id}`}>
            <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              <Image
                src={`/${attorney.image}`}
                alt={attorney.name}
                width={300} // Adjust width accordingly
                height={160} // Adjust height accordingly
                className="w-full h-40 object-cover object-top rounded-md"
              />
              <h2 className="text-xl font-bold mt-2">{attorney.name}</h2>
              <p className="text-gray-600">{attorney.specialty}</p>
              <p className="text-gray-500">{attorney.experience} experience</p>
              <p className="text-sm mt-2">{attorney.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";
export default function AboutUs() {
  return (
    <div className="mt-20 mb-4 border-t">
      {/* Hero Section */}
      <section className="relative bg-white text-black py-20 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/about-bg.jpg')" }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About Our Law Firm</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Dedicated to justice, we provide expert legal solutions with integrity and excellence.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="text-center py-16 px-5 bg-black border-b">
        <h2 className="text-4xl font-bold text-white">Our Mission</h2>
        <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
          At our firm, we are committed to protecting our clients&apos; rights, delivering high-quality legal services, and making a positive impact in the community.
        </p>
      </section>

      {/* Our Team */}
      

      {/* Why Choose Us */}
      <section className="bg-white text-black py-16 px-5">
        <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          <div className="text-center border-r">
            <h3 className="text-xl font-semibold">Expert Attorneys</h3>
            <p className="text-gray-400 mt-2">Our lawyers bring years of experience in multiple legal areas.</p>
          </div>
          <div className="text-center border-r">
            <h3 className="text-xl font-semibold">Client-Centered Approach</h3>
            <p className="text-gray-400 mt-2">We focus on understanding our clients&apos; needs and providing the best solutions.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Proven Track Record</h3>
            <p className="text-gray-400 mt-2">With numerous successful cases, we stand by our clients with confidence.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

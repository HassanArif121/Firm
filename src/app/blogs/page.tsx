"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getBlogs } from "../../../actions/blog";
import Image from "next/image";
interface BlogData {
  title: string;
  _id:number,
  excerpt: string;
  date: string;
  content: string;
  category: string;
  image: string;
  FullContent: string;
  tags: string[];
}
export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetching = async () => {
      const value = await getBlogs();
      setBlogs(value);
      console.log(value);
    };
    fetching();
  }, []);

  return (
    <div className="mt-20">
      <div className="hero p-4 bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <div className="overlay bg-black w-full h-full flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Insights & Updates</h1>
            <p className="text-xl">
              Stay informed with the latest legal news, case studies, and expert
              advice.
            </p>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {blogs.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg ">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {post.excerpt} • {post.date}
              </p>
              <Link href={`/blogs/${post._id}`} passHref>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mb-2 bg-white border-b py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Legal Assistance? We’re Here to Help.
        </h2>
        <p className="text-xl mb-8">
          Contact us today to schedule a consultation.
        </p>
        <Button>Schedule a Consultation</Button>
      </div>
    </div>
  );
}

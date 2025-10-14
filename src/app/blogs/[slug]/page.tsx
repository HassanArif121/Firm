"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogsbyId } from "../../../../actions/blog";
import Image from "next/image";

// Corrected Type Definition
type Blog = {
  title: string;
  excerpt: string;
  date: string;
  content: string;
  category: string;
  image: string;
  FullContent: string;
  tags: string[];
};

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  console.log(slug);
  
  useEffect(() => {
    if (!slug) return;

    const fetch = async () => {
      console.log(slug);
      const newBlog = await getBlogsbyId(slug);
      console.log(newBlog);

      setBlog(newBlog || null);
    };
    fetch();
  }, [slug]);

  return (
    <div className="mt-24 container mx-auto p-4">
      {blog ? (
        <div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="text-gray-600">
            {blog.date} - By {blog.excerpt}
          </p>
          <div className="flex flex-col md:grid grid-cols-2 gap-4 border-t border-b mt-2 mb-2 ">
            {" "}
            <Image
              src={blog.image}
              alt={blog.title}
              width={500} // Adjust based on your design
              height={400} // Adjust based on your design
              className="w-full h-[80%] rounded-xl my-4"
            />
            <p className="my-4">{blog.FullContent}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Blog not found.</p>
      )}
    </div>
  );
}

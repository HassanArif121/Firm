"use server";

import Blog from "../models/Blog";
import connectDB from "../lib/connectDB";

// Define an interface for the Blog object
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

// Function to create a new blog
export async function createBlog(param: BlogData): Promise<BlogData> {
  await connectDB();

  const exist = await Blog.findOne({ title: param.title });
  if (exist) {
    throw new Error("Blog already exists");
  }

  const ins = await Blog.create(param);
  return JSON.parse(JSON.stringify(ins));
}

// Function to get all blogs
export async function getBlogs(): Promise<BlogData[]> {
  await connectDB();
  const blogs = await Blog.find();
  return JSON.parse(JSON.stringify(blogs));
}

// Function to get a blog by ID
export async function getBlogsbyId(id: string): Promise<BlogData | null> {
  await connectDB();
  const blog = await Blog.findById(id);
  return blog ? JSON.parse(JSON.stringify(blog)) : null;
}

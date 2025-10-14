"use server";

import Attorneys from "../models/Attorneys";
import connectDB from "../lib/connectDB";

interface Attorney {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  [key: string]: any; // Allows additional fields
}

// Function to add an attorney
export async function addAttorneys(data: Attorney): Promise<Attorney> {
  await connectDB();

  const exist = await Attorneys.findOne({ name: data.name });
  if (exist) {
    throw new Error("Attorney already exists");
  }

  const added = await Attorneys.create(data);
  return JSON.parse(JSON.stringify(added));
}

// Function to get all attorneys
export async function getAttorneys(): Promise<Attorney[]> {
  await connectDB();

  const attorneys = await Attorneys.find();
  return JSON.parse(JSON.stringify(attorneys));
}

// Function to get attorney by ID
export async function getAttorneysbyId(id: string): Promise<Attorney | null> {
  await connectDB();

  const attorney = await Attorneys.findById(id);
  return attorney ? JSON.parse(JSON.stringify(attorney)) : null;
}

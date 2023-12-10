"use server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Social } from "@/typings";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "social"]
`;

export async function GET() {
  try {
    const socials: Social[] = await sanityClient.fetch(query);

    return NextResponse.json({ socials });
  } catch (error: any) {
    console.log(error.message);
  }
}

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Skill } from "@/typings";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "skill"]
`;

export async function GET() {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);

    return NextResponse.json({ skills });
  } catch (error) {
    console.log(error);
  }
}

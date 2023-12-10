import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Project } from "@/typings";

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`;

export async function GET() {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    return NextResponse.json({ projects });
  } catch (error) {
    console.log(error);
  }
}

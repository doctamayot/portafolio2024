import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { PageInfo } from "@/typings";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "pageInfo"][0]
`;

export async function GET() {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query);

    return Response.json(pageInfo);
  } catch (error) {
    console.log(error);
  }
}

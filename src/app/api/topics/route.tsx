import { NextResponse } from "next/server";
import { connnetMongoDB } from "../../../../libs/mongodb";
import Topic from "../../../../models/topicsSchema/topicsSchema";

interface UserRequest {
  json: () => Promise<topicInterface>;
}

interface topicInterface {
  title: string;
  description: string;
}

export async function POST(request: UserRequest) {
  const { title, description } = await request.json();
  await connnetMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "User Create" }, { status: 201 });
}

export async function GET() {
  await connnetMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connnetMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topics Deleted" }, { status: 201 });
}

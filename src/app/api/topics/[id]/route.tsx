import { NextResponse } from "next/server";
import { connnetMongoDB } from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topicsSchema/topicsSchema";
import { json } from "stream/consumers";

interface ParamsInterface {
  params: {
    id: string | number;
  };
}
interface UserRequestInterface {
  json: () => Promise<TopicsInterface>;
}
interface TopicsInterface {
  newTitle: string;
  newDescription: string;
}

export async function GET(request: any, { params }: ParamsInterface) {
  const { id } = params;
  await connnetMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic });
}

export async function PUT(
  request: UserRequestInterface,
  { params }: ParamsInterface
) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connnetMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topics Updated" }, { status: 201 });
}

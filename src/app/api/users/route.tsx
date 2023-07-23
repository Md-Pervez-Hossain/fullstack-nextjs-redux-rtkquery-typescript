import { NextResponse } from "next/server";
import { connnetMongoDB } from "../../../../libs/mongodb";
import User from "../../../../models/userSchema/userSchema";

interface UserRequest {
  json: () => Promise<userInterface>;
}
interface userInterface {
  name: string;
  email: string;
}

export async function POST(request: UserRequest) {
  const { name, email } = await request.json();
  await connnetMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Added" }, { status: 201 });
}

export async function GET() {
  await connnetMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connnetMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User Delete" }, { status: 200 });
}

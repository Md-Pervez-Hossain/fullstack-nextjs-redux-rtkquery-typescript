import { NextResponse } from "next/server";
import { connnetMongoDB } from "../../../../../libs/mongodb";
import User from "../../../../../models/userSchema/userSchema";
interface UserRequest {
  json: () => Promise<userInterface>;
}
interface userInterface {
  newName: string;
  newEmail: string;
}
interface ParamInterface {
  params: {
    id: string | number;
  };
}

export async function GET(request: any, { params }: ParamInterface) {
  const { id } = params;
  await connnetMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user });
}
export async function PUT(request: UserRequest, { params }: ParamInterface) {
  const { id } = params;
  const { newName: name, newEmail: email } = await request.json();
  await connnetMongoDB();
  await User.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({ message: "User Updated" }, { status: 201 });
}

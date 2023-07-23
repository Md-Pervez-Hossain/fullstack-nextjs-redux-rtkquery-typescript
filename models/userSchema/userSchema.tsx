import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    retuired: true,
  },
});

const User = models.User || model("User", userSchema);
export default User;

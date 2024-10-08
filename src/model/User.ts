import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  super_id: string;
  name?: string;
  phone?: string;
  address?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  super_id: { type: String, required: true },
  name: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;

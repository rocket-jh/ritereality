import { Model, Schema, model, models } from "mongoose";
import { USER_ROLES, type UserRole } from "@/lib/constants";

export type UserDocument = {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: USER_ROLES, required: true },
  },
  { timestamps: true }
);

export const UserModel: Model<UserDocument> =
  (models.User as Model<UserDocument> | undefined) ?? model<UserDocument>("User", UserSchema);

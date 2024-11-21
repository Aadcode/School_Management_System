import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "teacher", "student"], required: true },
  createdAt: { type: Date, default: Date.now() },
});

export default adminSchema = mongoose.model("adminSchema", adminSchema);

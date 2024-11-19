import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacherSchema",
    required: true,
  },
  studentCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
});

export default teacherSchema = mongoose.model("teacherSchema", teacherSchema);

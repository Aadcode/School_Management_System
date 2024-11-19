const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classSchema",
    required: true,
  },
  profileImageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default studentSchema = mongoose.model("studentSchema", studentSchema);

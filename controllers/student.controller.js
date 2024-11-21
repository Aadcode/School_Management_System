import studentModel from "../models/student.model";
import uploader from "../utils/cloudinary.service";

// Create Student
export const create_student = async (req, res) => {
  const { name, email, classId } = req.body;
  const profileImage = req.file;

  if (!name || !email || !classId || !profileImage) {
    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    const url = await uploader(profileImage);
    const student = new studentModel({
      name,
      email,
      classId,
      profileImageUrl: url,
    });

    await student.save();
    res.status(201).send({ message: "Student created successfully", student });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Error creating student", details: e.message });
  }
};

// Get all students
export const get_students = async (req, res) => {
  try {
    const students = await studentModel.find().populate("classId");
    res.status(200).send({ students });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Error fetching students", details: e.message });
  }
};

// Get a student by ID
export const get_student = async (req, res) => {
  try {
    const { id } = req.params.id;
    const student = await studentModel.findById(id).populate("classId");

    if (!student) {
      return res.status(404).send({ error: "Student not found" });
    }

    res.status(200).send({ student });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Error fetching student", details: e.message });
  }
};

// Update Student
export const update_student = async (req, res) => {
  try {
    const { id } = req.params.id;
    const updateData = req.body;

    if (!id) {
      return res.status(400).send({ error: "Student ID is required" });
    }

    const updatedStudent = await studentModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).send({ error: "Student not found" });
    }

    res
      .status(200)
      .send({ message: "Student updated successfully", updatedStudent });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Error updating student", details: e.message });
  }
};

// Delete Student
export const delete_student = async (req, res) => {
  try {
    const { id } = req.params.id;

    if (!id) {
      return res.status(400).send({ error: "Student ID is required" });
    }

    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).send({ error: "Student not found" });
    }

    res
      .status(200)
      .send({ message: "Student deleted successfully", deletedStudent });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Error deleting student", details: e.message });
  }
};

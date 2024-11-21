import Class from "../models/classSchema"; // Assuming classSchema is in 'models' folder
import Teacher from "../models/teacherSchema"; // Assuming teacherSchema exists in 'models' folder

// Create a new class

export const createClass = async (req, res) => {
  const { name, teacherId, studentCount } = req.body;

  try {
    // Check if the teacher exists
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    const newClass = new Class({
      name,
      teacherId,
      studentCount,
    });

    await newClass.save();
    res
      .status(201)
      .json({ message: "Class created successfully", class: newClass });
  } catch (error) {
    res.status(500).json({ message: "Error creating class", error });
  }
};

// Assign a teacher to a class
export const assignTeacher = async (req, res) => {
  const { classId, teacherId } = req.body;

  try {
    // Find the class
    const classToUpdate = await Class.findById(classId);
    if (!classToUpdate) {
      return res.status(404).json({ message: "Class not found" });
    }

    // Check if the teacher exists
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Assign the teacher to the class
    classToUpdate.teacherId = teacherId;
    await classToUpdate.save();
    res
      .status(200)
      .json({ message: "Teacher assigned successfully", class: classToUpdate });
  } catch (error) {
    res.status(500).json({ message: "Error assigning teacher", error });
  }
};

// Get all classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("teacherId", "name");
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching classes", error });
  }
};

// Update a class
export const updateClass = async (req, res) => {
  const { classId } = req.params.classId;
  const { name, teacherId, studentCount } = req.body;

  try {
    const classToUpdate = await Class.findById(classId);
    if (!classToUpdate) {
      return res.status(404).json({ message: "Class not found" });
    }

    // Update class data
    classToUpdate.name = name || classToUpdate.name;
    classToUpdate.teacherId = teacherId || classToUpdate.teacherId;
    classToUpdate.studentCount = studentCount || classToUpdate.studentCount;

    await classToUpdate.save();
    res
      .status(200)
      .json({ message: "Class updated successfully", class: classToUpdate });
  } catch (error) {
    res.status(500).json({ message: "Error updating class", error });
  }
};

// Delete a class
export const deleteClass = async (req, res) => {
  const { classId } = req.params.classId;

  try {
    const classToDelete = await Class.findById(classId);
    if (!classToDelete) {
      return res.status(404).json({ message: "Class not found" });
    }

    await classToDelete.remove();
    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting class", error });
  }
};

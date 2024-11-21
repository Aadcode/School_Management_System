import teacherModel from "../models/teacher.model.js";
import uploader from "../utils/cloudinary.service.js";

// create Teacher controller

const create_teacher = async (req, res) => {
  const { name, email, subject } = req.body;
  const profilePicture = req.file?.path;

  // Validate request fields
  if (!name || !email || !subject || !profilePicture) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Upload profile picture to Cloudinary
    const result = await uploader(req);
    if (!result) {
      return res.status(500).json({ error: "Cloudinary Server Error" });
    }

    // Create a new teacher document
    const teacher = new teacherModel({
      name,
      email,
      subject,
      profilePicture: result.url,
    });

    // Save teacher document to MongoDB
    await teacher.save();

    return res.status(201).json({
      message: "Teacher created successfully!",
      teacher,
    });
  } catch (error) {
    console.error("Error creating teacher:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Teachers

const get_teachers = async (req, res) => {
  try {
    // Fetch all teachers from the database
    const teachers = await teacherModel.find();

    return res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);

    // Send an error response
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get teacher

const get_teacher = async (req, res) => {
  const id = req.params.id;

  try {
    const teacher = await teacherModel.findById(id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json(teacher);
  } catch (e) {
    console.error("Error fetching teacher:", e);
    return res
      .status(500)
      .json({ message: "Error in teacher details", error: e.message });
  }
};

//update Teacher

const update_teacher = (req, res) => {
  const { id, name, subject } = req.body;
  const { profilePicture } = req.file;

  if (profilePicture) {
    try {
      uploader(req.file.path).then((newUrl) => {
        teacherModel.findByIdAndUpdate(id, {
          name,
          subject,
          profileImageUrl: newUrl,
        });
      });
      return res.status(200).send("profile Upldated succesfully");
    } catch (e) {
      return res.status(500).send("Error in Updating profile", e);
    }
  }
  try {
    const updatedTeacher = teacherModel.findByIdAndUpdate(id, {
      name,
      subject,
    });
    return res.status(200).send("profile Upldated succesfully");
  } catch (e) {
    return res.status(500).send("Error in Updating profile", e);
  }
};

//Delete Teacher

const delete_teacher = async (req, res) => {
  const { id } = req.params; // Use params for the ID in the URL

  try {
    // Find and delete the teacher
    const teacher = await teacherModel.findByIdAndDelete(id);

    // If no teacher was found
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (e) {
    console.error("Error deleting teacher:", e);
    return res
      .status(500)
      .json({ message: "Error in deleting teacher", error: e.message });
  }
};

export {
  create_teacher,
  get_teachers,
  get_teacher,
  update_teacher,
  delete_teacher,
};

import teacherModel from "../models/teacher.model";
const create_Teacher = async (req, res) => {
  const { name, email, subject } = req.body();
  const { profilePicture } = req.file;

  if ((!name && !email && !subject, !profilePicture)) {
    res.status(400).send("Filed is Missing");
  }

  
};

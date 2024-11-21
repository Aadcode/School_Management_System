import bcrypt from "bcryptjs";
import adminSchema from "../models/admin.model.js";
import jwt from "jsonwebtoken";

// SignUp Controller
export const SignUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new adminSchema({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save user to the database
    await user.save();

    res.status(201).send({ message: "User created successfully", user });
  } catch (e) {
    console.error(e);
    if (e.code === 11000) {
      // Handle duplicate email error
      return res.status(400).send({ error: "Email already exists" });
    }
    res.status(500).send({ error: "Error in SignUp", details: e.message });
  }
};

// SignIn Controller
export const SignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await adminSchema.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: "User does not exist" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.status(200).send({
      message: "User logged in successfully",
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Error in SignIn", details: e.message });
  }
};

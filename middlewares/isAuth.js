import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).send("User not authenticated");
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded token to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(403).send("Invalid or expired token");
  }
};

export default isAuth;

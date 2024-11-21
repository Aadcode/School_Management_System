import express from "express";
import { configDotenv } from "dotenv";
import adminRoutes from "./routes/admin.routes.js";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import classRoutes from "./routes/class.routes.js";
configDotenv();
// connectDB();

const app = express();

//Body-Parser
app.use(express.json());

//Routes

app.use("app/v1", adminRoutes);
app.use("/app/v1/", studentRoutes);
app.use("app/v1/", teacherRoutes);
app.use("app/v1/", classRoutes);

//Server Listens

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});

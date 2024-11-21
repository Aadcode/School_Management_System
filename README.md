# School Management System

This is a backend service for managing school-related operations, including managing administrators, teachers, classes, and students. Built with **Express.js**, the service includes authentication, file uploads, and various CRUD functionalities.

## Features

- **Authentication**: Secure sign-up and sign-in for admins.
- **Teacher Management**: Create, read, update, and delete teacher profiles.
- **Class Management**: Handle creation, assignment, and management of classes.
- **Student Management**: Manage student profiles, including file uploads for profile creation.

## API Endpoints

### Admin Routes

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | `/SignUp` | Register an admin |
| POST   | `/SignIn` | Admin login       |

### Class Routes

| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| POST   | `/create_class`          | Create a new class          |
| GET    | `/Assign_teacher`        | Assign a teacher to a class |
| GET    | `/get_classes`           | Fetch all classes           |
| PUT    | `/update_class/:classId` | Update a class by ID        |
| DELETE | `/delete_class/:classId` | Delete a class by ID        |

### Teacher Routes

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| POST   | `/create_teacher`  | Create a new teacher           |
| GET    | `/get_teachers`    | Fetch all teachers             |
| GET    | `/get_teacher/:id` | Fetch a specific teacher by ID |
| PUT    | `/update_teacher`  | Update a teacher               |
| DELETE | `/delete_teacher`  | Delete a teacher               |

### Student Routes

| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| POST   | `/create_student`     | Create a new student           |
| GET    | `/get_students`       | Fetch all students             |
| GET    | `/get_student/:id`    | Fetch a specific student by ID |
| PUT    | `/update_student/:id` | Update a student by ID         |
| DELETE | `/delete_student/:id` | Delete a student by ID         |

## Setup Steps

Follow the steps below to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [Git](https://git-scm.com/)
- A package manager like `npm` or `yarn`

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Aadcode/School_Management_System.git
   cd School_Management_System
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Environment Variables**

   - Create a `.env` file in the root directory and add the required environment variables.
   - Example:
     `    PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=CLOUD_NAME
CLOUDINARY_API_KEY=API_KEY
CLOUDINARY_SECRET_KEY = SECRET_KEY`

### Running in Development Mode

Use `nodemon` for live-reloading during development:

```bash
npm run dev
```

## Contact

If you have any questions or issues, feel free to contact me:

- **Email**: [aadarshjain1927@gmail.com](mailto:aadarshjain1927@gmail.com)

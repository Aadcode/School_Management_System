import multer from "multer";
import path from "path";

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("public/files"));
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "_" + file.originalname;
    cb(null, filename);
  },
});

export const upload = multer({ storage: fileStorage });

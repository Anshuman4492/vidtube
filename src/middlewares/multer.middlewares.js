import multer from "multer";

const storage = multer.diskStorage({
  // Path where to save the file
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  // rename the file, to something unique
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage });

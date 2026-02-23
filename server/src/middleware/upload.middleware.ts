import multer from "multer";

const fifeMb = 5 * 1024 * 1024;

const imageTypes = ["image/jpeg", "image/png"];
const videoTypes = ["video/mp4", "video/avi", "video/quicktime"]; // MOV = video/quicktime
export const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: fifeMb },
  fileFilter(req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only JPEG and PNG images are allowed"));
    }
    cb(null, true);
  },
});

export const uploadTestimonialFiles = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: fifeMb },
  fileFilter(req, file, cb) {
    if (file.fieldname === "avatar") {
      if (!imageTypes.includes(file.mimetype)) {
        return cb(new Error("Avatar must be JPEG or PNG"));
      }
      return cb(null, true);
    }

    if (file.fieldname === "video") {
      if (!videoTypes.includes(file.mimetype)) {
        return cb(new Error("Video must be MP4/AVI/MOV"));
      }
      return cb(null, true);
    }

    // boshqa field kelsa
    return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file.fieldname));
  },
}).fields([
  { name: "video", maxCount: 1 },
  { name: "avatar", maxCount: 1 },
]);

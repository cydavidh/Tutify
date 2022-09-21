import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  course: {
    type: String,
  },
  availability: {
    type: String,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  tutor: {
    type: String,
  },
  tutorname: {
    type: String,
  },
  tutees: {
    type: [String],
    default: [],
  },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;

// username: {
//   type: String,
//   required: true,
// }

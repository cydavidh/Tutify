import Course from "../models/course.js";

// export const getTeaching = (res, req) => {};
export async function getTeaching(req, res) {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createCourse(req, res) {
  const body = req.body;

  const newCourse = new Course(body);

  try {
    newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

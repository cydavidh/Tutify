import { Course } from '../models/course.js';
import Tutee from '../models/tutee.js';
import Tutor from '../models/tutor.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getTutor = async (req, res) => {
  const { id } = req.params;
  try {
    const tutor = await Tutor.findById(id);
    res.status(200).json(tutor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getTeaching = (res, req) => {};
export const getTeaching = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTutees = async (req, res) => {
  try {
    const tutees = await Tutee.find();
    res.status(200).json(tutees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  const body = req.body;

  const newCourse = new Course(body);

  try {
    newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await Tutor.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, abacId, gpa, year, aboutMe } = req.body;

  try {
    const oldUser = await Tutor.findOne({ email });

    if (oldUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Tutor.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, '' + process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteCourse = async (req, res) => {
  const { courseid } = req.params;

  await Course.findByIdAndRemove(courseid);

  res.json({ message: 'Post deleted successfully' });

  // const { id: _id } = req.params;d

  // if (!mongoose.Types.ObjectId.isValid(_id))
  // 	return res.status(404).send("No post with that id");

  // await PostMessage.findByIdAndRemove(_id);

  // res.json({ message: "Post deleted successfully" });
};

export const updateProfile = async (req, res) => {
  const { userid } = req.params;
  const { abacId, gpa, year, aboutMe } = req.body;

  // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { abacId, gpa, year, aboutMe, _id: userid };

  await Tutor.findByIdAndUpdate(userid, updatedPost, { new: true });

  res.json(updatedPost);
};

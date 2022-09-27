import Axios from "axios";

//tutor
const tutorAPI = Axios.create({ baseURL: "http://localhost:1001/tutor" });

tutorAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export async function fetchTutorCourses() {
  const response = await tutorAPI.get("/teaching");
  return response.data;
}
export const createCourse = (newCourse) => tutorAPI.post("/teaching", newCourse);
export const logIn = (formData) => tutorAPI.post("/login", formData);
export const signUp = (formData) => tutorAPI.post("/signup", formData);

//tutee
const tuteeAPI = Axios.create({ baseURL: "http://localhost:1001/tutee" });

tuteeAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export async function fetchRequestedCourses() {
  const response = await tutorAPI.get("/requests");
  return response.data;
}
export const createRequest = (newCourse) => tutorAPI.post("/requests", newCourse);
export const tuteeLogin = (formData) => tuteeAPI.post("/login", formData);
export const tuteeSignup = (formData) => tuteeAPI.post("/signup", formData);
export const enroll = (courseid) => tuteeAPI.patch(`/enroll/${courseid}`);

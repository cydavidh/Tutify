import Axios from "axios";

// const url = "https://localhost:5000/posts";
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

const tutorUrl = "http://localhost:5001/tutorcourses";

export async function fetchTutorCourses() {
  const response = await Axios.get(tutorUrl);
  return response.data;
}

export const createCourse = (newCourse) => Axios.post(tutorUrl, newCourse);

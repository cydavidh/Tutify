import React from "react";
import { fetchTutorCourses } from "../../../api/index";

const Requests = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = React.useState([]);

  fetchTutorCourses().then((result) => {
    setCourses(result);
  });

  return (
    <>
      {courses.map((singleCourse) => {
        console.log(singleCourse?.tutees.includes(user.result._id));

        singleCourse?.tutees.includes(user.result._id);
      })}
    </>
  );
};

export default Requests;

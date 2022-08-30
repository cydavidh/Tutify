import React from "react";
import Course from "./Course/Course";
import { fetchTutorCourses } from "../../../api/index";
import { Grid, Typography, CircularProgress } from "@mui/material";
import Axios from "axios";

function Courses() {
  // Axios.get("http://localhost:5001/tutorcourses").then((response) =>
  //   console.log(response.data)
  // );
  const [courses, setCourses] = React.useState([]);

  fetchTutorCourses().then((result) => {
    setCourses(result);
  });

  // React.useEffect(() => {
  //   fetchTutorCourses().then((result) => {
  //     // console.log("zero" + courses[0]);
  //     // console.log("one" + result[0].price);
  //     setCourses(result);
  //     // console.log("two" + courses[0].price);
  //   });
  //   // console.log(data);
  // }, []);

  // React.useEffect(() => {
  //   console.log(courses[0]);
  // }, [courses]);
  // console.log(courses);
  // return !courses.length ? (
  //   <CircularProgress />
  // ) : (
  //   // courses.map((singleCourse) => console.log(singleCourse))
  //   courses.map((singleCourse) => (
  //     <Course key={singleCourse._id} course={singleCourse} />
  //   ))
  //   // <div>
  //   //   {courses.map((singleCourse) => (
  //   //     {console.log(singleCourse)}
  //   //     {/* <Course key={singleCourse._id} course={singleCourse} /> */}
  //   //   ))}
  //   // </div>
  // );

  // return;
  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map((singleCourse) => (
        <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
          <Course course={singleCourse} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;

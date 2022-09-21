import React from "react";
import AvailableCourse from "./AvailableCourse/AvailableCourse";
import { fetchTutorCourses } from "../../../api/index";
import { Grid, Typography, CircularProgress } from "@mui/material";

function AvailableCourses() {
  const [courses, setCourses] = React.useState([]);

  fetchTutorCourses().then((result) => {
    setCourses(result);
  });

  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map((singleCourse) => (
        <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
          <AvailableCourse course={singleCourse} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AvailableCourses;

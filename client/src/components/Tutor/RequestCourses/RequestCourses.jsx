import React from 'react';
import RequestCourse from './RequestCourse/RequestCourse';
import { fetchRequestedCourses } from '../../../api/index';
import { Grid, Typography, CircularProgress } from '@mui/material';

function RequestCourses() {
  let user = JSON.parse(localStorage.getItem('user'));
  const [courses, setCourses] = React.useState([]);

  fetchRequestedCourses()
    .then((result) => {
      setCourses(result);
      // console.log('courses', courses);
    })
    .catch((error) => {
      if (error.response) {
        // console.log(error.response.data); // => the response payload
        alert(error.response.data.message);
      }
    });

  // console.log("userid", user.result._id)
  // console.log(courses[0].tutee)
  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map((singleCourse) => (
        <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
          <RequestCourse course={singleCourse} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RequestCourses;

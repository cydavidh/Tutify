import React, { useState, useEffect } from 'react';
import FormTeach from '../Form/FormTeach';
import Courses from '../Courses/Courses';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Students from '../Students/Students';

function Teaching(props) {
  return (
    <div>
      {props.viewCourses && (
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
                Your Courses
              </Typography>
              <Courses studentFunction={props.studentFunction} />
              {/* <Courses setCurrentId={setCurrentId} /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormTeach />
              {/* <FormTeach currentId={currentId} setCurrentId={setCurrentId} /> */}
            </Grid>
          </Grid>
        </Container>
      )}

      {!props.viewCourses && (
        <div>
          <Students redirectToChat={props.redirectToChat} courseId={props.courseId} viewChange={props.viewChange} chatChange={props.chatChange} />
        </div>
      )}
    </div>
  );
}

export default Teaching;

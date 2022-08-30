import React, { useState, useEffect } from "react";
import FormTeach from "../Form/FormTeach";
import Courses from "../Courses/Courses";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

function Teaching() {
  return (
    <Container maxWidth="xl">
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography
            sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }}
            variant="h4"
          >
            Your Courses
          </Typography>
          <Courses />
          {/* <Courses setCurrentId={setCurrentId} /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormTeach />
          {/* <FormTeach currentId={currentId} setCurrentId={setCurrentId} /> */}
        </Grid>
      </Grid>
    </Container>
    // <Container maxWidth="xl">
    //   <Grow in>
    //     <Container>
    //       <Grid
    //         container
    //         justify="space-between"
    //         alignItems="stretch"
    //         spacing={3}
    //       >
    //         <Grid item xs={12} sm={7}>
    //           <Courses />
    //           {/* <Courses setCurrentId={setCurrentId} /> */}
    //         </Grid>
    //         <Grid item xs={12} sm={5} md={3}>
    //           <FormTeach />
    //           {/* <FormTeach currentId={currentId} setCurrentId={setCurrentId} /> */}
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
}

export default Teaching;

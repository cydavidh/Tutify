import React, { useState, useEffect } from "react";
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
            Enrolled Courses
          </Typography>
          <EnrolledCourses />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;

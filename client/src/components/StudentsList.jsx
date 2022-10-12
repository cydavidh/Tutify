import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@mui/material';

const StudentsList = () => {
  return (
    <div>
      <Paper
        elevation={2}
        style={{
          padding: 30,
        }}
      >
        <Typography sx={{ marginTop: 0, marginBottom: 0, minWidth: 0 }} variant="h6">
          Tutee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course
        </Typography>
        <Typography sx={{ marginTop: 0, marginBottom: 0, minWidth: 0 }} variant="h7">
          Fathiel Evershade &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSX1001 Introduction to Programming
        </Typography>
      </Paper>
    </div>
  );
};

export default StudentsList;

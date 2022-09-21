import React from "react";
import { Card, CardContent, Button, CardActions, Typography } from "@mui/material";

function EnrolledCourse({ course }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">{course.course}</Typography>
        <Typography variant="h7" sx={{ textDecoration: "underline" }}>
          {course.tutorname}
        </Typography>
        <Typography>{course.type}</Typography>
        <Typography>{course.price} Baht/Hour</Typography>
        <Typography>{course.availability}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          //   onClick={() => {
          //     enroll(course._id);
          //   }}
        >
          Chat
        </Button>
        <Button size="small">Details</Button>
        <Button size="small">Withdraw</Button>
      </CardActions>
    </Card>
  );
}

export default EnrolledCourse;

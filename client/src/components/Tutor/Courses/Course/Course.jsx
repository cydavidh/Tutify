import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
} from "@mui/material";

function Course({ course }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">{course.course}</Typography>
        <Typography>{course.type}</Typography>
        <Typography>{course.price} Baht/Hour</Typography>
        <Typography>{course.availability}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ textDecoration: 'line-through' }}>Students</Button>
        <Button size="small" sx={{ textDecoration: 'line-through' }}>Delete</Button>
        {/* <Button size="small">Delete</Button> */}
      </CardActions>
    </Card>
  );
}

export default Course;

import React from 'react';
import { Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import { apply } from '../../../../api/index.js';
import { useEffect } from 'react';

function RequestCourse({ course }) {
  let user = JSON.parse(localStorage.getItem('user'));
  const [applied, setApplied] = React.useState(false);

  useEffect(() => {
    if (course.tutors.includes(user.result._id)) {
      setApplied(true);
    }
  }, []);
  const onClickHandler = () => {
    apply(course._id);
    setApplied(true);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">
          {course.course} {applied && '✔️'}
        </Typography>
        <Typography variant="h7" sx={{ textDecoration: 'underline' }}>
          {course.tuteeRequestName}
        </Typography>
        <Typography>{course.type}</Typography>
        <Typography>{course.price} Baht/Hour</Typography>
        <Typography>{course.availability}</Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" sx={{ textDecoration: 'line-through' }}>
          Chat
        </Button> */}
        {/* <Button size="small">Chat</Button> */}

        {!applied && (
          <Button size="small" onClick={onClickHandler}>
            Apply
          </Button>
        )}

        {/* <Button size="small" sx={{ textDecoration: 'line-through' }}>
          Tutee Detail
        </Button> */}
        {/* <Button size="small">Tutee Detail</Button> */}
      </CardActions>
    </Card>
  );
}

export default RequestCourse;

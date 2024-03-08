import React from 'react';
import { Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import { withdraw } from '../../../../api/index.js';
import emailjs from '@emailjs/browser';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

const socket = io('http://localhost:1001');
function EnrolledCourse(props) {
  emailjs.init('hRz_fkfNSAGvLLvGM');
  let user = JSON.parse(localStorage.getItem('user'));

  let tutorId = props.course.tutor;
  const navigate = useNavigate();
  const startChat = (tutorId) => {
    socket.emit('start chat', { tutorId, tuteeId: user.id });
    props.setChat(tutorId);
    // ('/chat/${tutorId}'); // Replace 'chat' with the path to your chat tab
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">{props.course.course}</Typography>
        <Typography variant="h7" sx={{ textDecoration: 'underline' }}>
          {props.course.tutorname}
        </Typography>
        <Typography>{props.course.type}</Typography>
        <Typography>{props.course.price} Baht/Hour</Typography>
        <Typography>{props.course.availability}</Typography>
        <Typography>{props.course.details}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => startChat(tutorId)}>
          Chat
        </Button>
        <Button
          size="small"
          onClick={() => {
            withdraw(props.course._id);
            props.setForceRender((prev) => prev + 1);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default EnrolledCourse;

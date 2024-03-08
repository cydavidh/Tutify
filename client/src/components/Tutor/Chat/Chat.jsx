import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { TextField, Button, Paper, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '', messages: [], rooms: ['Room 1', 'Room 2', 'Room 3'], currentRoom: 'Room 1' };
  }

  componentDidMount() {
    this.socket = io('http://localhost:1001'); // replace with your server's URL

    this.socket.on('chat messages', (msgs) => {
      this.setState({ messages: msgs });
    });

    this.socket.on('start chat', ({ tutorName: tuteeName }) => {
      this.handleRoomChange(null, tuteeName);
      // Emit 'join chat' event when a chat starts
      this.socket.emit('join chat', { tutorId: tuteeName });
      // Fetch messages for the selected room
      this.socket.emit('fetch messages', { room: tuteeName });
    });
  }

  componentWillUnmount() {
    // Emit 'leave chat' event when the component unmounts
    this.socket.emit('leave chat', { tutorId: this.state.currentRoom });
    this.socket.disconnect();
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    this.socket.emit('chat message', { room: this.state.currentRoom, message: this.state.message });
    this.setState(prevState => ({ message: '', messages: [...prevState.messages, this.state.message] }));
  }

  handleRoomChange = (room, tutorName) => {
    const roomName = tutorName || room;
    this.setState({ currentRoom: roomName });
    // Fetch messages for the selected room
    this.socket.emit('fetch messages', { room: roomName });
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {/* <Typography variant="h5">Rooms</Typography> */}
          <List>
            {this.state.rooms.map((room, index) => (
              <ListItem button key={index} onClick={() => this.handleRoomChange(room)}
                style={{ backgroundColor: room === this.state.currentRoom ? '#e0e0e0' : null, width: 300 }} // highlight the current room
              >
                <ListItemText primary={room} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={10}>
          {/* <Typography variant="h5">{this.state.currentRoom}</Typography> */}
          <Paper style={{ height: 'calc(100vh - 200px)', overflow: 'auto', marginBottom: '1em', width: '60vh' }}>
            <List>
              {this.state.messages.map((message, index) => (
                <ListItem key={index}>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Paper>
          <form onSubmit={this.handleMessageSubmit} style={{ display: 'flex', position: 'fixed', bottom: 100, width: '60vh' }}>
            <TextField
              variant="outlined"
              style={{ flex: 1 }} // give the TextField a flex value
              value={this.state.message}
              onChange={this.handleMessageChange}
              placeholder="Type your message here..."
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '1em', flex: 'none' }}>
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default Chat;
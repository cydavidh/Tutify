import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tutorRoutes from "./routes/tutor-routers.js";
import tuteeRoutes from "./routes/tutee-routers.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Tutor from "./models/tutor.js";
import Tutee from "./models/tutee.js";
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tutor", tutorRoutes);
app.use("/tutee", tuteeRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const PORT = process.env.PORT || 1001;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:1000", // replace with your client's origin
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('start chat', ({ tutorId, tuteeId }) => {
    // Create a new chat room if it doesn't already exist
    // The room name is the tutor's ID
    if (!io.sockets.adapter.rooms.get(tutorId)) {
      socket.join(tutorId);
    }

    // Add the tutee to the room
    socket.to(tutorId).emit('join chat', { tutorId });
  });

  socket.on('leave chat', ({ tutorId }) => {
    console.log(`Chat ended with tutor ${tutorId}`);
    socket.leave(tutorId); // the room name is the tutor's ID
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', ({ room, message }) => {
    io.to(room).emit('chat message', message);
  });

  socket.on('fetch messages', ({ room }) => {
    // Fetch messages for the requested room from your database
    // This is just a placeholder, replace it with your actual database query
    const messages = fetchMessagesFromDatabase(room);

    // Emit the messages back to the client
    socket.emit('chat messages', messages);
  });
});
const socketio = require('socket.io');    // library, which allows for real-time, two-way communication between a server and connected clients
const jwt = require('jsonwebtoken');      // library, used for creating and verifying tokens that help authenticate users
const mongoose = require('mongoose');     // interacting with MongoDB databases

const { ROLES } = require('../constants');    // ROLES = object (Admin, User)
const keys = require('../config/keys');   // imports configuration settings (sensitive information)
const User = mongoose.model('User');      // retrieves the User model from db

const support = require('./support');

const authHandler = async (socket, next) => {     // This function is responsible for authenticating users who connect to the WebSocket server
  const { token = null } = socket.handshake.auth;   //  If no token is found, it defaults to null
  if (token) {
    const [authType, tokenValue] = token.trim().split(' ');   // splits the token string
    if (authType !== 'Bearer' || !tokenValue) {
      return next(new Error('no token'));
    }

    const { secret } = keys.jwt;
    const payload = jwt.verify(tokenValue, secret);
    const id = payload.id.toString();
    const user = await User.findById(id);

    if (!user) {
      return next(new Error('no user found'));
    }

    const u = {
      id,
      role: user?.role,
      isAdmin: user.role === ROLES.Admin,
      name: `${user?.firstName} ${user?.lastName}`,
      socketId: socket.id,
      messages: []
    };

    const existingUser = support.findUserById(id);
    if (!existingUser) {
      support.users.push(u);
    } else {
      existingUser.socketId = socket.id;
    }
  } else {
    return next(new Error('no token'));
  }

  next();
};

const socket = server => {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.use(authHandler);

  const onConnection = socket => {
    support.supportHandler(io, socket);
  };

  io.on('connection', onConnection);
};

module.exports = socket;

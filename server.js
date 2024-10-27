const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('message', async (msg) => {
        console.log('Message received:', msg);
        const response = await getChatGPTResponse(msg);
        socket.emit('response', response);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

async function getChatGPTResponse(message) {
    return "Programming isn't about what you know; it's about what you can figure out."; // Temporary static response for testing
}



server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

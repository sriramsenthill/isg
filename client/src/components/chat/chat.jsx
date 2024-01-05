import React, { useState } from 'react';
import { Container, TextField, Button, Typography, List, ListItem, Avatar, Divider } from '@material-ui/core';

const ChatBox = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: 'Student',
            text: 'What is ISG?',
            isProfessor: true,
            replies: [],
            isReplying: false, // Indicates whether a professor is replying to this question
        },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        const newMessageObj = { id: messages.length + 1, user: 'Student', text: newMessage, isProfessor: false, replies: [], isReplying: false };
        setMessages([...messages, newMessageObj]);
        setNewMessage('');
    };

    const handleReply = (messageId) => {
        const updatedMessages = messages.map(message => {
            if (message.id === messageId) {
                return { ...message, isReplying: !message.isReplying };
            } else {
                return { ...message, isReplying: false };
            }
        });
        setMessages(updatedMessages);
    };

    const handlePostReply = (parentId) => () => {
        const replyText = prompt('Enter your reply:');
        if (replyText !== null && replyText !== '') {
            const updatedMessages = messages.map(message => {
                if (message.id === parentId) {
                    const newReply = { id: message.replies.length + 1, user: 'Professor', text: replyText, isProfessor: true };
                    return { ...message, replies: [...message.replies, newReply], isReplying: false };
                }
                return message;
            });
            setMessages(updatedMessages);
        }
    };

    return (
        <Container maxWidth="md">
            <List>
                {messages.map((message, index) => (
                    <div key={index}>
                        <ListItem>
                            <Avatar>{message.user.charAt(0)}</Avatar>
                            <div>
                                <Typography>{message.user}</Typography>
                                <Typography>{message.text}</Typography>
                                {message.isProfessor && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleReply(message.id)}
                                    >
                                        {message.isReplying ? 'Cancel Reply' : 'Reply'}
                                    </Button>
                                )}
                                {message.isReplying && (
                                    <div>
                                        <TextField
                                            variant="outlined"
                                            label="Type your reply"
                                            fullWidth
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handlePostReply(message.id)();
                                                }
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handlePostReply(message.id)}
                                        >
                                            Post Reply
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </ListItem>
                        {message.replies.map((reply, replyIndex) => (
                            <div key={replyIndex}>
                                <ListItem>
                                    <Avatar>{reply.user.charAt(0)}</Avatar>
                                    <div>
                                        <Typography>{reply.user}</Typography>
                                        <Typography>{reply.text}</Typography>
                                        {reply.isProfessor && <Typography>Professor</Typography>}
                                    </div>
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                        <Divider />
                    </div>
                ))}
            </List>
            <div>
                <TextField
                    variant="outlined"
                    label="Type your message"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </div>
        </Container>
    );
};

export default ChatBox;

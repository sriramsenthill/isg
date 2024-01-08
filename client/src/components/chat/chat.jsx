import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // ... (existing styles)
  

    sendButton: {
        marginLeft: theme.spacing(2),
        alignSelf: "flex-end",
        backgroundColor: "#32ab46",
        color: "white",
        "&:hover": {
          backgroundColor: "#2c7f39",
        },
      },
      messageText: {
        marginBottom: theme.spacing(1),
      },
      replyText: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(1),
      },
      replyDivider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      messageDivider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    }));


const ChatBox = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Student",
      text: "What is ISG?",
      isProfessor: true,
      replies: [],
      isReplying: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const newMessageObj = {
      id: messages.length + 1,
      user: "Student",
      text: newMessage,
      isProfessor: false,
      replies: [],
      isReplying: false,
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  const handleReply = (messageId) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId
        ? { ...message, isReplying: !message.isReplying }
        : { ...message, isReplying: false }
    );
    setMessages(updatedMessages);
  };

  const handlePostReply = (parentId) => () => {
    const replyText = prompt("Enter your reply:");
    if (replyText !== null && replyText !== "") {
      const updatedMessages = messages.map((message) =>
        message.id === parentId
          ? {
              ...message,
              replies: [
                ...message.replies,
                {
                  id: message.replies.length + 1,
                  user: "Professor",
                  text: replyText,
                  isProfessor: true,
                },
              ],
              isReplying: false,
            }
          : message
      );
      setMessages(updatedMessages);
    }
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <Container style={{ backgroundColor: "white" }} maxWidth="md">
          <Box bgcolor="white" p={2}>
            {messages.map((message, index) => (
              <Box key={index} mb={2}>
                <Box display="flex" alignItems="flex-start">
                  <Avatar className={classes.avatar}>{message.user.charAt(0)}</Avatar>
                  <Box flexGrow={1} ml={2}>
                    <Typography variant="subtitle1" className={classes.messageText}>
                      {message.user}
                    </Typography>
                    <Typography className={classes.messageText}>{message.text}</Typography>
                    <br/>
                    {message.isProfessor && (
                      <Button
                        variant="outlined"
                        onClick={() => handleReply(message.id)}
                        className={classes.sendButton}
                      >
                        {message.isReplying ? "Cancel Reply" : "Reply"}
                      </Button>
                    )}
                    <br/>
                    {message.isReplying && (
                      <Box mt={2}>
                        <TextField
                          variant="outlined"
                          label="Type your reply"
                          fullWidth
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handlePostReply(message.id)();
                            }
                          }}
                          className={classes.replyText}
                        />
                        <br/>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handlePostReply(message.id)}
                        >
                          Post Reply
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
                <br/>
                {message.replies.map((reply, replyIndex) => (
                  <Box key={replyIndex} mt={2} ml={4}>
                    <Box display="flex" alignItems="flex-start">
                      <Avatar className={classes.replyAvatar}>{reply.user.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="subtitle1" className={classes.replyText}>
                          {reply.user}
                        </Typography>
                        <Typography className={classes.replyText}>{reply.text}</Typography>
                        {reply.isProfessor && (
                          <Typography variant="subtitle2" className={classes.replyText}>
                            Professor
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Divider className={classes.replyDivider} />
                  </Box>
                ))}
                <Divider className={classes.messageDivider} />
              </Box>
            ))}
          </Box>
          <br/>
          <Box mt={2} display="flex">
            <TextField
              label="Type your message"
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={handleSendMessage}
              className={classes.sendButton}
            >
              Send
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
};


export default ChatBox;

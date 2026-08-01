"use client";

import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

const initialChats = [
  {
    id: 1,
    name: "Samantha William",
    avatar: "SW",
    status: "Online",
    lastMessage: "Hey! How is the project going?",
    time: "10:32 AM",
    unread: 2,
    messages: [
      {
        id: 1,
        text: "Hey! How is the project going?",
        time: "10:30 AM",
        sender: "them",
      },
      {
        id: 2,
        text: "It's going really well. We are almost finished.",
        time: "10:31 AM",
        sender: "me",
      },
      {
        id: 3,
        text: "That's great! Let me know if you need any help.",
        time: "10:32 AM",
        sender: "them",
      },
    ],
  },
  {
    id: 2,
    name: "Tony Soap",
    avatar: "TS",
    status: "Online",
    lastMessage: "I will send the files today.",
    time: "09:45 AM",
    unread: 1,
    messages: [
      {
        id: 1,
        text: "I will send the files today.",
        time: "09:45 AM",
        sender: "them",
      },
    ],
  },
  {
    id: 3,
    name: "Karen Hope",
    avatar: "KH",
    status: "Offline",
    lastMessage: "Thanks for your help!",
    time: "Yesterday",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Thanks for your help!",
        time: "Yesterday",
        sender: "them",
      },
    ],
  },
  {
    id: 4,
    name: "Jordan Nico",
    avatar: "JN",
    status: "Online",
    lastMessage: "Let's discuss this tomorrow.",
    time: "Yesterday",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Let's discuss this tomorrow.",
        time: "Yesterday",
        sender: "them",
      },
    ],
  },
  {
    id: 5,
    name: "Kevin Ard",
    avatar: "KA",
    status: "Offline",
    lastMessage: "The design looks perfect.",
    time: "Monday",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "The design looks perfect.",
        time: "Monday",
        sender: "them",
      },
    ],
  },
];

export default function MessagesPage() {
  const [chats, setChats] = useState(initialChats);

  const [selectedChatId, setSelectedChatId] =
    useState(1);

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");

  const selectedChat = chats.find(
    (chat) => chat.id === selectedChatId
  );

  const filteredChats = chats.filter((chat) =>
    chat.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      time: "Just now",
      sender: "me",
    };

    setChats((oldChats) =>
      oldChats.map((chat) => {

        if (chat.id === selectedChatId) {

          return {
            ...chat,

            lastMessage: message,

            time: "Just now",

            messages: [
              ...chat.messages,
              newMessage,
            ],
          };

        }

        return chat;

      })
    );

    setMessage("");
  };

  return (
    <AdminLayout>

      <div className="messages-page">

        {/* PAGE HEADER */}

        <div className="messages-page-header">

          <div>

            <h1>
              Messages
            </h1>

            <p>
              Chat with your team members
            </p>

          </div>

          <button className="new-message-button">
            + New Message
          </button>

        </div>


        {/* CHAT CONTAINER */}

        <div className="messages-container">

          {/* CHAT SIDEBAR */}

          <div className="chat-sidebar">

            <div className="chat-sidebar-header">

              <h2>
                Conversations
              </h2>

              <span>
                {chats.length}
              </span>

            </div>


            {/* SEARCH */}

            <div className="chat-search">

              <span>
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search messages..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>


            {/* CHAT LIST */}

            <div className="chat-list">

              {filteredChats.map((chat) => (

                <div
                  className={`chat-list-item ${
                    selectedChatId === chat.id
                      ? "active"
                      : ""
                  }`}
                  key={chat.id}
                  onClick={() =>
                    setSelectedChatId(chat.id)
                  }
                >

                  <div className="chat-avatar">

                    {chat.avatar}

                    {chat.status === "Online" && (
                      <span className="online-dot"></span>
                    )}

                  </div>


                  <div className="chat-preview">

                    <div className="chat-name-row">

                      <strong>
                        {chat.name}
                      </strong>

                      <small>
                        {chat.time}
                      </small>

                    </div>

                    <div className="chat-message-row">

                      <p>
                        {chat.lastMessage}
                      </p>

                      {chat.unread > 0 && (

                        <span className="unread-count">
                          {chat.unread}
                        </span>

                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* CHAT AREA */}

          <div className="chat-area">

            {/* CHAT HEADER */}

            <div className="chat-header">

              <div className="chat-user-info">

                <div className="chat-avatar large">

                  {selectedChat.avatar}

                  {selectedChat.status === "Online" && (
                    <span className="online-dot"></span>
                  )}

                </div>

                <div>

                  <h3>
                    {selectedChat.name}
                  </h3>

                  <p>
                    {selectedChat.status}
                  </p>

                </div>

              </div>


              <div className="chat-header-actions">

                <button>
                  ☎
                </button>

                <button>
                  ◉
                </button>

                <button>
                  •••
                </button>

              </div>

            </div>


            {/* MESSAGES */}

            <div className="chat-messages">

              <div className="chat-date">
                Today
              </div>

              {selectedChat.messages.map(
                (msg) => (

                  <div
                    className={`message-row ${
                      msg.sender === "me"
                        ? "my-message"
                        : "their-message"
                    }`}
                    key={msg.id}
                  >

                    <div className="message-bubble">

                      <p>
                        {msg.text}
                      </p>

                      <span>
                        {msg.time}
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>


            {/* MESSAGE INPUT */}

            <div className="message-input-area">

              <button>
                +
              </button>

              <button>
                😊
              </button>

              <input
                type="text"
                placeholder="Write a message..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    sendMessage();
                  }

                }}
              />

              <button
                className="send-message-button"
                onClick={sendMessage}
              >
                ➤
              </button>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}
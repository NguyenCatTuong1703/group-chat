import React from "react";
import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { MdInsertEmoticon } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import "./GroupChat.scss";
import EvanScott from "assets/images/evan-scott.jpg";
import KateJohnson from "assets/images/kate-johnson.jpg";

export default function GroupChat() {
  const [messages] = useState([
    {
      name: "Kate Johnson",
      text: "Recently I saw properties in a great location that I did not pay attention to before",
      avatar: KateJohnson,
      hours: 11,
      minutes: 27,
    },
    {
      name: "Evan Scott",
      text: "Ooo, why don't you say something more",
      avatar: EvanScott,
      hours: 11,
      minutes: 27,
    },
    {
      name: "Evan Scott",
      text: "@Robert?",
      avatar: EvanScott,
      hours: 11,
      minutes: 27,
    },
    {
      name: "Evan Scott",
      text: "Robert, don't be like that and say something more :)",
      avatar: EvanScott,
      hours: 11,
      minutes: 27,
    },
  ]);

  return (
    <div className="group-chat">
      <nav className="navbar">
        <h3 className="navbar-brand">Group Chat</h3>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-nav__nav-item active">Messages</li>
            <li className="navbar-nav__nav-item">Participants</li>
          </ul>
        </div>
      </nav>

      <div className="message">
        {messages.length > 0 ? (
          messages.map((message, index) => {
            return (
              <div className="message-content">
                <img
                  src={message.avatar}
                  alt="EvanScott"
                  className="message-avatar"
                />
                <div className="message-detail">
                  <span className="message-detail__time">
                    {message.name +
                      ", " +
                      message.hours +
                      ":" +
                      message.minutes}
                  </span>
                  <p className="message-detail__text">{message.text}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>error</h1>
        )}
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Write your message..."
          className="input__txt"
        />
        <MdInsertEmoticon className="input__emote" />
        <BsLink45Deg className="input__link" />
        <button className="input__submit">
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
}

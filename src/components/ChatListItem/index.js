import React from "react";
import "./styles.css";

function ChatListItem({onClick, active, data}) {
  return (
    <>
      <div 
          className={`chatListItem ${active?'active':''}`}
          onClick={onClick}
      >
        <img
          className="chatListItem--avatar"          
          src={data.avatar}
          alt="usuario"
        />
        <div className="chatListItem--lines">
          <div className="chatListItem--line">
            <div className="chatListItem--name">{data.userName}</div>
            <div className="chatListItem--date">{data.time}</div>
          </div>
          <div className="chatListItem--line">
            <div className="chatListItem--lastMsg">
              <p>{data.message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatListItem;

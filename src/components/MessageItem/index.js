import React from "react";

import "./styles.css";

function MessageItem({data, user}) {
  return (
    <>
      <div 
        className="messageLine"                
      >        
        <div 
          className="messageItem"          
        >
          <div className="messageText">{data.body} - autor: {data.author} - user id: {user.id}</div>
          <div className="messageDate">{data.time}</div>
        </div>
      </div>
    </>
  );
}

export default MessageItem;

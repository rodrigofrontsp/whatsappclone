import React, {useState, useEffect} from "react";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'

import "./App.css";

function App() {

  const [chatlist, setChatlist] = useState([
    {chatId: 1, userName: 'Rodrigo Gonçalves', avatar: 'https://www.blexar.com/avatar.png', message: 'If debugging is the process of removing software bugs', time:'17:53'},
    {chatId: 2, userName: 'Fernanda Barbosa', avatar: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png', message: 'Godfather ipsum dolor sit amet. This one time', time:'22:05'},
    {chatId: 3, userName: 'Katia Alves', avatar: 'https://www.tm-town.com/assets/default_female600x600-3702af30bd630e7b0fa62af75cd2e67c.png', message: 'Execute core competencies so that as an end result', time:'09:14'},
    {chatId: 4, userName: 'Marcela de Faria', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png', message: 'Special cloth alert. Always remember in the jungle there', time:'05:15'}
  ]);

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://www.blexar.com/avatar.png',
    name: 'Rodrigo Gonçalves'

  })  

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src={user.avatar}
            alt={user.name}
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key)=>(
            <ChatListItem 
            key={key} 
            data={item}
            active={activeChat.chatId === chatlist[key].chatId}
            onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>

      <div className="contentarea">
            {activeChat.chatId !== undefined &&
              <ChatWindow                
                user={user}
              />
            }
            {activeChat.chatId === undefined &&
              <ChatIntro/>
            }                    
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import MessageItem from '../../components/MessageItem'

import EmojiPicker from 'emoji-picker-react'
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoodIcon from "@material-ui/icons/Mood";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

import "./styles.css";

function ChatWindow(user) {

  let recognition = null;  
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)

  const [list, setList] = useState([
    {author:1234, body:'Mensagem de Rodrigo 01', time: '08:24'},
    {author:1234, body:'Mensagem de Rodrigo 02', time: '09:32'},
    {author:456, body:'Mensagem de Outro Usuario', time: '09:12'}
  ])

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }  

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }
  
  const handleMicClick = () => {
    if(recognition !== null){

      recognition.lang = 'pt-BR';

      recognition.onstart = () => {
        setListening(true);
      }

      recognition.onend = () => {
        setListening(false);
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();

    }
  }

  const handleSendClick = () => {
    
  }    

  return (
    <>
      <div className="chatWindow">
        <div className="chatWindow--header">
          <div className="chatWindow--headerinfo">
            <img
              className="chatWindow--avatar"
              src="https://www.blexar.com/avatar.png"
            />
            <div className="chatWindow--name">Rodrigo Gonçalves</div>
          </div>

          <div className="chatWindow--headerbuttons">
            <div className="chatWindow--btn">
              <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon fontSize="small" style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <MoreVertIcon fontSize="small" style={{ color: "#919191" }} />
            </div>
          </div>
        </div>

        <div className="chatWindow--body">
          {list.map((item,key)=>(
            <MessageItem
              key={key}
              data={item}
              user={user}
            />
          ))}
        </div>

        <div 
            className="chatWindow--emojiarea" 
            style={{height: emojiOpen ? '200px' : '0px'}}
        >          
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableSkinTonePicker          
          />          
        </div>
        
        <div className="chatWindow--footer">
          <div className="chatWindow--pre">

            <div 
              className="chatWindow--btn"
              onClick={handleCloseEmoji}
              style={{width: emojiOpen ? '40px': '0'}}
              >
              <CloseIcon fontSize="small" style={{ color: "#919191" }} />
            </div>

            <div 
              className="chatWindow--btn"
              onClick={handleOpenEmoji}
              >
              <MoodIcon fontSize="small" style={{color: emojiOpen ? '#009688' : '#919191'}} />
            </div>

          </div>

          <div className="chatWindow--inputarea">
            <input
              className="chatWindow--input"
              type="text"
              placeholder="Digite uma mensagem"
              value={text}
              onChange={e=>setText(e.target.value)}
            />
          </div>

          <div className="chatWindow--pos">
            {text === '' &&
              <div 
                className="chatWindow--btn"
                onClick={handleMicClick}
              >
                <MicIcon style={{ color: listening ? '#126ECE' : '#919191'}} />
              </div>
            }
            {text !== '' &&
              <div 
                className="chatWindow--btn"
                onClick={handleSendClick}
              >
                <SendIcon fontSize="small" style={{ color: '#919191'}} />
            </div>
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default ChatWindow;

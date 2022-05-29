import React from 'react'

import ChatHeader from '../ChatHeader/ChatHeader';
import MatchesDisplay from '../MatchesDisplay/MatchesDisplay';
import ChatDisplay from '../ChatDisplay/ChatDisplay';

const ChatContainer = ({ user }) => {

  return (
    <div className="chatContainer">
      <ChatHeader user = {user}/> 

      <div>
        <button className='chatContainer__btn--option'>Matches</button>
        <button className='chatContainer__btn--option'>Chats</button>
      </div>

      <MatchesDisplay matches={user.matches}/>

      <ChatDisplay/>

    </div>
  )
}

export default ChatContainer;

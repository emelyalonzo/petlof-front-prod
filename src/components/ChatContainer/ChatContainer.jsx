import React from 'react'

import ChatHeader from '../ChatHeader/ChatHeader';
import MatchesDisplay from '../MatchesDisplay/MatchesDisplay';
import ChatDisplay from '../ChatDisplay/ChatDisplay';


export default function ChatContainer() {
  return (
    <div className="chatContainer">
      <ChatHeader/> 

      <div>
        <button className='chatContainer__btn--option'>Matches</button>
        <button className='chatContainer__btn--option'>Chats</button>
      </div>

      <MatchesDisplay/>

      <ChatDisplay/>

    </div>
  )
}

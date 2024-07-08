import React from 'react';
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
        <div>
        <Avatar src="https://qph.cf2.quoracdn.net/main-thumb-24259159-200-xaojcorsivmiibxsvqatfaekmnigzcvl.jpeg" size={25} round={true} />
                            
        </div>
        <div className='flex items-center'>
            <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
            <p className='ml-2 py-2 text-sm'>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage
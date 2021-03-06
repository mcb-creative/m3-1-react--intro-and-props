import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import ChatMessage from './ChatMessage';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <div className='wrapper'>
      <Header
      currentUser={props.currentUser}
      users={props.conversation.participants} />
      <ChatStream
      messages={props.conversation.messages}
      currentUser={props.currentUser} />
      <Footer />
    </div>
  );
};

export default App;

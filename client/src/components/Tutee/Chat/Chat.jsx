import React from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';

const Chat = (props) => {
  let user = JSON.parse(localStorage.getItem('user'));

  function createDirectChat(creds) {
    getOrCreateChat(creds, { is_direct_chat: true, usernames: [props.chatUsername] }, () => setUsername(''));
  }

  return <ChatEngine renderNewChatForm={(creds) => createDirectChat(creds)} height="90vh" publicKey={'d0021a06-6b27-4aeb-8947-e1098463a913'} userName={user?.result._id} userSecret={user?.result.password} />;
};

export default Chat;

{
  /* <ChatEngine
height="100vh"
projectID={projectID}
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
/> */
}

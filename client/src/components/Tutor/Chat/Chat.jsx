import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const Chat = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user.result._id);
  console.log(user.result.password);
  return <ChatEngine height="90vh" publicKey={'d0021a06-6b27-4aeb-8947-e1098463a913'} userName={user?.result._id} userSecret={user?.result.password} />;
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

import { useEffect } from 'react';
import { createConnection } from './chat';

const ChatRoom = () => {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    }
  }, []);

  return (
    <>
      <h1>欢迎来到聊天室！</h1>
    </>
  )
}

export default ChatRoom;
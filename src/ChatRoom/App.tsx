import { useEffect } from "react";
import { createConnection } from './chat';

const ChatRoom = () => {

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <>
      <h1>欢迎前来聊天</h1>
    </>
  )
}

export default ChatRoom;
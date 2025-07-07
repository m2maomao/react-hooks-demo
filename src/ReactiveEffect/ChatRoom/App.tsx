import { useState, useEffect } from "react";
import createConnection from "./chat";

const serverUrl = 'https://localhost:1234';
 
const ChatRoom = ({ roomId }: {roomId: string}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection({
      roomId,
      serverUrl
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return (
    <>
      <h1>欢迎来到{roomId} 聊天室</h1>
      <input value={ message } onChange={e => setMessage(e.target.value)} />
    </>
  );
}

const App = () => {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        选择聊天室：
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  )
}

export default App;
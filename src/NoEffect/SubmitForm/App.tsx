import { useState } from 'react';

const sendMessage = (message: string) => {
  console.log('发送的消息：', message);
}

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <>
        <h1>感谢使用我们的服务！</h1>
        <button onClick={() => {
          setMessage('');
          setShowForm(true);
        }}>
          打开聊天
        </button>
      </>
    )
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <textarea placeholder='消息' value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type='submit' disabled={message === ''}>发送</button>
    </form>
    </>
  )
}

export default Form;
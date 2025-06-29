import { useState } from "react";

interface MyButtonProps {
  title: string;
  disabled?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: unknown }
  | { status: 'error', error: Error }

const MyButton = ({ title, disabled }: MyButtonProps) => {
  return <button disabled={disabled}>{title}</button>
}

const MyApp = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>('idle');
  const [requestState, setRequestState] = useState<RequestState>({status: 'idle'})
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      <MyButton title='我是一个按钮' disabled={true} />
    </div>
  )
}


export default MyApp;
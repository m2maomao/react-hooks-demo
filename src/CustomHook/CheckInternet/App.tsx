import useOnline from './useOnline';
import SaveButton from './Btn';

const StatusBar = () => {
  const isOnline = useOnline();

  return (
    <>
      <h1>{isOnline ? '✅ Online' : '❎ Disconnected'}</h1>
      <SaveButton />
    </>
  )
}

export default StatusBar;
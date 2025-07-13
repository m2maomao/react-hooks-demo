import useOnline from './useOnline';

const SaveButton = () => {
  const isOnline = useOnline();

  return (
    <button disabled={!isOnline}>{isOnline ? 'save progress' : 'Reconnecting...'}</button>
  )
}

export default SaveButton;
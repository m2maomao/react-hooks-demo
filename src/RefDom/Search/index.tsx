import { useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInupt';

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log('click');
    inputRef.current?.focus();
  }
  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  )
}

export default App;
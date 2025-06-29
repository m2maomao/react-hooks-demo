interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button onClick={onClick}>搜索</button>
  )
}

export default SearchButton;
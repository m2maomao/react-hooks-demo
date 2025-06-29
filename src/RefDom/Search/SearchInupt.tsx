import { forwardRef } from "react";

const SearchInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <>
      <input type="text" placeholder="找什么呢?" ref={ref} />
    </>
  )
})

export default SearchInput;
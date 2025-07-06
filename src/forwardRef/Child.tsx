import { forwardRef } from "react";

const Child = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  )
})

export default Child;
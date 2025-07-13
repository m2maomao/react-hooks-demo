import { useState } from "react";

const useChangeName = (initialValue: string | undefined) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return {
    value: value,
    onChange: handleChange
  }
}

export {
  useChangeName
};
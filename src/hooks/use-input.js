import { useState } from "react";

// 재사용 가능한 custom hook 사용
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChangeInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return [value, onChangeInput];
};

export default useInput;

import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const availableData = localStorage.getItem(key);

    return availableData ? JSON.parse(availableData) : defaultValue;
  });

  const setValueInLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  return [value, setValueInLocalStorage];
};

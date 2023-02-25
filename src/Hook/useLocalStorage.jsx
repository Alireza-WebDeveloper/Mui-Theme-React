import { useState, useEffect } from 'react';

const getDataOfLocalStorage = (key, defaultValue) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) return defaultValue;
  return data;
};

const useLocalStorage = ({ key, defaultValue }) => {
  const [data, setData] = useState(getDataOfLocalStorage(key, defaultValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  });
  return { data, setData };
};

export default useLocalStorage;

import { useEffect, useState } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
  const [value,setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if(jsonValue){
      return JSON.parse(jsonValue);
    }
    if(typeof initialValue == 'function' ){
      return (initialValue as () => T )();
    }
    return initialValue as T;
  });
 

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
import React from 'react'
import { useState,useEffect } from 'react'

export default function Counter2() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 8000);
  });
  return (
    <div>
      <h1>I've rendered {count} times!</h1>;
    </div>
  )
}

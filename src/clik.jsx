import React, { useState } from "react";



const Click = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>clikme</button>
      <p> {count}</p>
    </div>
  )
}
export default Click;
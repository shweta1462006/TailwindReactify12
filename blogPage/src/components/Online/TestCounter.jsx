import React, { useState } from 'react'

export default function TestCounter() {
    // let counter = 10;
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1)
        localStorage.setItem("Counter:",counter)
        console.log(counter)

    }
    return (
        <div style={{ width: '60%', height: '400px', backgroundColor: 'palegoldenrod', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, margin: 'auto' }}>
            <label htmlFor="">Counter</label>
            <input type="text" value={counter} />
            <button onClick={increment}>+</button>
        </div>
    )
}

import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0)
    
    return (
        <div className='p-5 border-2 border-blue-500 m-5 rounded-xl'>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

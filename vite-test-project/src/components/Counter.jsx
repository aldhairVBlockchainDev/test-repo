import {useState} from 'react';

const Counter = ({initialValue, darkMode}) => {
    const [count, setCount] = useState(initialValue)

    return (
        <div className="card">
            <h1>Counter</h1>
            <div>
                <button className={darkMode ? "dark-button" : 'light-button'} onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
                <button className={darkMode ? "dark-button" : 'light-button'} onClick={() => setCount(initialValue)}>
                    Reset
                </button>
                <button className={darkMode ? "dark-button" : 'light-button'} onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
            </div>
        
            <h1>{count}</h1>
        </div>
    )
}

export default Counter;
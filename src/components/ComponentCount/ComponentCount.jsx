import {useState} from "react";

export const ComponentCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1)
    };

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
            <hr/>
        </div>
    )
}
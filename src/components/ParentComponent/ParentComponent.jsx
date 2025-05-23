import {useState} from "react";
import {ChildComponent} from "../ChildComponent/ChildComponent.jsx";
import {SiblingComponent} from "../SiblingComponent/SiblingComponent.jsx";

export const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    const deleteCount = () => {
        setCount(0);
    };

    const randomValue = () => {
        setCount(Math.floor((Math.random() * 10) + 1));
    }

    const decrement = () => {
        if (count > 0) setCount(prev => prev - 1);
    };

    const name = "Ann";

    return (
        <div>
            <button onClick={increment}>Увеличить</button>
            <button onClick={deleteCount}>Сбросить</button>
            <button onClick={randomValue}>Случайное значение</button>
            <button onClick={decrement}>Уменьшить</button>
            <ChildComponent name = {name} count = {count}/>
            <SiblingComponent />
        </div>
    )
}
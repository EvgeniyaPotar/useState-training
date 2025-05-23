import {useState} from "react";

export const ComponentChangeColor = () => {
    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor(color === 'blue'  ? 'green' : 'blue');
    }

    const colorText = {
        color :color
    }

    return (
        <div>
            <button onClick={changeColor}>Изменить цвет</button>
            <p style={colorText}>Текст синий или зеленый</p>
            <hr/>
        </div>
    )
}
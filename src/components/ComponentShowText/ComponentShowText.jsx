import {useState} from "react";

export const ComponentShowText = () => {
    const [showText, setShowText] = useState(false);

    const clickShow = () => {
        setShowText((showText) => !showText)
    }

    return (
        <div>
            <button onClick={clickShow}>Показать/скрыть текст</button>
            {showText && <p>Этот текст может быть скрыт или показан</p>}
            <hr/>
        </div>
    )
}

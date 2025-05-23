import {useState} from "react";

export const SiblingComponent = () => {
    const [newText, setNewText] = useState('Начальный текст');

    const changeText = () => {
        setNewText('REDEV');
    }
    return(
        <div>
            <p>Текущий текст: {newText} </p>
            <button onClick={changeText}>Изменить текст</button>
        </div>

    )
}
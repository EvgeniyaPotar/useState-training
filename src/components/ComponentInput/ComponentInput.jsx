import {useState} from "react";

export const ComponentInput = () => {
    const [name, setName] = useState('');

    const changeName = (e) => {
        setName( e.target.value);
    }

    return(
        <div>
            <label>
                Введите имя:
                <input type="text" value={name} onInput={changeName}/>
            </label>
            <p>Имя: {name}</p>
            <hr/>
        </div>
    )
}
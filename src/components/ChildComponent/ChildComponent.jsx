export const ChildComponent = ({name, count}) => {
    return(
        <div>
           <p>Привет, {name}! Текущий счетчик: {count}</p>
        </div>
    )
}
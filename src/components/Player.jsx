import {useState} from "react";

export function Player({name, symbol, active, setPlayers}) {
    const [isEditing, setIsEditing] = useState(false)
    const [currentName, setCurrentName] = useState(name)

    function updateName(event) {
        let name = event.target.value;
        setCurrentName(name)
    }

    const input = <input type='text' defaultValue={currentName} onChange={updateName} ></input>

    const activeClass = active ? 'active' : undefined

    function onEditClick() {
        setIsEditing((isEditing) => !isEditing);

        if (isEditing) {
            setPlayers((currentPlayers) => {
                const newPlayers = {...currentPlayers}
                newPlayers[symbol] = currentName
                return newPlayers
            })
        }
    }

    return <li className={activeClass}>
        <span className='player'>
            {
                isEditing ?
                input :
                <span className='player-name'>{currentName}</span>
            }
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={onEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>;
}
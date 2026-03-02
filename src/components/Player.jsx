import {useState} from "react";

export function Player({name, symbol, active}) {
    const [isEditing, setIsEditing] = useState(false)
    const [currentName, setCurrentName] = useState(name)

    function updateName(event) {
        setCurrentName(event.target.value)
    }

    const input = <input type='text' defaultValue={currentName} onChange={updateName} ></input>

    const activeClass = active ? 'active' : undefined

    return <li className={activeClass}>
        <span className='player'>
            {
                isEditing ?
                input :
                <span className='player-name'>{currentName}</span>
            }
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={() => setIsEditing((wasEditing) => !wasEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>;
}
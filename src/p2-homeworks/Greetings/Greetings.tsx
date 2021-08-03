import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function Greetings() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user]) // need to fix
    }

    return (
        <div>
            <hr/>
            <div style={{fontSize: "20px"}}>Greetings:</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </div>
    )
}

export default Greetings

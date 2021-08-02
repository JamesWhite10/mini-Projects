import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function Greetings() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        setUsers([]) // need to fix
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

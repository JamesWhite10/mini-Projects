import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://tipik.ru/wp-content/uploads/2018/12/pokemon_pikachu_18961.jpg',
    name: 'Max',
    message: 'Выучила React?)))))',
    time: '22:00',
}

const messageItem = {
    avatar: 'https://cdn62.zvuk.com/pic?type=artist&id=99438391&size=600x600&ext=jpg',
    name: 'Emily',
    message: 'Учу JavaScript!',
    time: '17.26'
}

function Dialogs() {
    return (
        <div>
               <div style={{fontSize: "20px"}}>Dialogs:</div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <AlternativeMessage
                avatar={messageItem.avatar}
                name={messageItem.name}
                message={messageItem.message}
                time={messageItem.time}
            />
        </div>
    )
}

export default Dialogs

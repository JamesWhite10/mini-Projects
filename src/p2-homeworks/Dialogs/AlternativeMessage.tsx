import React from 'react'
import classes from "./Message.module.css";

export type PropsAltMesType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: PropsAltMesType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt={'avatar'} className={classes.avatar}/>
            <div className={classes.angle}/>
            <div className={classes.content}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage

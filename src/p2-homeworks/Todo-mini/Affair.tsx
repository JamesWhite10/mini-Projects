import classes from './Affairs.module.css';
import React from 'react'
import {AffairType} from "./Todo-mini";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (id: number) =>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const priorityClass = classes.item + ' ' + classes[props.affair.priority]

    return (
        <div className={classes.affair}>
            <div className={classes.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={classes.item + ' ' +classes.button}>X</button>
        </div>
    )
}

export default Affair;

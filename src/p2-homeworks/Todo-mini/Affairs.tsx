import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './Todo-mini'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) =>void
    deleteAffairCallback: (id: number) =>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")} // need to fix
    const setHigh = () => {props.setFilter("High")}
    const setMiddle = () => {props.setFilter("Middle")}
    const setLow = () => {props.setFilter("Low")}

    const onAll = classes.button + ' ' + (props.filter === 'all' ? classes.active : ' ')
    const onHigh = classes.button + ' ' + (props.filter === 'High' ? classes.active : ' ')
    const onMiddle = classes.button + ' ' + (props.filter === 'Middle' ? classes.active : ' ')
    const onLow = classes.button + ' ' + (props.filter === 'Low' ? classes.active : ' ')

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={onAll}>All</button>
            <button onClick={setHigh} className={onHigh}>High</button>
            <button onClick={setMiddle} className={onMiddle}>Middle</button>
            <button onClick={setLow} className={onLow}>Low</button>
        </div>
    )
}

export default Affairs;

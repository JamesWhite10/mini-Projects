import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../HomemadeInpButCheck/common/c2-SuperButton/SuperButton";
import s from "./SortPeople.module.css"

export type PeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: PeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
    {_id: 6, name: "Олег", age: 32},
    {_id: 7, name: "Катя", age: 13},
]

function SortPeople() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map((p) => (
        <div key={p._id} className={s.item}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <hr/>
            <div style={{fontSize: "20px"}}>Sort People:</div>
            {finalPeople}
            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>
        </div>
    );
}

export default SortPeople;

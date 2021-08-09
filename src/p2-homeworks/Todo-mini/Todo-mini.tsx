import React from 'react'
import Affairs from './Affairs'
import {useState} from "react";

// types
export type AffairPriorityType = "High" | "Low" | "Middle"
// need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
let defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'High'},
    {_id: 2, name: 'Anime', priority: 'Low'},
    {_id: 3, name: 'Games', priority: 'Low'},
    {_id: 4, name: 'Work', priority: 'High'},
    {_id: 5, name: 'HTML & CSS', priority: 'Middle'},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)// need to fix мы фильтруем и оставляем только те дела, у которых приоритеты
                                                            //совпадают с пришедшим фильтром(и эта запись короче).
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter(a => a._id !== _id)// need to fix фильтруем все, которые не совпадают с пришедшей айдишкой.
}

function TodoMini() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div style={{fontSize: "20px"}}>Todo-mini:</div>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

        </div>
    )
}

export default TodoMini

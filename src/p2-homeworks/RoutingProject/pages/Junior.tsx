import React from 'react'
import SelectAndRadio from "../../SelectAndRadio/SelectAndRadio";
import SortPeople from "../../SortPeople/SortPeople";
import ClockDate from "../../ClockDate/ClockDate";
import Loading from "../../Loading/Loading";

function Junior() {
    return (
        <div>
            <SelectAndRadio/>
            <SortPeople/>
            <ClockDate/>
            <Loading/>
        </div>
    )
}

export default Junior
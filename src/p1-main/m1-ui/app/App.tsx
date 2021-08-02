import React from 'react'
import s from './App.module.css'
import Dialogs from '../../../p2-homeworks/Dialogs/Dialogs'
import TodoMini from "../../../p2-homeworks/Todo-mini/Todo-mini";
import HW3 from '../../../p2-homeworks/h3/HW3';

function App() {
    return (
        <div className={s.App}>
            <div style={{fontSize: "30px", textAlign: "center"}}>Mini projects.</div>
            <Dialogs/>
            <TodoMini/>
            <HW3/>
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App;

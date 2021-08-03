import React from 'react'
import s from './App.module.css'
import Dialogs from '../../../p2-homeworks/Dialogs/Dialogs'
import TodoMini from "../../../p2-homeworks/Todo-mini/Todo-mini";
import Greetings from '../../../p2-homeworks/Greetings/Greetings';
import HomemadeInpButCheck from '../../../p2-homeworks/h4/HomemadeInpButCheck';

function App() {
    return (
        <div className={s.App}>
            <div style={{fontSize: "30px", textAlign: "center"}}>Mini projects.</div>
            <Dialogs/>
            <TodoMini/>
            <Greetings/>
            <HomemadeInpButCheck/>
            {/*<HW5/>*/}

        </div>
    )
}

export default App;

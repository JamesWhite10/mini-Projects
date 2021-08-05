import React from 'react'
import s from './App.module.css'
import RoutingProject from '../../../p2-homeworks/RoutingProject/RoutingProject';

function App() {
    return (
        <div className={s.App}>
            <div style={{fontSize: "40px", textAlign: "center", color: "white", fontFamily: "Bell MT"}}>
                Mini projects.</div>

            <RoutingProject/>

        </div>
    )
}

export default App;

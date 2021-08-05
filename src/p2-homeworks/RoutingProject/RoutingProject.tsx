import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function RoutingProject() {
    return (
        <div>
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default RoutingProject

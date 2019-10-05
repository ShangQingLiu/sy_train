import * as React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Student from "./Component/Student/Student";
import Home from "./Component/Home/Home";


export default function App() {
    return (
            <div>
                <Switch>
                    <Route path="/Student">
                        <Student/>
                    </Route>
                    <Route path="/Profession">
                        <Student/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
    )
}




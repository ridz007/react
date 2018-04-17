import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Login from './login/Login.js';
import DefectDetails from './defectDetail/DefectDetail.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Provider} from "react-redux";
// import {createStore} from "redux";
//to connect react to redux store add provider in imports

class App extends React.Component {
    render() {
        return (
            <div className="container backGround">
                <Router>
                    <Switch>
                    <Route exact path="/" component = {Login} />
                    <Route path = {"/defectDetails"} component={DefectDetails} />
                </Switch>
                </Router>
            </div>
        )
    }
}

// //creating reducer
// const reducer = (state, action) => {
// switch(action.type){
// case "SETNAME":break;
// }
// return state;
// }

// //creating store
// const store = createStore(reducer, 1
// );

// render(
//     //wrap the app in provider and pass store property in it as prop
//     <Provider store={store}>
// <App/></Provider>, window.document.getElementById('root'));

render(<App/>, window.document.getElementById('root'));
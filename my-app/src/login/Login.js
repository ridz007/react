import React from 'react';
import ReactDOM from 'react-dom';
//import Router from 'react-router-dom';
import { Link } from 'react-router-dom';

import DefectDetails from '../defectDetail/DefectDetail.js'
import './Login.css';
import HeaderComp from '../common/header/Header.js';

class Login extends React.Component {
    constructor(props) {
        super(props);
                //done so that each input field should have value formValues : {}
                this.state = {
                    formValues: {},
                    formVerified : false,
                };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(' this.state  is', this.state);
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let value = event.target.value;
        let name = event.target.name;
        formValues[name] = value;
        this.setState({ formValues });
        console.log('formValues are ' + JSON.stringify(formValues));
    }

    handleSubmit = (user) => {
        // saveUser(user)
        //   .then(() => this.setState(() => ({
        //     formVerified: true
        //   })))
        let formVerified = true;
                this.setState({
            formVerified: formVerified
        })
      }

    //on submit validate the details
    // handleSubmission(event) {
    //     saveUser(event)
    //         .then(() => this.setState(() => ({
    //             formVerified: true
    //         })))
    //     this.setState(() => ({
    //         formVerified: true
    //     }))

    //     console.log('formVerified are '+this.state.formVerified);

    // }

    render() {

        if (this.state.formVerified === true) {
            // <Link to="/defectDetails"/>
            return <Link to='/defectDetails' />

        }
        return (
            <div className="backGround">
                <HeaderComp moduleNm={"Login"} />
                <form>
                    <div className="innerDiv">
                        <div className="row comnPad">
                            <div className="col-sm-4 col-sm-offset-2">
                                <p>Username</p>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" placeholder="Enter Username" name="userName" value={this.state.value} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row comnPad">
                            <div className="col-sm-4 col-sm-offset-2">
                                <p>Password</p>
                            </div>
                            <div className="col-sm-4">
                                <input type="password" placeholder="Password" name="password" value={this.state.value} onChange={this.handleChange} />
                            </div>
                        </div>

                    </div>
                    <div className="text-center">
                    <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Login</button>
                </div>
                </form>

            </div>
        )
    }
}

export default Login;
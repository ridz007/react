import React from 'react';
import './Header.css';
class HeaderComp extends React.Component {

    constructor(props) {
        super(props);

        // this.handleLoginClick = this.handleLoginClick.bind(this);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);

    } 

    // handleLoginClick() {
    //     this.setState({ isLoggedIn: true });
    //     // this.props.history.push('/home');
    // }

    // handleLogoutClick() {
    //     this.setState({ isLoggedIn: false });
    // }

    render() {

        return (
            <div>
                <h1 className="headerColor text-center"> Defect Tracker</h1>
                <div className="text-center loginBck">
                    <span className="col-sm-8 col-sm-offset-2">
                        <Greetings screenName={this.props.moduleNm}/>
                    </span>
                </div>
            </div>
        )
    }
}
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick} >
//         <Link to="/">
//         Logout
//         </Link>
//       </button>
     
//     );
// }


function Greetings(param) {
    return param.screenName;
}

export default HeaderComp;


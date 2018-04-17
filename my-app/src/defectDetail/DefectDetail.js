import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComp from '../common/header/Header.js';
// import {connect} from 'react-redux';
class DefectDetails extends React.Component {
    render() {
        return (
            <div> 
                <HeaderComp moduleNm={"Defect Details"} /> hello 
            </div>

        )

    }
}

//  NEED USERNAME IN THIS COMPONENT FROM LOGIN COMP
// const mapStateToProps = (state) =>{
// return {
// //set key value pairs to map local properties to  global store properties

// }

// }

// const mapDispatchToProps = (dispatch) =>{
// return {
//     //set key value pairs
//     setName:(name) => {
//         dispatch({
//                 type:"SETNAME",
//                 payload: name
//         });
//     }
// }
// }
//connect connects react js comp with redux store
// export default connect(mapStateToProps, mapDispatchToProps)(DefectDetails);
export default DefectDetails;
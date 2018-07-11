import React from 'react';
import NavContainer from './nav_container';

export default props => {
// console.log("props,", props); 
    return (
        <ul className="nav nav-tabs justify-content-center">
             {props.children}
         </ul> 

    );
}


// export default props => {
//     console.log("props,", props); 
//         return (
//             <ul className="nav nav-tabs justify-content-center">
//                 {props.children[1]}
//                 {props.children[0]}
//              </ul> 
//         );
//     }
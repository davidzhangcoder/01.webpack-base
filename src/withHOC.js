import React from 'react';
import { Form } from 'antd'

import TestClass from './TestClass'

const withHOC = (value1) => (View) => {
    return class Temp extends React.Component {
        render() {
            return <View data={value1 + 'aaa'}></View>;
        }
    }
}

// const withHoc1 = (value1) => {
//     return function (view1) {
//         return class Temp extends React.Component {
//             render() {
//                 return <View data={value1 + 'aaa'}></View>;
//             }
//         }    
//     }
// }
// const tempWithRoc1 = withHOC1("withHoc1")
// tempWithRoc1(Form);

// const Mycomp = withHOC('ok')(TestClass);
// console.log(Mycomp)
export default withHOC;


// const add = (a) => (b) => {
//     console.log( a + b)
// }

// add(2)(3)
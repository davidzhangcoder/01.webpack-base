import React from 'react';

import TestClass from './TestClass'

const withHOC = (value1) => (View) => {
    return class Temp extends React.Component{
        render(){
            return <View data={value1+'aaa'}></View>;
        }
    }
}

// const Mycomp = withHOC('ok')(TestClass);
// console.log(Mycomp)
export default withHOC;


// const add = (a) => (b) => {
//     console.log( a + b)
// }

// add(2)(3)
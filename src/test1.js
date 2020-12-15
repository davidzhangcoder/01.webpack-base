import React from 'react';
import TestClass from './TestClass'
import withHOC from './withHOC'

const Mycomp = withHOC('ok')(TestClass);
console.log(Mycomp)
export default Mycomp;
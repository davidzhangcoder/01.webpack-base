import React from 'react';
import {createStore} from 'redux'

import {comment} from './reduces'

const store = createStore(comment);

export default store;
import React from 'react';

import {ADD_COMMENT} from './action_types'

const defaultComment = {
    data : [
        {"id":"1" , "name":"A", "comment":"good"},
        {"id":"2" , "name":"B", "comment":"better"},
        {"id":"3" , "name":"C", "comment":"best"}
    ]
};

export function comment(state = defaultComment, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const newState = JSON.parse(JSON.stringify(state));
            newState.data.unshift(action.data);
            return newState;
        default:
            return state;
    }
}
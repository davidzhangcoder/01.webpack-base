import React from 'react';
import ReactTypes from 'prop-types';

import CmtItem from '@/components/comment/CmtItem'
import CmtAdd from '@/components/comment/CmtAdd'

import cssobj from '@/css/cmtlist.scss'

console.log(cssobj)

export default class CmtList extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     data : [
        //         {"id":"1" , "name":"A", "comment":"good"},
        //         {"id":"2" , "name":"B", "comment":"better"},
        //         {"id":"3" , "name":"C", "comment":"best"}


        //     ]
        // }
    }

    static propTypes = {
        data: ReactTypes.array.isRequired,
        addComment: ReactTypes.func.isRequired
    }

    render() {
        const container = 
            <div>
                <CmtAdd newID={this.props.data.length} addComment={this.addComment}></CmtAdd>
                <h1 className={cssobj.title}>评论列表</h1>
                {this.props.data.map( (item,i) =><CmtItem {...item} key={i}></CmtItem>)}
            </div>
        return container;
    }

    addComment = (newComment) => {
        // const idValue =this.state.data.length + 1;
        // const newComment = { 
        //                         "id":idValue ,
        //                         "name":this.refs.nameInput.value,
        //                         "comment":this.refs.commentInput.value,
        // };

        //insert new element at the start of the array
        // this.state.data.unshift(newComment);
        // this.setState({data:this.state.data});

        this.props.addComment(newComment);
    }
}
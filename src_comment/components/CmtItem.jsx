import React from 'react';

import cssobj from '../css/cmtlist.scss'

console.log(cssobj)

export default class CmtItem extends React.Component {
    render(){
    return <div className={cssobj.itemTitle}> {this.props.id} - {this.props.name} - {this.props.comment} </div>;
    }
}
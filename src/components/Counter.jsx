import React from 'react';

import ReactTypes, { number } from 'prop-types'

export default class Counter extends React.Component{
    constructor(props) {
        super();
        this.state = {
            value : props.initialValue,
            comment : props.initialComment
        };
    }

    static defaultProps = {
        initialValue : 0 ,
        initialComment : "this is initial Comment"
    };

    static propTypes = {
        initialValue : ReactTypes.number,
        initialComment : ReactTypes.string,
    }

    render() {
        const ui = 
            <div>
                {/* React的事件绑定 */}
                {/* <button onClick={ () => this.doClick() } >点击</button> */}

                {/* 普通JS的事件绑定 */}
                <button id="clickButton" >点击</button>

                <br/>
                the value is {this.state.value}

                <hr/>
                The comment is : {this.state.comment}
                <br/>
                <input type="text" value = {this.state.comment} onChange={this.commentChanged} ref="commentInput" />
            </div>
        return ui;
    }

    componentDidMount() {
        document.getElementById("clickButton").onclick = () => {
            this.setState( {
                value : this.state.value + 1
            } );    
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value % 2 == 0 ? true : false;
    }

    commentChanged = () => {
        this.setState( { comment : this.refs.commentInput.value } );
    }

    doClickFunc = () => {
        this.setState( {
            value : this.state.value + 1
        } );
    }

    doClick = () => {
        this.setState( {
            value : this.state.value + 1
        } );
    }
}
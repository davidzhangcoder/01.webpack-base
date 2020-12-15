import React from 'react';
import ReactTypes from 'prop-types'


export default class CmtAdd extends React.Component {
    constructor(props) {
        super();
        // this.state = {
        //     newID: props.newID,
        // };
    }

    static defaultProps = {
        newID: 0,
    }

    static propTypes = {
        newID: ReactTypes.number,
    }

    render() {
        const ui =
            <div>
                <div>name : <input type="text" id="name" ref="nameInput" /></div>
                <div>comment : <input type="text" id="comment" ref="commentInput" /></div>
                <button onClick={() => { this.buildComment() }}>添加</button>
            </div>;
        return ui;
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.newID + " - " + nextProps.newID);
    }

    buildComment = () => {
        // console.log(this);
        const id = this.props.newID + 1;
        // this.setState({ newID: id })
        const newComment = {
            "id": id,
            "name": this.refs.nameInput.value,
            "comment": this.refs.commentInput.value,
        };
        this.props.addComment(newComment);
    }
}
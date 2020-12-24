import React, { Component } from 'react';

import styles from '@/css/movieitem.scss'

console.log("styles",styles)

class MovieListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ui =
            <div className={styles['movie_list_item']}
                onClick={this.showMovieItemDetail}>
                <img src={this.props.item.images[0]} style={{ width: "140px", height: "200px" }} />
                <h4>{this.props.item.title}</h4>
            </div>
        return ui;
    }

    showMovieItemDetail = () => {
        // console.log("showMovieItemDetail");
        //console.log(this.props);

        // 路由传参 - 第一种方式: params
        // const url = `/movie/detail/${this.props.type}`;
        // // console.log(url);
        // this.props.history.push(url);

        // 路由传参 - 第一种方式: query
        const url = '/movie/detail';
        const query = {type:this.props.type, id:this.props.item._id};
        this.props.history.push( {pathname:url, query: query} );
    }
}

export default MovieListItem;
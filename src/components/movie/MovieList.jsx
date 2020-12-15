import React from 'react';

import MovieListItem from '@/components/movie/MovieListItem'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            page_count: 1,
            total_counts: 1,
            isLoading: true,
            type: ""
        }
    }

    render() {
        console.log("render - " + this.state.isLoading);

        if (this.state.isLoading) {
            const ui = <div>数据加载中...</div>;
            return ui;
        }
        else {
            const ui =
                <div>
                    {
                        this.state.data.map(item =>
                            // <div key={item._id} style={{ border: "1px solid", padding: "10px 10px" }}>
                            //     <img src={item.images[0]} style={{ width: "100px", height: "200px" }} />
                            //     {item.title}
                            // </div>
                            <MovieListItem key={item._id}
                                item={item}
                                history={this.props.history}
                                type={this.state.type}>
                            </MovieListItem>
                        )
                    }
                </div>;
            return ui;
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        console.log("componentWillReceiveProps");

        const type = nextProps.match.params.type;
        this.setState({ isLoading: true, type: type });
        this.loadData(type);
    }

    componentWillMount() {
        // console.log(this.props.match.params.type);
        console.log("componentWillMount");

        const type = this.props.match.params.type;
        this.setState({ isLoading: true, type: type });
        this.loadData(type);
    }

    loadData = (type) => {
        //console.log(this.props.match.params.type);

        //const type = this.props.match.params.type;

        let url = '';

        if (type === 'in_threater') {
            url = "https://gank.io/api/v2/data/category/Girl/type/Girl/page/1/count/10";
        }
        else if (type === 'coming_soon') {
            url = "https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/10";
        }
        else if (type === 'top250') {
            url = "https://gank.io/api/v2/data/category/GanHuo/type/iOS/page/1/count/10";
        }

        fetch(url)
            // fetch("https://jsonplaceholder.typicode.com/photos")
            .then(resp => resp.json())
            .then(data => {
                console.log("fetched data");
                setTimeout(() => {
                    this.setState({ data: data.data, isLoading: false });
                }, 1000);
                // console.log(data.data[1]);
                // this.setState({ data: data.data, isLoading: false });
                // console.log(1);
            })
    }

}
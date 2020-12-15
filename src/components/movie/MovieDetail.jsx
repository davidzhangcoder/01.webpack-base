import React from 'react';
import ReactDom from 'react-dom';
import { useHistory } from 'react-router-dom';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: true
        };
    }

    render() {
        console.log(this.state);
        if (this.state.isLoading) {
            const ui =
                <div>
                    数据加载中...
                </div>;
            return ui;
        }
        else {
            const ui =
                <div>
                    <button onClick={this.goBack}>返回上一页</button>
                    <div>
                        <img src={this.state.data.images[0]} />
                        <p style={{ textIndent: "2em" }}>{this.state.data.desc}</p>
                    </div>
                </div>;
            return ui;
        }
    }

    componentWillMount() {
        // console.log('componentWillMount : ');
        //https://gank.io/api/v2/post/5e722726c33ca5aa22374ea0

        const id = this.props.location.query.id;
        const url = `https://gank.io/api/v2/post/${id}`;
        this.setState({ isLoading: true });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({ data: { ...data.data }, isLoading: false });
            })
    }

    goBack = () => {
        // console.log(this.props.match.params.type);

        // 路由传参 - 第一种方式: params
        // const url = `/movie/${this.props.match.params.type}`;

        // 路由传参 - 第一种方式: query
        // console.log(this.props);
        const url = `/movie/${this.props.location.query.type}`;

        // 使用history来实现跳转
        this.props.history.push(url);
        // this.props.history.go(-1);

        // // 使用useHistory来实现跳转 - 报错hooks只能在function中使用，不能在class中使用
        // const history = useHistory();
        // history.push(url);
    }
}

export default MovieDetail
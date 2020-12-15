import React from 'react'
import { Route,Link,Switch } from 'react-router-dom'

import MovieList from '@/components/movie/MovieList';
import MovieDetail from '@/components/movie/MovieDetail'

export default class MovieComponment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ui =
            <div>
                <div style={{ float: "left", width: "150px", border: "1px solid" }}>
                    <ul>
                        <li><Link to="/movie/in_threater">正在热映</Link></li>
                        <li><Link to="/movie/coming_soon">即将上映</Link></li>
                        <li><Link to="/movie/top250">TOP250</Link></li>
                    </ul>
                </div>
                <div style={{ marginLeft: "151px", border: "1px solid" }}>
                    {/* <MovieList></MovieList> */}
                    <Switch>
                        {/* 路由传参 - 第一种方式: params */}
                        {/* <Route path="/movie/detail/:type" component={MovieDetail}></Route> */}

                        {/* 路由传参 - 第一种方式: query */}
                        <Route path="/movie/detail" component={MovieDetail}></Route>

                        <Route path="/movie/:type" component={MovieList} ></Route>
                    </Switch>
                </div>
            </div>;
        return ui;
    }

}
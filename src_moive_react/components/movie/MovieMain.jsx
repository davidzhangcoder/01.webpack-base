const { createContext } = require("react");

import React from 'react';
import { HashRouter,Route,Link } from 'react-router-dom'

import Home from '@/components/movie/HomeComponment'
import Movie from '@/components/movie/MovieComponment'
import About from '@/components/movie/AboutComponment'

export default class MovieMain extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const ui = 
            <HashRouter>
                <div>
                    <div style={{float:"left", width:"50px"}}><Link to="/home">首页</Link></div>
                    <div style={{float:"left", width:"50px"}}><Link to="/movie">电影</Link></div>
                    <div style={{float:"left", width:"50px"}}><Link to="/about">关于</Link></div>
                </div>

                <div style={{clear:"both"}}>
                    <Route path="/home" component={Home} ></Route>
                    <Route path="/movie" component={Movie} ></Route>
                    <Route path="/about" component={About} ></Route>
                </div>
            </HashRouter>
        return ui;
    }
}
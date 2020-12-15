const { createContext } = require("react");

import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'


import Home from '@/components/movie/HomeComponment'
import Movie from '@/components/movie/MovieComponment'
import About from '@/components/movie/AboutComponment'


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class MovieMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ui =
            <HashRouter>
                {/* <div>
                    <div style={{ float: "left", width: "50px" }}><Link to="/home">首页</Link></div>
                    <div style={{ float: "left", width: "50px" }}><Link to="/movie">电影</Link></div>
                    <div style={{ float: "left", width: "50px" }}><Link to="/about">关于</Link></div>
                </div> */}

                <Layout style={{height:'100%'}}>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{height:'100%'}}>
                        <Route path="/home" component={Home} ></Route>
                        <Route path="/movie" component={Movie} ></Route>
                        <Route path="/about" component={About} ></Route>
                    </Content>

                    <Footer>测试</Footer>
                </Layout>

                {/* <div style={{ clear: "both" }}>
                    <Route path="/home" component={Home} ></Route>
                    <Route path="/movie" component={Movie} ></Route>
                    <Route path="/about" component={About} ></Route>
                </div> */}
            </HashRouter>
        return ui;
    }
}
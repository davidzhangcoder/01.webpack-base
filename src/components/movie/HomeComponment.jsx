import React from 'react'
import { DatePicker } from 'antd'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer, Sider } = Layout;

export default class HomeComponment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ui =
            (
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >

                            <Menu.Item key="1">option1</Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <DatePicker></DatePicker>
                        </Content>
                    </Layout>
                </Layout>
            );


        // <div>
        //     Home
        //     <DatePicker></DatePicker>
        // </div>;
        return ui;
    }
}
import React from 'react'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer, Sider } = Layout;

export default class AboutComponment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ui = 
        (
            <Layout style={{height: '100%'}}>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        About
                    </Content>
                </Layout>
            </Layout>
        );

            // <div>
            //     About
            // </div>;
        return ui;        
    }
}
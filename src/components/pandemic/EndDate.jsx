import React, { Fragment } from 'react'

import styles from '@/css/pandemic.scss'

export default class EndDate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            page: 1,
            page_count: 1,
            total_counts: 1,
            isLoading: true,
            type: ""
        }
        this.contentright = null;
        this.scrollHeight = null;
        this.content = null;
    }

    loadData = () => {
        let url = '';

        url = `https://gank.io/api/v2/data/category/Girl/type/Girl/page/${this.state.page}/count/10`;

        fetch(url)

            .then(resp => resp.json())
            .then(data => {
                console.log("fetched data");
                setTimeout(() => {
                    this.setState({ data: [...this.state.data, ...data.data], isLoading: false },
                        () => {
                            // console.log( "this.scrollHeight: ", this.scrollHeight );
                            // console.log( "this.contentright.scrollHeight", this.contentright.scrollHeight );
                            // this.contentright.scroll( 0,this.scrollHeight );

                            // window.scrollTo( {top:this.scrollHeight, behavior: "smooth"});
                            window.scrollTo(0,this.scrollHeight);
                        });
                }, 1000);
            })
    }

    loadMore = () => {
        // console.log( this.contentright.scrollHeight );
        this.scrollHeight = this.contentright.scrollHeight
        this.setState({ page: this.state.page + 1, isLoading: true }, () => {
            this.loadData();
        })
    }

    testScroll = () => {
        // console.log("testScroll", this.contentright.scrollTop,this.contentright.scrollHeight);
        // console.log("contentright", this.contentright.scrollHeight);
        // console.log("content", this.content.scrollHeight);
        // console.log("window", window.scrollHeight);
        // console.log("document.body", document.body.scrollTop);

        window.scrollTo(0,this.scrollHeight);
    }

    render() {
        if (this.state.isLoading)
            return <div>Loading</div>
        else
            return (
                <Fragment>
                    <div id={styles.content} ref={e => this.content = e}>

                        <div id={styles['content-left']}></div>
                        <div id={styles['content-right']} ref={e => this.contentright = e}>
                            {
                                this.state.data.map((item, index) => {
                                    if (index === 0)
                                        return (
                                            <div key={index} className={styles['content-right-item']}>
                                                {item.desc}
                                                <div id={styles.firstitem}></div>
                                            </div>
                                        )
                                    else if (index === this.state.data.length - 1)
                                        return (
                                            <div key={index} className={styles['content-right-item']}>
                                                {item.desc}
                                                <div id={styles.lastitem}></div>
                                                <button onClick={this.loadMore}>More</button>
                                                <button onClick={this.testScroll}>Scroll</button>
                                            </div>
                                        )
                                    else
                                        return (
                                            <div key={index} className={styles['content-right-item']}>
                                                {item.desc}
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>

                </Fragment>
            )
    }

    componentWillMount() {
        // console.log(this.props.match.params.type);
        console.log("componentWillMount");

        const type = this.props.match.params.type;
        this.setState({ isLoading: true, type: type });
        this.loadData();
    }

    componentDidUpdate() {
        // if (this.contentright) {
        //     // console.log("this.scrollHeight: ", this.scrollHeight);
        //     // console.log("this.contentright.scrollHeight", this.contentright.scrollHeight);
        //     // console.log("window.scrollTop", window.scrollTop);
        //     // this.contentright.scrollTo(0,this.contentright.scrollHeight);

        //     // window.scrollTop=this.contentright.scrollHeight;
        // }
    }

}
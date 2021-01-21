import React, { Fragment } from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'

import EndDate from './EndDate'

import styles from '@/css/pandemic.scss'

console.log(styles)

const menu = [
    { name: '限期', key: "/endDate" },
    { name: '永久', key: "/forever" },
    { name: '组合', key: "/combine" },
    { name: '会员1', key: "/member1" },
    { name: '会员2', key: "/member2" },
    { name: '会员3', key: "/member3" },
    { name: '会员4', key: "/member4" },
    { name: '会员5', key: "/member5" },
];

const Forever = function () {
    return (
        <div>Forever</div>
    )
}
const Combine = function () {
    return (
        <div>Combine</div>
    )
}
const Member1 = function () {
    return (
        <div>Member1</div>
    )
}

function Member2() {
    return (
        <div>Member2</div>
    )
}
function Member3() {
    return (
        <div>Member3</div>
    )
}
function Member4() {
    return (
        <div>Member4</div>
    )
}
function Member5() {
    return (
        <div>Member5</div>
    )
}

export default class PandemicMain extends React.Component {

    onClickMenuItem = (e, index) => {
        // console.log(e);
        // console.log(e.currentTarget);
        // console.log(index);
        // console.log(e.currentTarget.parentNode);
        // console.log(e.currentTarget.parentNode.children[0]);
        // console.log(e.currentTarget.parentNode.children[0].children[1]);

        // e.currentTarget.style.left=index*70+8+'px'
        e.currentTarget.parentNode.children[0].children[1].style.left = index * 70 + 8 + 'px';
    }

    render() {
        const ui = (
            <HashRouter>
                
                <div id={styles.header}>
                    <div className={styles['header-list']}>
                        {
                            menu.map((menuItem, index) => {
                                if (index === 0)
                                    return (
                                        <div key={index} onClick={(e) => this.onClickMenuItem(e, index)}>
                                            <Link to={menuItem.key}>
                                                <span>{menuItem.name}</span>
                                            </Link>
                                            <div id={styles.selectednav}
                                                style={{ left: index * 70 + 8 + 'px' }}
                                            ></div>
                                        </div>
                                    )
                                else
                                    return (
                                        <div key={index} onClick={(e) => this.onClickMenuItem(e, index)}>
                                            <Link to={menuItem.key}>
                                                <span>{menuItem.name}</span>
                                            </Link>
                                        </div>
                                    )
                            }
                            )
                        }
                    </div>
                </div>
                <div id={styles.content} >
                    <Route path="/endDate" component={EndDate} ></Route>
                    <Route path="/forever" component={Forever} ></Route>
                    <Route path="/combine" component={Combine} ></Route>
                    <Route path="/member1" component={Member1} ></Route>
                    <Route path="/member2" component={Member2} ></Route>
                    <Redirect to="/endDate"/>
                </div>
            </HashRouter>
        );
        return ui;

    }
}
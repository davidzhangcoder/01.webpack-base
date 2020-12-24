//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import CmtListContainer from '@/components/comment/containers/CmtListContainer'
import Counter from '@/components/Counter'
import MovieMain from '@/components/movie/MovieMain'
import store from '@/components/comment/redux/store';

// import './test.js'
// import './test1.js'
// import Mycomp from './test1'
import displayfun from './TestImport'

displayfun();

//2.创建虚拟DOM元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点 (包括其他虚拟DOM 或 文本子节点)
// 参数n:

//3.使用使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：渲染的那个虚拟DOM
// 参数2：指定页面的容器,应该是DOM元素
ReactDOM.render(
    <div style={{height:'100%'}}>
        {/* <CmtList></CmtList> */}
        {/* <Counter initialValue={"AAAAA"} ></Counter> */}
        <MovieMain></MovieMain>
        {/* <Mycomp></Mycomp> */}
    </div>,document.getElementById('app'))

// ReactDOM.render(
//     <Provider store={store}>
//         <CmtListContainer></CmtListContainer>
//     </Provider>,document.getElementById('app'))

//react全, redux, webpack, 尚硅谷

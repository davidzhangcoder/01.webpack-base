//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';
import ReactDOM from 'react-dom';

import C1 from './components/1.FunctionComponent.jsx';

//2.创建虚拟DOM元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点 (包括其他虚拟DOM 或 文本子节点)
// 参数n:

// const myh1 = React.createElement('h1' , { id:'h1id' } , 'this is h1' );
const myh1 = <h1 id="h1id">this is h1 - New</h1>

//形参prop可以取任意名字, 一般用props
function Hello(prop) {
    console.log(prop);
return <div>bbbbb - {prop.name}</div>;
}

let user = {
    name : 'Tom',
    age : '2',
    gender : 'M'
}

//3.使用使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：渲染的那个虚拟DOM
// 参数2：指定页面的容器,应该是DOM元素
ReactDOM.render(
    <div>
        aaaaa
        <Hello name="Jack" age="1"></Hello>
        <Hello {...user}></Hello>
        <C1></C1>
     </div>,document.getElementById('app'))
//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';
import ReactDOM from 'react-dom';

//2.创建虚拟DOM元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点 (包括其他虚拟DOM 或 文本子节点)
// 参数n:

// const myh1 = React.createElement('h1' , { id:'h1id' } , 'this is h1' );
const myh1 = <h1 id="h1id">this is h1 - New</h1>

let a = 10;
let str = '使用ReactDOM把虚拟DOM渲染到页面上';
let bool = true;
let jsxObj = <h1>this is jsxObj</h1>
let array1 = [1,2];
let color1 = 'red';
let array1_1 = [];
array1.forEach(item => {
    array1_1.push(<h1>{item}</h1>);
});
let array2 = [
    <h2>this is h2 in array2</h2> , 
    <h3>this is h3 in array2</h3>
];
let left = 'left';
let array3 = [
    <div style={{float:left}}>this is div1 in array2</div> , 
    <div>this is div2 in array2</div>
];

//3.使用使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：渲染的那个虚拟DOM
// 参数2：指定页面的容器,应该是DOM元素
ReactDOM.render(
    <div>
        aaaaa
        <hr/>
            {a}
        <hr/>
                {a+2}
        <hr/>
            {str}
        <hr/>
            {bool.toString()} 
            { bool?'T':'F'}
        <hr/>
            <p title={str}>this is p tag</p>
        <hr/>
            {jsxObj}
        <hr/>
            {array2}
        <hr/>
            {/* {array3} */}
        <hr/>
            {/* {array1_1} */}
        <hr/>
            {/* React中，需要把key添加给被foreach或map或for循环直接控制的元素 */}
            {/* map会return到一个数组， foreach不会return */}
            {/* { array2.map(item => {
                return item
            }) }  */}
        <hr/>
            {array1}
            { array1.map(item => {
                return <h1 key={item} style={{color:color1}}>{item}</h1>
            }) }
    </div>,document.getElementById('app'))
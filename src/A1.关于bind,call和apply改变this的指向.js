//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';
import ReactDOM from 'react-dom';

import CmtList from '@/components/CmtList'
import Counter from '@/components/Counter'


let obj = {
    x : 12345
}

function display(a, b){
    console.log(this.x + " " + a + " " + b)
}

//bind会改变方法(display)中this的指向，到传入的参数(obj), 不会立即执行
//第一个参数后的参数，会作为方法的参数
// let displayMethod = display.bind(obj , 1 , 2);
// displayMethod();

//call也会改变方法(display)中this的指向，到传入的参数(obj)，但会立即执行
//第一个参数后的参数，会作为方法的参数
// display.call(obj , 11 , 22)

//apply也会改变方法(display)中this的指向，到传入的参数(obj)，但会立即执行
//第一个参数后的参数，会作为方法的参数，但必须是数组的形式
// display.apply(obj , [ 111 , 222 ])


//2.创建虚拟DOM元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点 (包括其他虚拟DOM 或 文本子节点)
// 参数n:

//3.使用使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：渲染的那个虚拟DOM
// 参数2：指定页面的容器,应该是DOM元素
ReactDOM.render(
    <div>
        {/* <CmtList></CmtList> */}
        <Counter initialValue={0} ></Counter>
    </div>,document.getElementById('app'))

//react全, redux, webpack, 尚硅谷
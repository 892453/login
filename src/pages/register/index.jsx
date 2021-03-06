import React, { Component } from 'react'
import 'antd/dist/antd.css'
//import { Input , Button , List } from 'antd'
import store from '../../store/index'
import { changeInputAction ,addItemAction,deleteItemAction,getTodoList} from '../../store/actionCreators'
//import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from '../../store/actionType'

import TodoListUI from './todolistUi.js'


export default class Register extends Component {

    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }

    changeInputValue(e){
        // const action ={
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        console.log('store changed')
        this.setState(store.getState())
    }
    clickBtn(){
        console.log("ADDITEM")
        //const action = { type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        console.log("DELETE:",index)
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        const action = getTodoList()
        store.dispatch(action)
    }

}
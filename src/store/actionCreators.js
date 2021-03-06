import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionType'
import axios from 'axios'

export const changeInputAction = (value)=>({        //改变输入框内容
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({             //添加一个list
    type:ADD_ITEM,
})

export const deleteItemAction = (index)=>({     //删除一项
    type:DELETE_ITEM,
    index
})
//将后端获取的数据放到Redux的store中
export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('http://www.aifixerpic.icu/web/name').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}
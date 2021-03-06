import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'

class TodolistUi extends Component {
    
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.props.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue} 
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.clickBtn}
                        >增加
                    </Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=>(
                            <List.Item onClick={()=>{this.props.deleteItem(index)}}>
                                    {item}
                            </List.Item>)}
                    />    
                </div>
            </div>
         )
    }
}
 
export default TodolistUi;
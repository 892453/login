import React, { Component } from 'react';
import axios from 'axios'
import {Input,Button,List,Popover} from 'antd'
import 'antd/dist/antd.css'

//import {Link} from "react-router-dom";

class Music extends Component {
    constructor(props) {
        
        super(props);
        this.clickBtn=this.clickBtn.bind(this)
        this.state = { 
            placeholder:"在此输入检索的歌曲名称",
            inputcontext:'context',
            musicname:[]
         }
        this.clickview=this.clickview.bind(this)
         
    }
    //初始化界面时获取数据
    componentDidMount(){
        axios.get('http://www.aifixerpic.icu/music/name')
        .then((res)=>{
          //console.log('axios获取歌曲名称成功:'+JSON.stringify(res))
          let name=res.data.data
          console.log(name)
          this.setState({
            musicname:res.data.data.list
          })
        })
        .catch((error)=>{
          console.log('axios获取数据失败:'+error)
        })
      }
 
    render() { 
        return (  
            <div style={{margin:'10px'}}>
                <div>
                    <small  className="form-text text-muted">
                        We aim to provide you with free downloads of vip songs. If you have download problems or songs you want to get, please contact the administrator.
                    </small>
                </div>
                <div>
                    <Input
                        placeholder={this.state.placeholder} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.inputchange.bind(this)}
                        //value={this.state.inputcontext}
                    />
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                        >查询
                    </Button>
                </div>
                <div style={{margin:'10px',width:'350px'}}>
                    <List
                            bordered
                            dataSource={this.state.musicname}
                            renderItem={(item,index)=>(
                                <List.Item >
                                    <a 
                                        href={'http://www.aifixerpic.icu/music/download_mp3?filename='+item.title}>
                                        {item.title}
                                    </a>
                                    <Button 
                                        type="dashed" 
                                        size="small"
                                        onClick={this.clickview(item.title)}
                                    >查看
                                    </Button>

                                </List.Item>)}
                        />    
                    <Popover placement="bottom" title="没找到？" content="点击右侧框提交您想要的歌" trigger="click" style={{position:"center"}}>
                        <Button>点击我</Button>
                    </Popover>
                </div>
            </div>
        );
    }
    inputchange(e){
        this.setState({
            inputcontext:e.target.value
        })
    }
    clickBtn(){
        alert("功能开发中~")
    }
    clickview(){
        console.log("12")
    }
}
 
export default Music;
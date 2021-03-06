import React, { Component } from 'react'
import axios from 'axios'
import Qs from 'qs'
import "./login.css"
import 'antd-mobile/dist/antd-mobile.css'; 
import { Toast } from 'antd-mobile';

//成功对号提示
function successToast(step) {
    Toast.success('步数修改成功'+step, 1);
  }
  //xx错误密码提示
  function Toasterrorpassword() {
    Toast.fail('用户名或者密码错误', 1);
  }
  //哭脸提示
  function offline(text) {
    Toast.offline(text, 3);
  }
  //长条方框提示
  function showToastNoMask(text) {
    Toast.info(text, 2, null, false);
  }


export default class Login extends Component {

    state={
        username:'',
        step:'88888',
        password:''
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log("用户：",this.state.username);
        console.log("申请修改步数：step",this.state.step);
        if(this.state.username==="" || this.state.password==="" || this.state.step==="")
        {
            //长条方框提示
            showToastNoMask("任意一项不能为空！") 
            return;
        }else if(this.state.step>98800){
            //哭脸提示
            offline("充值VIP业务即可享受超多步数修改服务~")
            return;
        }else{
            axios({	
                method:'post',
                url:"http://www.aifixerpic.icu/web/alter",
                data:Qs.stringify({
                    "count": this.state.username,
                    "password":this.state.password,
                    "step":this.state.step
                })
            }).then(res => {
                console.log("res:",res.data)
                console.log("res2:",res.data==='success')
                if(res.data==='success'){
                    successToast(this.state.step)
                    
                    setTimeout(function(){
                        　　//哭脸提示
                            offline("修改生效可能需要一段时间，请不要重复修改，若未生效请3分钟后重试！")
                        　　},1000);
                    
                }else if(res.data==="error"){
                    //alert("用户名或密码错误！")
                    Toasterrorpassword()
                }else{
                    //哭脸提示
                    offline("未知错误，请联系Administrator！")
                }

                
                // Notification.requestPermission();
                // let notice=new Notification("Notice from z",{
                //     body:"步数修改成功了",
                //     requireInteraction:true,
                //     icon:"../../assets/img/game.png"
                // })
                // notice.onclick=function(){
                //     notice.close();
                // }
                
            })
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }



    render() {
        const {username,step,password}=this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            {/* 账户 */}
            <div className="form-group">
                <label htmlFor="username">Count</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    defaultValue={username} 
                    name="username"
                    onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your count and password with anyone else.</small>
            </div>
            {/* 修改的步数 */}
            <div className="form-group">
                <label htmlFor="step">Step</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="step" 
                    defaultValue={step} 
                    name="step"
                    onChange={this.handleChange}
                />
            </div>
            {/* 密码 */}
            <div className="form-group">
                <label htmlFor="password">PassWord</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    defaultValue={password} 
                    name="password"
                    onChange={this.handleChange}
                />
            </div>  
            {/* 提交按钮 */}
            <button type="submit" className="btn btn-primary">Submit</button>
             {/* 提示内容 */}
            <small  className="form-text text-muted" style={{fontcolor:"red"}}>
                <font style={{color:"red"}}> 
                    不能同步？按照以下操作：登录小米运动--设置--账号和安全--最下面注销账号--清空数据，等待20分钟后，重新绑定第三方，提交刷新步数即可。
                </font>
            </small>
           
        </form>
        {/* 时钟
            <embed 
                wmode="transparent" 
                src="https://files.cnblogs.com/files/jingmoxukong/honehone_clock_tr.swf" 
                quality="high" 
                bgcolor="#FDF6E3"
                width="240" height="110" 
                name="honehoneclock" 
                align="middle" 
                allowscriptaccess="always" 
                type="application/x-shockwave-flash" 
                pluginspage="http://www.macromedia.com/go/getflashplayer">
            </embed> */}
        </div>
        )
    }
}
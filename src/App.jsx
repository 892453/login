import React, { Component } from 'react'
import Navigator from './pages/navigator'   //导航
import Home from './pages/home'             //首页
import Login from './pages/login'            //登录
import Register from './pages/register'     //注册
import Canvas from './pages/canvas'             //画布界面
import Music from './pages/music'              //音乐
import Video from './pages/video'              //视频
import React_redux from './pages/react-redux' //React-redux界面
import Hooks from './pages/Hooks'             //hooks界面
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'



export default class App extends Component {
    render() {
        return (
           <Router>
               <Navigator/>
               <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login/" exact component={Login}/>
                    <Route path="/register/" exact component={Register}/>
                    <Route path="/react_redux/" exact component={React_redux}/>
                    <Route path="/canvas/" exact component={Canvas}/>
                    <Route path="/music/" component={Music}/>
                    <Route path="/video/" component={Video}/>
                    <Route path="/hooks/" component={Hooks}/>
                </Switch>
           </Router>
        )
    }
}
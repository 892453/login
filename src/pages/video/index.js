import React, { Component } from 'react';
import { Player,
        ControlBar,
        PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
        ReplayControl, // 后退按钮
        ForwardControl,  // 前进按钮
        CurrentTimeDisplay,
        TimeDivider,
        PlaybackRateMenuButton,  // 倍速播放选项
        VolumeMenuButton,
        BigPlayButton} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path:"http://www.aifixerpic.icu/music/download_mp3?filename=比赛回顾.mp4",
        };
    }


    render() {
        return (
            <div style={{position:"center"}}> 
                <p>视频播放器</p>
                <Player
                   //autoPlay 进入后自动播放
                   poster="../../assets/img/img1.jpg"
                   src="http://www.aifixerpic.icu/music/download_mp3?filename=比赛回顾.mp4"
                >
                
                    <BigPlayButton position="center" />
                    <ControlBar className="my-class">
                        <PlayToggle order={6.1}/>
                        <ReplayControl seconds={5} order={6.2}/>
                        <ForwardControl seconds={10} order={6.3} />
                        <CurrentTimeDisplay order={6.4} />
                        <TimeDivider order={6.5} />
                        <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={6.6} />
                        <VolumeMenuButton /> 
                    </ControlBar>
                </Player>
            </div>

        );
    }
}

export default Video;
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import TrackInfo from './TrackInfo';
import Progress from './Progress';
import Controls from './Controls';
import Time from './Time'

// let yeomanImage = require('../images/yeoman.png');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      currentTrackLen: this.props.tracks.length,//歌单歌曲数
      currentTrackIndex: 0,  //当前播放的歌曲索引，默认加载第一首歌
      currentTime: 0, //当前歌曲播放的时间
      currentTotalTime: 0, //当前歌曲的总时间
      playStatus: true,  //true为播放状态，false为暂停状态
    }
    //????bind(this)
  };
//更新播放状态
  updatePlayStatus(){
    let audio = document.getElementById("audio");
    if(this.state.playStatus){
      audio.play();
    }else{
      audio.pause();
    }
    //更新当前歌曲总时间
    let currentTolTime=Math.floor(this.props.tracks[this.state.currentTrackIndex].duration / 1000);
    this.setState({currentTotalTime:currentTolTime})
  };
  //播放事件处理
  play(){
    //这里有setState是异步的，需要在回调中执行
    this.setState({playStatus:!this.state.playStatus},()=>{
      // console.log(this.state.playStatus);
      this.updatePlayStatus()
    })
  };
  //上一曲事件处理
  previous(){
    if(this.state.currentTrackIndex-1 < 0){
      alert("已经没有上一首了");
    }else{
      this.setState({currentTrackIndex:this.state.currentTrackIndex-1},()=>{
        this.updatePlayStatus()
      })
    }
  };
  //下一曲事件处理
  next(){
    if(this.state.currentTrackIndex+1 >= this.state.currentTrackLen){
      alert("已经没有下一首了");
    }else {
      this.setState({currentTrackIndex: this.state.currentTrackIndex+1},()=>{
        this.updatePlayStatus();
      })
    }
  };
  //DOM加载完毕
  componentDidMount(){
    this.updatePlayStatus();
    // console.log(this.props.tracks[this.state.currentTrackIndex].mp3Url);
    setInterval(()=>{
      let audio=document.getElementById('audio');
      this.setState({currentTime:Math.floor(audio.currentTime)},()=>{
        if(this.state.currentTime==this.state.currentTotalTime){
          this.next();
        }
      },300);
    })
  };
  render() {
    return (
      <div className="player">
        {/*音乐播放器名称*/}
        <div className="header">first-music-player</div>
        {/*音乐信息*/}
        <TrackInfo track={this.props.tracks[this.state.currentTrackIndex]} />
        {/*播放进度条*/}
        <Progress progress={this.state.currentTime / this.state.currentTotalTime *100 + '%'} />
        {/*播放控制*/}
        <Controls isPlay={this.state.playStatus} onPlay={this.play.bind(this)} onPrevious={this.previous.bind(this)} onNext={this.next.bind(this)} />
        {/*播放时间*/}
        <Time currentTime={this.state.currentTime}  currentTotalTime={this.state.currentTotalTime} />
        {/*音频控制*/}
        {/*<audio id="audio" src={this.props.tracks[this.state.currentTrackIndex}> </audio>*/}
        <audio id="audio" src={this.props.tracks[this.state.currentTrackIndex].mp3Url}> </audio>
      </div>
    );
  }
}

App.defaultProps = {
  "tracks":[
    {
      "name":"元日",
      "artists":[{"name":"于文华"}],
      "album":{"name":"国学唱歌集",
        "picUrl":"http://p3.music.126.net/SR9eFEjRB0NsscxN7-fHMw==/3344714372906000.jpg"
      },
      "duration":136829,
      "mp3Url":"http://m2.music.126.net/rUcfqqZbq7TIfJeAHfTrkw==/3376600210116829.mp3"
    },
    {
      "name": "元日 ",
      "artists": [{"name": "清弄"}],
      "album": {
        "name": "热门华语261",
        "picUrl": "http://p4.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg",
      },
      "duration": 109000,
      "mp3Url": "http://m2.music.126.net/jwwZVlWJ78HEarft42uKUQ==/7906588115920636.mp3"
    },
    {
      "name": "青龙·花木苍苍",
      "artists": [{"name": "五色石南叶"}],
      "album": {
        "name": "热门华语234",
        "picUrl": "http://p4.music.126.net/tHAfnugCElS93EDp5cHLIw==/8909342719897560.jpg",
      },
      "duration": 295575,
      "mp3Url": "http://m2.music.126.net/rnq_W32zFX_utQbBhE0xkg==/8934631487358481.mp3"
    }
  ],
};

export default App;

/**
 * Created by ASUS on 2017/3/1.
 */
import React, { Component } from 'react';
// const Time = () => {
// const timeConvert=(timestamp)=>{
//   const minutes = Math.floor(timestamp /60);
//   let seconds = Math.floor(timestamp - (minutes*60));
//   if(seconds < 10){
//     seconds = '0' + seconds;
//   }
//   timestamp = minutes+' '+seconds;
//   return timestamp;
// }
// return(
//   <div className="time">
//     <div className="current">{this.props.currentTime}</div>
//     <div className="total">{timeConvert(this.props.currentTotalTime)}</div>
//   </div>
// )
// };
//es6
//???不用箭头函数
class Time extends Component {
   timeConvert=(timestamp)=>{
  let minutes = Math.floor(timestamp /60);
  let seconds = Math.floor(timestamp - (minutes*60));
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  timestamp = minutes+':'+seconds;
  return timestamp;
};

render() {
    return(
  <div className="time">
    <div className="current">{this.timeConvert(this.props.currentTime)}</div>
    <div className="total">{this.timeConvert(this.props.currentTotalTime)}</div>
  </div>
    )
}
}
export default Time
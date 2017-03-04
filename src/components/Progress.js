/**
 * Created by ASUS on 2017/3/1.
 */
import React, { Component } from 'react';
// const Progress = () =>(
//   <div className="progress" style={{'width':this.props.progress}}></div>
// );
class Progress extends React.Component{
  render(){
    return(
      <div className="progress" style={{'width':this.props.progress}}></div>
    )
  }
}
export default Progress
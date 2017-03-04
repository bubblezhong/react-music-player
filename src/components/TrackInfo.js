/**
 * Created by ASUS on 2017/3/1.
 */
// 相当于render();省略return
import React, { Component } from 'react';
const TrackInfo = ({track}) =>(

   <div>
     {/*<div className="albumPic" style={{'backgroundImage':'url('+ track.album.picUrl +')'}}></div>*/}
     <div className="albumPic" style={{'backgroundImage':'url(${track.album.picUrl })'}}></div>
     <div className="trackInfo">
       <div className="name">{track.name}</div>
       <div className="artist">{track.artists[0].name}</div>
       <div className="album">{track.album.name}</div>
     </div>
   </div>
);
// class TrackInfo extends React.Component{
//   render(){
//     return(
//     <div>
//       <div className="albumPic" style={{'backgroundImage':'url('+ this.props.track.album.picUrl +')'}}></div>
//       <div className="trackInfo">
//         <div className="name">{this.props.track.name}</div>
//         <div className="artist">{this.props.track.artists[0].name}</div>
//         <div className="album">{this.props.track.album.name}</div>
//       </div>
//     </div>
//     )
//   }
// }
export default TrackInfo;
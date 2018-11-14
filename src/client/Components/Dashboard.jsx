import React, { Component } from 'react';

var user = {
    basicInfo: {
      name: "Jano Doe",
      gender: "None",
      birthday: "Jan 1, 1999",
      location: "NYC, NY",
      photo: ".png",
      bio: ""
    }
  }
  
  
  class Avatar extends React.Component {
    render() {
      var image = this.props.image,
          style = {
            width: this.props.width || 50,
            height: this.props.height || 50
          }; 
      
      if (!image) return null;
      
      return (
       <div className="avatar" style={style}>
             <img src={this.props.image} /> 
        </div>
      );
    }
  }
  
  class MainPanel extends React.Component {
    render() {
      var info = this.props.info;
      if (!info) return null;
      
      return (
       <div>
          <div className="top">
              <Avatar 
                 image={info.photo} 
                 width={100}
                 height={100}
              /> 
              <h2>{info.name}</h2>
              <h3>{info.location}</h3>
            
            <hr />
              <p>{info.gender} | {info.birthday}</p>
          </div>
          
          <div className="bottom">
            <h4>Biography</h4>
            <p>{info.bio}</p>
          </div>
        </div>
      );
    }
  }
  
  
  class Dashboard extends React.Component {
    render() {
      return (
        <div id="user-profile">
          <MainPanel info={user.basicInfo} />
        </div>
      )
    }
  }
  
export default Dashboard;
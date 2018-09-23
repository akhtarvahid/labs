import React, { Component } from 'react';
import '../App.css';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

const cover = 'https://www.rudralabs.com/static/media/BG.0f1ad992.png'
class Section1 extends Component {
  constructor() {
    super();
    this.state = {
        text1: 'WE ARE RUDRA LABS',
        text2: 'WE BUILD CONSUMER IOT APPLICATION PLATFORMS',
        text3: 'More info',
        text4: 'Book',  
        article:'Rudralabs is a Consumer IOT Application Development Platform company. Our Consumer IOT Platforms ARC, AQUARIUS and MEDICA empower anyone with a business idea and imagination to deploy enterprise grade, sophisticated consumer IOT applications quickly and easily.',
      open: false,
      position: 'right',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }
  setPosition(e) {
    this.setState({position: e.target.value});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  render() {
    return (
      <div>
        <div>  
        <img style={{width:'100%'}} className="img-responsive"  src={cover} alt="cover1"/>
        <div style={{top:'50%', left:'30%',position:'absolute'}}>
        <h1 onClick={this.toggleDrawer} className="about">{this.state.text1}</h1>
        <p onClick={this.toggleDrawer} className="about">{this.state.text2}</p>
        <article style={{color:'white', fontSize:20, fontFamily:'monospace'}}>{this.state.article}</article>
        <div style={{display:'flex',justifyContent:'space-between',
            width:230}}>
            <div onClick={this.toggleDrawer} className="moreinfo">{this.state.text3}</div>  
            <div onClick={this.toggleDrawer} className="moreinfo">{this.state.text4}</div>
        </div>
        </div> 
        </div> 
        
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}>

          <div style={{display:'flex', justifyContent:'space-between', 
          padding:15, alignItems:'center', backgroundColor:'darkgrey'}}>
          <span style={{fontSize:25, color:'red', cursor:'pointer'}} onClick={this.closeDrawer}>X</span>
          <span>Edit form</span>
          </div>
         <div style={{padding:10, height:'100vh'}}>
            <label className="label">Heading</label>
            <input className="inputbox" value={this.state.text1} type="text" placeholder="Heading" onChange={(val) => this.setState({text1:val.target.value}) } />
            <label className="label">Subheading</label>
            <input className="inputbox" type="text" placeholder="Subheading" onChange={(val) => this.setState({text2:val.target.value})} value={this.state.text2} />
            <label className="label">Body</label>
            <textarea cols="30" rows="10" className="inputbox" type="text" placeholder="Wait for more information" onChange={(val) => this.setState({article:val.target.value})} value={this.state.article} />
            <label className="label">More info</label>
            <input className="inputbox" type="text" placeholder="More info" onChange={(val) => this.setState({text3:val.target.value})} value={this.state.text3}/>
            <label className="label">Book</label>
            <input className="inputbox" type="text" placeholder="Book" onChange={(val) => this.setState({text4:val.target.value})} value={this.state.text4}/>
          </div>
              
        </ReactDrawer>
      </div>
    );
  }
}
export default Section1;
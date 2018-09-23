import React, { Component } from 'react';
import '../App.css';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
const rb = 'data:image/png;base64,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';
class Header extends Component {
    constructor() {
        super();
        this.state = {
          home: 'Home',
          about: 'About',
          news: 'News',
          contact: 'Contact',
             
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
            <ul>
            <li><img style={{height:32,padding:5,marginRight:40}} src={rb} alt="rb_logo"/></li>    
            <li onClick={this.toggleDrawer}><a href="#home">{this.state.home}</a></li>
            <li onClick={this.toggleDrawer}><a href="#news">{this.state.news}</a></li>
            <li onClick={this.toggleDrawer}><a href="#contact">{this.state.contact}</a></li>
            <li onClick={this.toggleDrawer}><a href="#about">{this.state.about}</a></li>
            </ul>
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
            <label className="label">Home</label>
            <input className="inputbox" value={this.state.home} type="text" placeholder="Home" onChange={(val) => this.setState({home:val.target.value}) } />
            <label className="label">About</label>
            <input className="inputbox" type="text" placeholder="about" onChange={(val) => this.setState({about:val.target.value})} value={this.state.about} />
            <label className="label">Contact</label>
            <input className="inputbox" type="text" placeholder="Contact" onChange={(val) => this.setState({contact:val.target.value})} value={this.state.contact}/>
           
          </div>
              
        </ReactDrawer> 
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
const cover = 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98b1cd2ea86a7b4796275ef13aadafbf&auto=format&fit=crop&w=1052&q=80'
class Section1 extends Component {
    constructor(){
        super();
        this.state ={
            text1: 'WE ARE RUDRA LABS',
            text2: 'WE BUILD CONSUMER IOT APPLICATION PLATFORMS',
            text3: 'More info',
            text4: 'Book',
            article: ''
        }
    }
    render() {
        return (
            <div>
              <div>  
               <img style={{width:'100%'}} className="img-responsive"  src={cover} alt="cover1"/>
               <div style={{top:'50%', left:'30%',position:'absolute'}}>
                <h1 className="about">{this.state.text1}</h1>
                <p className="about">{this.state.text2}</p>
                <article style={{color:'white', fontSize:25}}>{this.state.article}</article>
                <div style={{display:'flex',justifyContent:'space-between',
                 width:230}}>
                  <div className="moreinfo">{this.state.text3}</div>  
                  <div className="moreinfo">{this.state.text4}</div>
                </div>
               </div> 
              </div> 
              <div style={{width:'20%', backgroundColor:'lightgrey', 
              color:'white', right:0, position:'fixed', top:0,height:'100vh',
              }}>
               <div className="editform">Edit form</div>
               <div style={{margin:5, padding:10}}>
               <label className="label">Heading</label>
               <input className="inputbox" value={this.state.text1} type="text" placeholder="Heading" onChange={(val) => this.setState({text1:val.target.value}) } />
               <label className="label">Subheading</label>
               <input className="inputbox" type="text" placeholder="Subheading" onChange={(val) => this.setState({text2:val.target.value})} value={this.state.text2} />
               <label className="label">Body</label>
               <textarea className="inputbox" type="text" placeholder="Wait for more information" onChange={(val) => this.setState({article:val.target.value})} value={this.state.article} />
               <label className="label">More info</label>
               <input className="inputbox" type="text" placeholder="More info" onChange={(val) => this.setState({text3:val.target.value})} value={this.state.text3}/>
               <label className="label">Book</label>
               <input className="inputbox" type="text" placeholder="Book" onChange={(val) => this.setState({text4:val.target.value})} value={this.state.text4}/>
              </div>
              </div>
            </div>
        );
    }
}

export default Section1;
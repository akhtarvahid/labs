import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import Collapsible from 'react-collapsible';

class Section2 extends Component {
  constructor() {
    super();
    this.state = {
      heading:'About Life',
      subheading2:'Only I can change my life.',
      para:'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle. As with all matters of the heart, you will know when you find it',

      open: false,
      position: 'right',
      noOverlay: false,
      cards: [
        {
          id: 1,
          heading: 'Work Harder',
          subheading: 'Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.',
          moreinfo:'More info',
          url:'https://images.unsplash.com/photo-1537563748870-ff47a993459f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=029685d0e1e075fdf2bc8cd88e46d9e3&auto=format&fit=crop&w=1050&q=80'
        },
        {
          id: 2,
          heading: 'Art',
          subheading:'Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.',
          moreinfo:'More info',
          url:'https://images.unsplash.com/photo-1512375305577-4dc349fcef0b?ixlib=rb-0.3.5&s=b85d61ba7aebb0ca8e9b3042e350699b&auto=format&fit=crop&w=1042&q=80'
        },
        {
          id: 3,
          heading:'Change',
          subheading:'Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.',
          moreinfo:'More info',
          url:'https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixlib=rb-0.3.5&s=59a57130071b62595e7c2b63f16e2eea&auto=format&fit=crop&w=1050&q=80'
        }
      ]

    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
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

  handleChange(event) {
    const cards = this.state.cards;
    cards[0].heading = event.target.value;

    this.setState({cards})
  }
  handleChange2(event) {
    const cards = this.state.cards;
    cards[1].heading = event.target.value;

    this.setState({cards})
  }
  handleChange3 = (event) => {
    const cards = this.state.cards;
    cards[2].heading = event.target.value;

    this.setState({cards})
  }
  render() {
    var products = [];

    this.state.cards.forEach(function(item, i){
      products.push(
        <div key={i} className="cards" >
            <img style={{height:270, width:'100%'}} src={item.url} alt="cover1"/>
            <h3>{item.heading}</h3>
            <p>{item.subheading}</p> 
            <span className="moreinfo">{item.moreinfo}</span>
        </div>
      )
    });
   

    return (
      <div>
          <div className="section2">
             <div>
               <h2 onClick={this.toggleDrawer}>{this.state.heading} </h2>
              </div>
              <div>
                <h5 onClick={this.toggleDrawer}>{this.state.subheading2} </h5>
              </div>
              <div style={{padding:30}}>
                <p>{this.state.para}</p>
              </div>
            <div className="cardsRoot" onClick={this.toggleDrawer}>
             {products}
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
         <div style={{padding:10, height:'100vh', overflow:'scroll'}}>
            <label className="label">Heading</label>
            <input className="inputbox" value={this.state.heading} type="text" placeholder="Heading" onChange={(val) => this.setState({heading:val.target.value}) } />
            <label className="label">Subheading</label>
            <input className="inputbox" type="text" placeholder="Subheading" onChange={(val) => this.setState({subheading2:val.target.value})} value={this.state.subheading2} />
            <label className="label">Description</label>
            <textarea cols="30" rows="10" className="inputbox" type="text" placeholder="Description" onChange={(val) => this.setState({para:val.target.value})} value={this.state.para}/>
         
         <div style={{marginTop:5}}>
          
          <Collapsible trigger="Work Harder">
           <label className="label">Card Name</label>
           <input className="inputbox" value={this.state.cards[0].heading} onChange={this.handleChange}/>
          </Collapsible>
          <Collapsible trigger="Art">
           <label className="label">Card Name</label>
           <input className="inputbox" value={this.state.cards[1].heading} onChange={this.handleChange2}/>
          </Collapsible>
          <Collapsible trigger="Change">
            <label className="label">Card Name</label>
            <input className="inputbox" value={this.state.cards[2].heading} onChange={this.handleChange3}/>
          </Collapsible>
          </div>
          </div>  
          
        </ReactDrawer>
      </div>
    );
  }
}

export default Section2;
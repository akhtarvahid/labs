import React, { Component } from 'react';
const cover1 = 'https://images.unsplash.com/photo-1505231509341-30534a9372ee?ixlib=rb-0.3.5&s=badf281edce9beaf5f95a614cf61a235&auto=format&fit=crop&w=634&q=80';
const cover2 = 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-0.3.5&s=6038228c90a4bfaf68cf666f93cc1d40&auto=format&fit=crop&w=1050&q=80';
const cover3= 'https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-0.3.5&s=a71cb013aca8fda3095823cac46b8e39&auto=format&fit=crop&w=1190&q=80';
class Section2 extends Component {
  constructor(){
    super();
    this.state = {
      heading:'About Life',
      subheading:'Only I can change my life.',
      para:'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle. As with all matters of the heart, you will know when you find it'
    }
  }
    render() {
        return (
          <div style={{textAlign:'center', padding:25}}>
             <div>
               <input className="cardHeading" value={this.state.heading} onChange={(head) => this.setState({heading:head.target.value})}/>
              </div>
              <div>
                <input className="subheading2" onChange={(val) => this.setState({subheading: val.target.value })} value={this.state.subheading} />
              </div>
              <div style={{padding:30}}>
                <input className="para" value={this.state.para} onChange={(para) => this.setState({para:para.target.value})}/>
              </div>
            <div className="cardsRoot">
              <div className="cards">
                <img style={{height:270, width:'100%'}} src={cover3} alt="cover1"/>
                <h3>Work Harder</h3>
                <p>Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.</p> 
                <span className="moreinfo">More info</span> 
              </div>
              <div className="cards">
                <img style={{height:270, width:'100%'}} src={cover2} alt="cover1"/>
                <h3>Art</h3>
                <p>Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.</p> 
                <span className="moreinfo">More info</span> 
              </div>
              <div className="cards">
                <img style={{height:270, width:'100%'}} src={cover1} alt="cover1"/>
                <h3>Change</h3>
                <p>Phasellus ac ullamcorper odio, vel lacinia ex. Proin neque laoreet mollis magna sed molestie. Pellentesque sollicitudin in ipsum ac posuere.</p> 
                <span className="moreinfo">More info</span> 
              </div>
            </div>
          </div>

        );
    }
}

export default Section2;
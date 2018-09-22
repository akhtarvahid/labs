import React, { Component } from 'react';



class Header extends Component {

    onClickElement(event){
        alert('clicked')
    }
    render() {
        return (
            <div>
              <ul>
                <li><a onClick={this.onClickElement} href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
        );
    }
}

export default Header;
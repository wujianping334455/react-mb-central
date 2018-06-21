import React, { Component } from 'react';
class Menu extends Component{
    render(){
        const {menuData} = this.props;
        return(
            <div className="menu">
                <img src={menuData.url} />
                <div className="text">{menuData.text}</div>
            </div>
        )
    }
}
export default Menu;
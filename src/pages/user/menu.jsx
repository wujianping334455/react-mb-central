import React, { Component } from 'react';
class Menu extends Component{
    render(){
        const {menuData} = this.props;
        return(
            <div className="menu">
                <img src={menuData.url} alt="头像" />
                <div className="text">{menuData.text}</div>
            </div>
        )
    }
}
export default Menu;
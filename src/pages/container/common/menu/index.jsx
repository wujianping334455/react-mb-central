import React, { Component } from 'react';
import '../../../../style/component/menu.less';
class ComMenu extends Component{
    render(){
        return(
            <div className="menu-btn">
                <button className="view">查看物流</button>
                <button className="grace">评价</button>
            </div>
        )
    }
}
export default ComMenu;
import React, { Component } from 'react';
import '../../style/component/menu.less';
class ComMenu extends Component{
    render(){
        const {onViewDetail,onCancelOrder} = this.props;
        return(
            <div className="menu-btn">
                <button className="view" onClick={onViewDetail}>查看物流</button>
                <button className="grace" onClick={onCancelOrder}>取消订单</button>
            </div>
        )
    }
}
export default ComMenu;
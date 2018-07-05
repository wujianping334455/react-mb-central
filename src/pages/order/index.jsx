import React, { Component } from 'react';
import ComStatus from '../common/status';
import ComCompany from '../common/company';
import ComMenu from '../common/menu';
import LoadMore from '../../components/LoadMore';
import '../../style/order.less';
class Order extends Component{
    state = {
        isLoaded :true
    }
    render(){
        return(
            <div className="list-box">
                <ComStatus /> 
                <ComCompany />
                <ComMenu />
                <LoadMore isLoaded={this.state.isLoaded} />
            </div>
        )
    }
}
export default Order;
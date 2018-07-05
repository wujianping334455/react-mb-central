import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import ComStatus from '../common/status';
import ComCompany from '../common/company';
import ComMenu from '../common/menu';
import LoadMore from '../../components/LoadMore';
import '../../style/order.less';
class Order extends Component{
    state = {
        isLoaded :true
    }
    viewDetail = ()=> {
        console.log("viewDetail");
        // console.log(this.props.history.push);
    }
    cancelOrder = ()=>{
        console.log("cancelOrder");
    }
    render(){
        return(
            <div className="list-box">
                <ComStatus /> 
                <ComCompany />
                <ComMenu onViewDetail={this.viewDetail} onCancelOrder={this.cancelOrder} />
                <LoadMore isLoaded={this.state.isLoaded} />
            </div>
        )
    }
}
export default Order;
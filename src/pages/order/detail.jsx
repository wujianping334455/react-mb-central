import React, { Component } from 'react';
class Detail extends Component{
    render(){
        return(
            <div className="list-box">
                <div className="state-box">
                    <div className="order-num">订单号：5765465465</div>
                    <div className="status">已确认</div>
                </div>
                <div className="company-box">
                    <img src='' alt="快递公司" />
                    <div className="point">
                        <div className="time">签收时间：2018-06-17 15:23:55</div>
                        <div className="address">签收地点：深圳大学物流快递中心深圳大学物流快递中心</div>
                    </div>
                </div>
                <div className="menu-btn">
                    <button className="view">查看物流</button>
                    <button className="grace">评价</button>
                </div>
            </div>
        )
    }
}
export default Detail;
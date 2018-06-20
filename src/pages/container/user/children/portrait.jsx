import React, { Component } from 'react';
import '../../../../style/user.less';
class Portrait extends Component{
    render(){
        return(
            <div className="head-box">
                <div className="portrait">
                    <img src='' alt="头像信息" />
                    <div className="point">
                        <div className="time">深圳大学----->红榴斋（李新奇)</div>
                        <div className="address">订单号：870 966 231 222</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portrait;
import React, { Component } from 'react';
import '../../style/user.less';
import portrait from '../../image/user/user-head.png';
class Portrait extends Component{
    render(){
        return(
            <div className="head-box">
                <div className="portrait">
                    <img src={portrait} alt="头像信息" />
                    <div className="point">
                        <div className="time">李新奇</div>
                        <div className="address">奇妙世界，探索无限</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portrait;
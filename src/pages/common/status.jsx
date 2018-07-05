import React, { Component } from 'react';
import '../../style/component/status.less';
class ComStatus extends Component{
    render(){
        return(
            <div className="state-box">     
                <div className="state">
                    <div className="text">已下单</div>
                    <div className="text">已确认</div>
                    <div className="text">派送中</div>
                    <div className="text">已到达</div>
                    <div className="text">已签收</div>
                </div>
                <div className="progress">
                    <div className="quan-box">
                        <div className="xian" />
                        <div className="quan completed" />
                        <div className="quan error" />
                        <div className="quan" />
                        <div className="quan" />
                        <div className="quan" />
                    </div>
                </div>
            </div>
        )
    }
}
export default ComStatus;
import React, { Component } from 'react';
import '../../../../style/component/company.less';
import ems from '../../../../image/courier/ems.png';
import fedex from '../../../../image/courier/fedex.png';
import noCompany from '../../../../image/courier/noCompany.png';
import shentong from '../../../../image/courier/shentong.png';
import shunfeng from '../../../../image/courier/shunfeng.png';
import tiantian from '../../../../image/courier/tiantian.png';
import yuantong from '../../../../image/courier/yuantong.png';
import yunda from '../../../../image/courier/yunda.png';
import zhaijisong from '../../../../image/courier/zhaijisong.png';
import zhongtong from '../../../../image/courier/zhongtong.png';
class ComCompany extends Component{
    render(){
        return(
            <div className="company-box">
                <img src={fedex} alt="快递公司" />
                <div className="point">
                    <div className="time">深圳大学----->红榴斋（李新奇)</div>
                    <div className="address">订单号：870 966 231 222</div>
                </div>
            </div>
        )
    }
}
export default ComCompany;
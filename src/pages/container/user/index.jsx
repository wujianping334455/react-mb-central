import React, { Component } from 'react'
import Portrait from './children/portrait';
import Menu from './children/menu';
import kuaijian from '../../../image/user/ic_kuaijian.svg';
import qianbao from '../../../image/user/ic_qianbao.svg';
import pingjia from '../../../image/user/ic_pingjia.svg';
import rending from '../../../image/user/ic_rending.svg';
import shezhi from '../../../image/user/ic_shezhi.svg';
import women from '../../../image/user/ic_women.svg';

class User extends Component{
    state = {
        menus:[
            {url:kuaijian,text:"我的快件"},
            {url:qianbao,text:"我的钱包"},
            {url:pingjia,text:"我的评价"},
            {url:rending,text:"资质认定"}
        ],
        abouts:[
            {url:shezhi,text:"设置"},
            {url:women,text:"关于我们"}
        ]
    }
    render(){
        const {menus,abouts} = this.state;
        return(
            <div className="user-box">
                <Portrait />
                <div className="menus">
                    {menus.map((item,index)=>{
                        return (<Menu key={index} menuData={item} />);
                    })}
                </div>
                <div className="menus">
                    {abouts.map((item,index)=>{
                        return (<Menu key={index} menuData={item} />);
                    })}
                </div>
            </div>
        )
    }
}

export default User;
import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import icFujin from '../../image/ic_fujin.svg';
import icJijian from '../../image/ic_jijian.svg';
import icSaomiao from '../../image/ic_saomiao.svg';
import icTask from '../../image/ic_task.svg';
class Menu extends Component{
    state = {
        data :[
            {icon:icSaomiao,text:'扫一扫'},
            {icon:icJijian,text:'收件'},
            {icon:icTask,text:'任务'},
            {icon:icFujin,text:'附近'}
        ]
    }
    render(){
        return(
            <Grid data={this.state.data} hasLine={false} />
        )
    }
}
export default Menu;
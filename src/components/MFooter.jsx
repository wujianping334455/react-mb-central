import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import bt_home_nor from '../image/footer/bt_home_nor.png';
import bt_dingdan_nor from '../image/footer/bt_dingdan_nor.png';
import bt_wode_nor from '../image/footer/bt_wode_nor.png';
import bt_home_press from '../image/footer/bt_home_press.png';
import bt_dingdan_press from '../image/footer/bt_dingdan_press.png';
import bt_wode_press from '../image/footer/bt_wode_press.png';
class MFooter extends Component{
    state = {
        data :[
            {
                icon:bt_home_nor,
                press:bt_home_press,
                selected : false,
                path:'/app/home'
            },
            {
                icon:bt_dingdan_nor,
                press:bt_dingdan_press,
                selected : false,
                path:'/app/order'
            },
            {
                icon:bt_wode_nor,
                press:bt_wode_press,
                selected : false,
                path:'/app/user'
            }
        ]
    }
    itemClick(img,index){
        const {data} = this.state;
        data.map((item,itemIndex)=>{
            if(index===itemIndex){
                if(!item.selected){
                    item.selected = !item.selected;
                    // 跳转路由
                    item.path && this.props.history.push(item.path);
                }
            }else{
                item.selected = false;
            }
            return item;
        });
        this.setState({data})
    }
    render(){
        return(
            <div className="footer">
                <Grid data={this.state.data}
                    onClick ={this.itemClick.bind(this)}
                    columnNum={3}
                    renderItem={dataItem => (
                        <img src={dataItem.selected===true?dataItem.press:dataItem.icon} style={{ width: '75px', height: '52px' }} alt="" />
                    )}
                />
            </div>
        )
    }
}

export default withRouter(MFooter);
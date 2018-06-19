import React, { Component } from 'react';
import MFooter from '../../components/MFooter';
import MHeader from '../../components/MHeader';
class Home extends Component{
    render(){
        return(
            <div>
                <MHeader />
                {/* 子路由在父级配置，react-router4新特性，更加灵活 */}
                {this.props.children}
                <MFooter />
            </div>
        )
    }
}
export default Home;
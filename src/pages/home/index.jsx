import React, { Component } from 'react';
import Swiper from './swiper';
import Search from './search';
import Menu from './menu';
import List from './list';
import LoadMore from '../../components/LoadMore';
import '../../style/home.less';
class Home extends Component{
    state = {
        isLoaded :true
    }
    render(){
        return(
            <div className="home-box">
                <Swiper />
                <Search />
                <Menu />
                <List />
                <LoadMore isLoaded={this.state.isLoaded} />
            </div>
        )
    }
}
export default Home;
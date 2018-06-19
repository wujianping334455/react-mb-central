import React, { Component } from 'react';
import Swiper from './children/swiper';
import Search from './children/search';
import Menu from './children/menu';
import List from './children/list';
import LoadMore from '../../../components/LoadMore';
import '../../../style/home.less';
class Home extends Component{
    render(){
        return(
            <div className="home-box">
                <Swiper />
                <Search />
                <Menu />
                <List />
                <LoadMore isLoaded={true} />
            </div>
        )
    }
}
export default Home;
import React, { Component } from 'react'
class LoadMore extends Component{
    render(){
        const {isLoaded} = this.props;
        return(
            <div className="header loadmore">
                <div className="border">---------------------------------------</div>
                <div className="text">{isLoaded?"我也是有底线的":"加载更多"}</div>
                <div className="border">---------------------------------------</div>
            </div>
        )
    }
}
export default LoadMore;
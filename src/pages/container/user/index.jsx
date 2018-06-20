import React, { Component } from 'react'
import Portrait from './children/portrait';
class User extends Component{
    render(){
        return(
            <div className="user-box">
                <Portrait />
                <div className="menus">
                    <div className="menu">
                        <img src='' />
                        <div className="point">深圳大学</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
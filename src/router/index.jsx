import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Container from '../pages/container';
import MyHome from '../pages/home';
import User from '../pages/user';
import Order from '../pages/order';
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{    
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/app"
                        render={({history,location,match}) => (
                            <Container history={history} location={location} match={match}>
                                <Route path={`${match.url}/`} exact component={MyHome} />
                                <Route path={`${match.url}/home`} exact component={MyHome} />
                                <Route path={`${match.url}/user`} exact component={User} />
                                <Route path={`${match.url}/order`} exact component={Order} />
                            </Container>
                        )} 
                    />
                    <Redirect to="/app/home" />
                </Switch>
            </HashRouter>
        )
    }
}
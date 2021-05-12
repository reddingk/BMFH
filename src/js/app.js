import React, { Component } from 'react';
import { Router, Route, Switch, NavLink } from "react-router-dom";
import { createBrowserHistory } from 'history';

/* Components */
import Home from './components/home';
import Juneteenth from './components/juneteenth';

/* Styles */
import "../css/app.less";

const history = createBrowserHistory(); 
const routes = [
    { path:"/juneteenth", component:Juneteenth }
];

const SiteRoutes = route => (
    <Route path={route.path} render={props => ( <route.component {...props} />)} />
);

function SideNav(props){       
    return (
        <div className={"sidenav-container" + (props.sidebarOpen ? " active": "")}>
            <div className="sidenav-section title">
                <NavLink className="title" to="/" onClick={() => props.setSidebarDisplay(false)}>Black Minds For Humanity</NavLink>
            </div>
            <div className="sidenav-section">
                <NavLink className="sidenav-link" to="/" onClick={() => props.setSidebarDisplay(false)}>About Us</NavLink>
                <NavLink className="sidenav-link" to="/juneteenth" onClick={() => props.setSidebarDisplay(false)}>Juneteenth Events</NavLink>
                <NavLink className="sidenav-link" to="/" onClick={() => props.setSidebarDisplay(false)}>How To Support</NavLink>                
            </div>
        </div>
    );
}


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }
        this.setSidebarDisplay = this.setSidebarDisplay.bind(this);
    }
    
    setSidebarDisplay(status) {
        this.setState({ sidebarOpen: status });
    }

    componentDidMount(){}

    render(){   
        return(
            <Router history={history}>
                <div className="full-container">
                    <div className="menu-toggle" onClick={() => this.setSidebarDisplay(!this.state.sidebarOpen)}><div className={"menu-btn" + (this.state.sidebarOpen ? " open":" closed")}/></div> 
                    <SideNav setSidebarDisplay={this.setSidebarDisplay} sidebarOpen={this.state.sidebarOpen}/>                   
                    <div className={"app-container" + (this.state.sidebarOpen ? " noscroll":"")}>      
                        <Switch>                                       
                            <Route exact path="/" render={()=> <Home /> }/>  
                            { routes.map((route, i) => <SiteRoutes key={i} {...route} />) } 
                        </Switch>                                                                       
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
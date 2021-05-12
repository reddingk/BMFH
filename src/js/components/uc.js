import React, { Component } from 'react';
import { Link } from "react-router-dom";

class UC extends Component{
    
    componentDidMount(){ 
        let el = document.getElementsByClassName("app-container"); el[0].scrollTop = 0;
    }
    
    render(){  
        return(
            <div className="page-body uc">
                <Link to="/" className="home-link"><i className="fas fa-home"/><span>B.M.F.H.</span></Link>
                <h1>More Information Coming Soon</h1>
            </div>
        );
    }
}
export default UC;
import React, {Component} from 'react'

class Menu extends Component{
 
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">                
                         
              <ul className="navbar-nav" style={{position: "relative", left: "1100px"}}>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{paddingLeft: "25px"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Dashboard" style={{paddingLeft: "25px"}}>Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">Admin</a>
                </li>
                                
              </ul>
            </nav>
          </div>
        )
    }
}
export default Menu;
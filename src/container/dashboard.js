import React, {Component} from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Menu from '../component/Menu';
import Dashboard from '../component/Dashboard';

class Home extends Component{
 
    render(){
        return(
            <div>
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
           
          </div>
        )
    }
}
export default Home;
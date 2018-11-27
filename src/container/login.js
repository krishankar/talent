import React, {Component} from 'react'
import Header from '../component/Header';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import Login from '../component/Login';

class Home extends Component{
 
    render(){
        return(
            <div>
            <Header />
            <Menu />
            <Login />
            <Footer />           
          </div>
        )
    }
}
export default Home;
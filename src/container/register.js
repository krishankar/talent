import React, {Component} from 'react'
import Header from '../component/Header';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import Register from '../component/Register';

class register extends Component{
 
    render(){
        return(
            <div>
            <Header />
            <Menu />
            <Register />
            <Footer />
           
          </div>
        )
    }
}
export default register;
import React, {Component} from 'react'
import Header from '../component/Header';
import Menu from '../component/Menu';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

class Home extends Component{
 
    render(){
        return(
            <div>
            <Header />
            <Menu />
            <Banner />
            <Footer />
           
          </div>
        )
    }
}
export default Home;
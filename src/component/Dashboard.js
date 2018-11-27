import React, {Component} from 'react'

class Dashboard extends Component{
 
    render(){
        return(
            <div id="wrapper">
                <div id="heading">
                    <header>SEARCH TALENT</header>
                </div>
                <div id="search">BY BATCH YEAR | BY STUDY COURSE</div>
                <hr />
                    <div className="category">WELDING (2 YEAR COURSE)</div>
                    <div className="container">
                    <div className="image">
                        <img src="images/m1.jpg" className="w3-circle" />
                    </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Alok Yadav</b><br />
                    3 year experience<br />
                    Welder at Accel Steel<br />
                </div>
                <div className="flex-item image">
                    <img src="images/m2.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Nayan Chatterjee</b><br />
                    4 year experience<br />
                    Supervisor at Keppel Steel<br />
                </div>
                <div className="image">
                    <img src="images/m3.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Naveen Ravi</b><br />
                    1 year experience<br />
                    Fitter at ST Marine<br />
                </div>
                <div className="image">
                    <img src="images/m4.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Mayank Runthala</b><br />
                    4 year experience<br />
                    Foreman at Viking Offshore<br />
                </div>
                </div>
                <div className="category">AUTOMOBILE TECHNICIAN (2 YEAR COURSE)</div>
                <div className="container">
                <div className="image">
                    <img src="images/m5.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Rashmikanta</b><br />
                    3 year experience<br />
                    Foreman at Maruti<br />
                </div>
                <div className="flex-item image">
                    <img src="images/m6.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Salik Saif</b><br />
                    2 year experience<br />
                    Technician at Tata Motors<br />
                </div>
                <div className="image">
                    <img src="images/m7.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Suraj Shaw</b><br />
                    2 year experience<br />
                    Mechanic at Tata Motors<br />
                </div>
                <div className="image">
                    <img src="images/m8.jpg" className="w3-circle" />
                </div>
                <div className="flex-item">
                    <b style={{color: 'blue'}}>Ajay Ramanath</b><br />
                    2 year experience<br />
                    Line Assembly at Fiat<br />
                </div>
            </div>
      </div>
        )
    }
}
export default Dashboard;
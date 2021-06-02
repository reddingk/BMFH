import React, { Component } from 'react';
import { Link } from "react-router-dom";

/* Images */
import img1 from '../../assets/img1.JPG';
import img2 from '../../assets/img2.JPG';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }  
    
    componentDidMount(){ 
        let el = document.getElementsByClassName("app-container"); el[0].scrollTop = 0;
    }

    render(){  
        return(
            <div className="page-body home">
                <div className="body-section no-padding landing">
                    <div className="title">
                        <h1>Black Minds</h1>
                        <h1>For Humanity</h1>
                    </div>

                    <div className="block-grid">
                        <div className="block b2 c1" />
                        <div className="block b1 c2" />

                        <div className="block b3 c1" />
                        <div className="block b5 c1" />
                        <div className="block b4 c3" />

                        <Link to="/juneteenth#event" className="block b6 c4 content-block">
                            <div className="block-title">Juneteenth Event</div>
                            <div className="block-text">Come join us and celebrate juneteenth this year at our holiday kickback with Food, Fun, & Some Information.   </div>
                            <div className="arrow right"/>
                        </Link>                       
                    </div>
                </div>

                <div className="body-section quote">
                    <div className="quote-txt">Not everybody can be famous but everybody can be great because greatness is determined by service… You only need a heart full of grace and a soul generated by love.</div>
                    <div className="info">Martin Luther King Jr.</div>
                </div>

                <div className="body-section split">
                    <div className="split-content">
                        <div className="img-container c4"><img src={img1} alt="about image" /></div>
                        <Link to="/aboutUs" className="text-content">
                            <h2>Who We Are?</h2>
                            <div className="text">
                                <div className="txt-info">More information about who Black Minds For Humanity is along with our mission.</div>
                                <div className="arrow right"/>
                            </div>
                        </Link>
                    </div>

                    <div className="split-content reverse">
                        <div className="img-container c2"><img src={img2} alt="event image" /></div>
                        <Link to="/juneteenth" className="text-content">
                            <h2>Juneteenth</h2>
                            <div className="text">
                                <div className="txt-info">Get More information about the holiday and ways you can help us celebrate the legacy of this day.</div>
                                <div className="arrow right"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
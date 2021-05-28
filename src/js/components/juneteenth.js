import React, { Component } from 'react';
import { Link } from "react-router-dom";

/* Images */
import back from '../../assets/stock1.jpg';
import img1 from '../../assets/juneteenth.jpg';

class Juneteenth extends Component{
    constructor(props) {
        super(props);
        this.state = {}

        this.scrollPage = this.scrollPage.bind(this);
    }  

    scrollPage(sId){
        try {
            let el = document.getElementsByClassName("app-container");            

            if(el.length > 0 && (!sId && window.location.href.indexOf("#") <= 0)){
                el[0].scrollTop = 0;
            }
            else if(el.length > 0 && (sId || window.location.href.indexOf("#") > 0)){
                let urlStr = window.location.href.split("#");
                let id = document.getElementById((sId || urlStr[1]));

                if(id) { el[0].scrollTop = id.offsetTop; }
                else { el[0].scrollTop = 0; }
            }
        }
        catch(ex){
            console.log("[Error] Scrolling to id: ",ex);
        }
    }

    componentDidMount(){ 
        this.scrollPage(null);
    }
    
    render(){  
        return(
            <div className="page-body juneteenth">
                <Link to="/" className="home-link"><i className="fas fa-home"/><span>B.M.F.H.</span></Link>
                <div className="body-section no-padding sub-landing">
                    <div className="img-container"><img src={back} alt="juneteenth background photo" /></div>

                    <div className="content-section title move-left">
                        <h1>Juneteenth</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="content-section grid">
                        <div className="grid-row sz-6">
                            <div className="grid-col horizontal c1 move-top">
                                <div className="fact"><span className="lrg">2</span><span>years</span></div>
                                <p>Dating back to <span>1865</span>, it was on June 19th that the Union soldiers, led by Major General Gordon Granger, landed at <span>Galveston, Texas</span> with news that the war had ended and that the enslaved were now free.  Note that this was two and a half years after President Lincoln’s <span>Emancipation Proclamation</span> - which had become official January 1, <span>1863</span>.</p>
                            </div>
                        </div>
                        <div className="grid-row">
                            <Link to="#event" className="grid-col c4 link move-bottom" onClick={() => this.scrollPage("event")}>
                                <p>Come help us celebrate the holiday at our kick-back event full of Food, Fun, & Fellowship.</p>
                                <div className="text">
                                    <div className="txt-info">Juneteenth Event</div>
                                    <div className="arrow right"/>
                                </div>
                            </Link>
                            <Link to="/support#connect" className="grid-col c2 link move-right">
                                <p>As we aim to spread the spirit of the holiday throughout the year learn how you can get connected to our future initiatives. </p>
                                <div className="text">
                                    <div className="txt-info">Get Connected</div>
                                    <div className="arrow right"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="body-section event" id="event">
                    <div className="title">
                        <h2>Juneteenth Kickback</h2>
                        <div className="sub-info address"><span>123 Wilson Rd., Gaithersburg, MD. 20878</span></div>
                        <div className="sub-info date"><span>Sat. 06.19</span><span>2pm - 7pm</span></div>
                    </div>

                    <div className="split">
                        <div className="split-item img-container c3"><img src={img1} alt="event image" /></div>
                        <div className="split-item text">
                            <h3>Food, Fun, Fellowship</h3>
                            <p>Come out and enjoy a fun filled afternoon focused around uplifting ourselves within the community!</p>
                            <p>Featuring: Music, Games, and Prizes!</p>
                            <ul>
                                <li>Food & Drinks provided by Pot Liqueur & Trap Chicken</li>
                                <li>Maryland Medical and Recreational Cannabis Registration</li>
                                <li>Prime America Life Insurance</li>
                                <li>And so much more!</li>
                            </ul>
                            <p>Ticket Purchase Includes:</p>
                            <ul>
                                <li>A Complimentary Cocktail</li>
                                <li>Lunch</li>
                                <li>A Raffle Ticket</li>
                            </ul>
                            <p className="split-list">
                                <span>Single Ticket: $15</span>
                                <span>2 Person Ticket: $25</span>
                            </p>  
                            <p className="mini">* Children 10 & under free of charge</p>                         
                        </div>

                        <div className="btn-block c4">
                            <div className="block-title">RSVP</div>
                            <div className="arrow right"/>
                        </div>
                    </div>
                </div>

                <div className="body-section details">
                    <div className="title">
                        <h2>Details</h2>
                    </div>

                    <div className="no-details"><div /><div /><div /></div>
                </div>
            </div>
        );
    }
}
export default Juneteenth;
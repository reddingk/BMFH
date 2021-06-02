import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

/* Images */
import back from '../../assets/stock1.jpg';
import img1 from '../../assets/juneteenth.jpg';

class Juneteenth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            details:[
                {"component":"Photo", "title":"Trap Chicken", "image": "../imgs/gallery/trapChicken.png" },
                {"component":"Photo", "title":"Canamo", "image": "../imgs/gallery/Canamo.png" },
                { "component":"Photo", "title":"Pot Liqueor", "image": "../imgs/gallery/potLiq.jpg" }
            ],
            responsivePhoto: {
                0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }
            }
        }

        this.buildPhotoList = this.buildPhotoList.bind(this);
        this.scrollPage = this.scrollPage.bind(this);
    }  

    buildPhotoList(){
        try {
            if(this.state.details.length > 0) {
                return(                    
                    this.state.details.map((detail,i) => (
                        <div className="detail-item" key={i}>
                            {detail.component === "Photo" ?
                                <img src={detail.image} alt={(detail.title ? detail.title : "Detail "+i)}/>
                                : <div />
                            }
                            <div className="item-title">{detail.title}</div>
                        </div>
                    ))                    
                )
            }
            else {
                return(<div className="no-photo"/>)
            }
        }
        catch(ex){
            console.log("Error building photo list: ",ex);
        }        
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
                        <p>Also known as Freedom Day, Jubilee Day, Liberation Day, and Emancipation Day; Juneteenth is a holiday celebrating the emancipation of those who had been enslaved in the United States.  We celebrate this day by continuing the passing of positive information as well as giving back to our community.</p>
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
                        <h2>Vendors</h2>
                    </div>

                    {(this.state.details.length > 0 ?
                        <div className="detail-gallery">
                            <AliceCarousel className="photo-scroller" items={this.buildPhotoList()}
                                autoPlayInterval={7000} disableDotsControls disableButtonsControls mouseTracking infinite
                                responsive={this.state.responsivePhoto} ref={(el) => this.photoCarousel = el }/>
                            
                            <div className="scroll-ctrl">
                                <div className="ctrl-item left" onClick={() => this.photoCarousel.slidePrev()}><i className="fas fa-chevron-left"/></div>
                                <div className="ctrl-item right" onClick={() => this.photoCarousel.slideNext()}><i className="fas fa-chevron-right"/></div>
                            </div>
                        </div>
                        : <div className="no-details"><div /><div /><div /></div>
                    )}
                    
                </div>
            </div>
        );
    }
}
export default Juneteenth;
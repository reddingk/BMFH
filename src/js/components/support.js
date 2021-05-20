import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

/* Components */
import GetConnectedForm from '../shared/getConnectedForm';
import YourThoughtsForm from '../shared/yourThoughtsForm';

/* Images */
import back from '../../assets/stock3.jpg';

class Support extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photoGallery:[
                {"component":"Photo", "image": "../imgs/gallery/drive1.JPG" },
                {"component":"Photo", "image": "../imgs/gallery/water1.JPG" },{ "component":"Photo", "image": "../imgs/gallery/water2.JPG" },
                {"component":"Photo", "image": "../imgs/gallery/water3.JPG" },{ "component":"Photo", "image": "../imgs/gallery/water4.JPG" }
            ],
            responsivePhoto: {
                0: { items: 1 }, 600: { items: 2 }, 1024: { items: 2 }
            },
            selForm: 0
        }

        /* Functions */
        this.buildPhotoList = this.buildPhotoList.bind(this);
    }  

    buildPhotoList(){
        try {
            if(this.state.photoGallery.length > 0) {
                return(                    
                    this.state.photoGallery.map((photo,i) => (
                        <div className="photo-item" key={i}>
                            {photo.component === "Photo" ?
                                <img src={photo.image} alt={(photo.title ? photo.title : "Funeral Home "+i)}/>
                                : <iframe title="buzzfeed-video" src={photo.url}/>
                            }
                        </div>
                    ))                    
                )
            }
            else {
                return(
                    [0,1,2,3,4].map((item,i) =>(
                        <div className="photo-item empty" key={i}><div className="no-photo"/></div>
                    ))
                )
            }
        }
        catch(ex){
            console.log("Error building photo list: ",ex);
        }        
    }

    componentDidMount(){ 
        let el = document.getElementsByClassName("app-container"); el[0].scrollTop = 0; 
    }
    
    render(){  
        return(
            <div className="page-body support">
                <Link to="/" className="home-link"><i className="fas fa-home"/><span>B.M.F.H.</span></Link>
                <div className="body-section no-padding sub-landing">
                    <div className="img-container"><img src={back} alt="support background photo" /></div>

                    <div className="content-section title move-left">
                        <h1>How To Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="content-section grid">
                        <div className="grid-row no-flex">
                            <Link to="#connect" className="grid-col c2 link move-bottom">
                                <p>As we aim to spread the spirit of the holiday throughout the year learn how you can get connected to our future initiatives. </p>
                                <div className="text">
                                    <div className="txt-info">Get Connected</div>
                                    <div className="arrow right"/>
                                </div>
                            </Link>
                            <Link to="#yourChange" className="grid-col c3 link move-right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="text">
                                    <div className="txt-info">What You Want To See</div>
                                    <div className="arrow right"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="body-section no-padding gallery">
                    <div className="text">
                        <h2>Helping Hands</h2>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                    </div>
                    <div className="image-gallery">
                        <AliceCarousel className="photo-scroller" items={this.buildPhotoList()}
                            autoPlayInterval={7000} disableDotsControls disableButtonsControls mouseTracking infinite
                            responsive={this.state.responsivePhoto} ref={(el) => this.photoCarousel = el }/>
                        
                        <div className="scroll-ctrl">
                            <div className="ctrl-item left" onClick={() => this.photoCarousel.slidePrev()}><i className="fas fa-chevron-left"/></div>
                            <div className="ctrl-item right" onClick={() => this.photoCarousel.slideNext()}><i className="fas fa-chevron-right"/></div>
                        </div>
                    </div>
                </div>

                <div className="body-section no-padding form">
                    <div className="form-tab-container">
                        <div className={"form-tab" + (this.state.selForm === 0 ? " sel" : "")} onClick={() => this.setState({ selForm: 0 })}><i className="fas fa-plug"/>Get Connected</div>
                        <div className={"form-tab" + (this.state.selForm === 1 ? " sel" : "")} onClick={() => this.setState({ selForm: 1 })}><i className="fas fa-lightbulb" />Your Thoughts</div>
                    </div>

                    <div className="form-content">
                        {(this.state.selForm === 0 && <GetConnectedForm />)}
                        {(this.state.selForm === 1 && <YourThoughtsForm />)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Support;
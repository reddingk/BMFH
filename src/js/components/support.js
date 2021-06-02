import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

/* Components */
import GetConnectedForm from '../shared/getConnectedForm';
import YourThoughtsForm from '../shared/yourThoughtsForm';

/* Images */
import back from '../../assets/stock3.jpg';

const baseUrl = (window.location.href.indexOf("localhost") > -1 ? "http://localhost:1001" : "");

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
        this.scrollPage = this.scrollPage.bind(this);
        this.buildPhotoList = this.buildPhotoList.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }  

    scrollPage(sId){
        try {
            let el = document.getElementsByClassName("app-container");            

            if(el.length > 0 && (!sId && window.location.href.indexOf("#") <= 0)){
                el[0].scrollTop = 0;
            }
            else if(el.length > 0 && (sId || window.location.href.indexOf("#") > 0)){
                let urlStr = window.location.href.split("#");
                let selId = (sId || urlStr[1]);
                this.setState({ selForm: (selId === "thoughts" ? 1 : 0) }, ()=>{
                    let id = document.getElementById(selId);

                    if(id) { el[0].scrollTop = id.offsetTop; }
                    else { el[0].scrollTop = 0; }
                });                
            }
        }
        catch(ex){
            console.log("[Error] Scrolling to id: ",ex);
        }
    }

    buildPhotoList(){
        try {
            if(this.state.photoGallery.length > 0) {
                return(                    
                    this.state.photoGallery.map((photo,i) => (
                        <div className="photo-item" key={i}>
                            {photo.component === "Photo" ?
                                <img src={photo.image} alt={(photo.title ? photo.title : "Gallery Item "+i)}/>
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

    validateForm(type, data){
        var ret = true;
        try {
            if(data.name.length <= 0) {
                return false;
            }
            else if(data.contact.length <= 0 || (type == "connections" && data.contact.indexOf("@") <= 0)) {
                return false;
            }
            else if(data.interest.length <= 0) {
                return false;
            }
        }
        catch(ex){
            console.log("[Error] Validating Form: ",ex);
            ret = false;
        }

        return ret;
    }

    componentDidMount(){ this.scrollPage(null); }
    
    render(){  
        return(
            <div className="page-body support">
                <Link to="/" className="home-link"><i className="fas fa-home"/><span>B.M.F.H.</span></Link>
                <div className="body-section no-padding sub-landing">
                    <div className="img-container"><img src={back} alt="support background photo" /></div>

                    <div className="content-section title move-left">
                        <h1>How To Support</h1>
                        <p>Working in the spirit of helping one another we honor this holiday through the year by continuing to serve our community and help others.  With this we are always looking for individuals as well as idea's that will help us to complete this mission.</p>
                    </div>
                    <div className="content-section grid">
                        <div className="grid-row no-flex">
                            <Link to="#connect" className="grid-col c2 link move-bottom" onClick={() => this.scrollPage("connect")}>
                                <p>As we aim to spread the spirit of the holiday throughout the year learn how you can get connected to our future initiatives. </p>
                                <div className="text">
                                    <div className="txt-info">Get Connected</div>
                                    <div className="arrow right"/>
                                </div>
                            </Link>
                            <Link to="#thoughts" className="grid-col c3 link move-right" onClick={() => this.scrollPage("thoughts")}>
                                <p>The best way to help is get insight into what people are asking for, so we are looking for great ideas that we can support.</p>
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
                        <p>A picture can often say 1000 words, you will see some of the work we have do so far and some of those that have helped us.</p>
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
                        <div className={"form-tab" + (this.state.selForm === 1 ? " sel" : "")} onClick={() => this.setState({ selForm: 1 })}><i className="fas fa-lightbulb" />What You Want To See</div>
                    </div>

                    <div className="form-content">
                        {(this.state.selForm === 0 && <GetConnectedForm validateForm={this.validateForm} baseUrl={baseUrl} />)}
                        {(this.state.selForm === 1 && <YourThoughtsForm validateForm={this.validateForm} baseUrl={baseUrl} />)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Support;
import React, { Component } from 'react';

/* Images */
import back from '../../assets/stock1.jpg';

class Juneteenth extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }  

    componentDidMount(){ }
    render(){  
        return(
            <div className="page-body juneteenth">
                <div className="body-section no-padding landing">
                    <div className="img-container"><img src={back} alt="juneteenth background photo" /></div>

                    <div className="content-section title">
                        <h1>Juneteenth</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="content-section grid">
                        <div className="grid-row sz-6">
                            <div className="grid-col horizontal c1">
                                <div className="fact"><span className="lrg">2</span><span>years</span></div>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="grid-col c2">
                                <p>Come help us celebrate the holiday at our kick-back event full of Food, Fun, & Fellowship.</p>
                                <div className="text">
                                    <div className="txt-info">Juneteenth Event</div>
                                    <div className="arrow right"/>
                                </div>
                            </div>
                            <div className="grid-col c4">
                                <p>As we aim to spread the spirit of the holiday throughout the year learn how you can get connected to our future initiatives. </p>
                                <div className="text">
                                    <div className="txt-info">Get Connected</div>
                                    <div className="arrow right"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Juneteenth;
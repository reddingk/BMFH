import React, { Component } from 'react';
import axios from 'axios';
import LoadSpinner from './loadSpinner';

class GetConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"", contact:"", interest:"",
            formStatus: 0, loading: false
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }  

    handleFormChange(e){
        try {
            var name = e.target.name;
            var value = e.target.value;

            this.setState({ [name]: value });            
        }
        catch(ex){
            console.log("[Error] handling form change data: ",ex);
        }
    }

    submitForm(){
        var self = this;
        try {
            var tmpData = {name:self.state.name, contact:self.state.contact, interest:self.state.interest };
            
            if(!this.props.validateForm("connections", tmpData)) {
                alert("Please Check That All Fields Are Filled In.");
            }
            else{
                this.setState({ loading: true }, () =>{
                    var getHeaders = { 'Content-Type': 'application/json'};
                    var postData = { "type": "connections", "data":tmpData };

                    axios.post(self.props.baseUrl + "/api/submitForm", postData, { headers: getHeaders })
                    .then(function(response) {
                        if(response.data.error){
                            console.log(" [Error] Sumiting Form: ", response.data.error);
                            self.setState({ loading: false });
                        }
                        else {
                            self.setState({ loading: false, formStatus: 1 });                                                  
                        }
                    });    
                });
            }
        }
        catch(ex){
            console.log("[Error] Submitting Form: ",ex);
        }
    }

    componentDidMount(){ }
    
    render(){  
        return(
            <div className="support-form" id="connect">
                {this.state.loading && <LoadSpinner userClass="base" /> }
                <h1 className="title">Get Connected</h1>
                {this.state.formStatus == 0 &&
                    <div className="base-form">
                        <div className="form-input sz-5">
                            <div className="form-title">Name</div>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} />
                        </div>

                        <div className="form-input sz-5">
                            <div className="form-title">Email</div>
                            <input type="text" name="contact" value={this.state.contact} onChange={this.handleFormChange} />
                        </div>

                        <div className="form-input sz-10">
                            <div className="form-title">Interest Level</div>
                            <div className="radio-container">
                                <label><input type="radio" name="interest" value="high" checked={this.state.interest === 'high'} onChange={this.handleFormChange} />Ready To Help Where I Can</label>
                                <label><input type="radio" name="interest" value="mild" checked={this.state.interest === 'mild'} onChange={this.handleFormChange} />Definately Interested</label>
                                <label><input type="radio" name="interest" value="low" checked={this.state.interest === 'low'} onChange={this.handleFormChange} />Keep My Updated</label>
                            </div>                        
                        </div>
                    </div>
                }

                {this.state.formStatus == 0 &&
                    <div className="btn-block c4" onClick={this.submitForm}>
                        <div className="block-title">Submit</div>
                        <div className="arrow right"/>
                    </div>
                }

                {this.state.formStatus == 1 &&
                    <div className="completed">Thank you for your feedback!</div>
                }
            </div>
        );
    }
}
export default GetConnectedForm;
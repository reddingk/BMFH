import React, { Component } from 'react';
import axios from 'axios';
import LoadSpinner from './loadSpinner'

class YourThoughtsForm extends Component{
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
            
            if(!this.props.validateForm("ideas", tmpData)) {
                alert("Please Check That All Fields Are Filled In.");
            }
            else{
                this.setState({ loading: true }, () =>{
                    var getHeaders = { 'Content-Type': 'application/json'};
                    var postData = { "type": "ideas", "data":tmpData };

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
            <div className="support-form" id="thoughts">
                {this.state.loading && <LoadSpinner userClass="base" /> }
                <h1 className="title">What You Want To See</h1>

                {this.state.formStatus == 0 &&
                    <div className="form-sentence">
                        <span>Hey, my name is</span>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} />
                        <span>and you can get in touch with me at</span>
                        <input type="text" name="contact" value={this.state.contact} onChange={this.handleFormChange} />
                        <span>a project that I am interested in seeing is</span>
                        <input type="text" name="interest" value={this.state.interest} onChange={this.handleFormChange} />
                        <span>.</span>
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
export default YourThoughtsForm;
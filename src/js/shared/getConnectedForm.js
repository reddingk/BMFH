import React, { Component } from 'react';


class GetConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"", email:"", interest:""
        }

        this.handleFormChange = this.handleFormChange.bind(this);
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

    componentDidMount(){ }
    
    render(){  
        return(
            <div className="support-form" id="connect">
                <h1 className="title">Get Connected</h1>
                <div className="base-form">
                    <div className="form-input sz-5">
                        <div className="form-title">Name</div>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} />
                    </div>

                    <div className="form-input sz-5">
                        <div className="form-title">Email</div>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleFormChange} />
                    </div>

                    <div className="form-input sz-10">
                        <div className="form-title">Interest Level</div>
                        <div className="radio-container">
                            <label><input type="radio" name="interest" value="option1" checked={this.state.interest === 'option1'} onChange={this.handleFormChange} />Ready To Help Where I Can</label>
                            <label><input type="radio" name="interest" value="option2" checked={this.state.interest === 'option2'} onChange={this.handleFormChange} />Definately Interested</label>
                            <label><input type="radio" name="interest" value="option3" checked={this.state.interest === 'option3'} onChange={this.handleFormChange} />Keep My Updated</label>
                        </div>                        
                    </div>
                </div>

                <div className="btn-block c4">
                    <div className="block-title">Submit</div>
                    <div className="arrow right"/>
                </div>
            </div>
        );
    }
}
export default GetConnectedForm;
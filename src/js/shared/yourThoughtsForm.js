import React, { Component } from 'react';


class YourThoughtsForm extends Component{
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
            <div className="support-form" id="thoughts">
                <h1 className="title">What You Want To See</h1>

                <div className="form-sentence">
                    <span>Hey, my name is</span>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleFormChange} />
                    <span>and you can get in touch with me at</span>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleFormChange} />
                    <span>a project that I am interested in seeing is</span>
                    <input type="text" name="interest" value={this.state.interest} onChange={this.handleFormChange} />
                    <span>.</span>
                </div>

                <div className="btn-block c4">
                    <div className="block-title">Submit</div>
                    <div className="arrow right"/>
                </div>
            </div>
        );
    }
}
export default YourThoughtsForm;
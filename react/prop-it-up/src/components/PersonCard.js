import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.LastName}, {this.props.FirstName}</h1>
                <p>Age: {this.props.Age}</p>
                <p>Hair Color: {this.props.HairColor}</p>
            </div>
        )
    }
}

export default PersonCard;
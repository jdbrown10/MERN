import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render(){
        const increaseCount = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <div>
                <h1>{this.props.LastName}, {this.props.FirstName}</h1>
                <p>Age: {parseInt(this.props.Age) + parseInt(this.state.count)}</p>
                <p>Hair Color: {this.props.HairColor}</p>
                <button onClick={increaseCount}>Birthday Button for {this.props.FirstName} {this.props.LastName}</button>
            </div>
        )
    }
}

export default PersonCard;
import {React,Component} from 'react';


class Bike extends Component {
    constructor(props){
        super();
        this.state = {
            greet: true
        };
    }

    componentDidMount() {
        console.log("called did mount");
        this.setState((currentState) => {
            return {
              greet : !currentState.greet
            };
        })
    }
    shouldComponentUpdate(){
        console.log("stop rerendering of component", this.state.greet);
        return false;
    }
   componentDidUpdate() {
       console.log("callled did updated",this.state.greet);
   }
   componentWillUnmount() {
       console.log("component destroyed");
   } 

    render() {
        return(
        <li>
                     <div>{this.props.bikeName}</div>
                     <div>{this.props.bikeModel}</div>
                   </li>)
    }
}

export default Bike;
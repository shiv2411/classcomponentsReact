import {React,Component} from 'react';


class Bike extends Component {
    constructor(props){
        super();
        this.state = {
            greet: true
        };
    }

    componentDidMount() {
        console.log("called did mount");   ///mounting of components. called just after the redering of the UI.it gets called only once.
        this.setState((currentState) => {
            return {
              greet : !currentState.greet
            };
        })
    }

    static getDerivedStateFromProps(props,state) {
        console.log(props,state);                          //called everytime before rendering and rerendering of component. it takes the current props and state, and return the object with the new states which can be passed by props.
        return {
            greet : props.greet
        }
    }

    shouldComponentUpdate(){
        console.log("stop rerendering of component", this.state.greet);
        return true; //false in case if you dont want to rerender the component
    }

  getSnapshotBeforeUpdate(prevProps,prevState) {
    return document.getElementById('prevState').innerHTML = `The previous state was ${prevState.greet}`;
  }           //gets access to prevstate and props just before the updation of DOM.

   componentDidUpdate() {
       console.log("callled did updated",this.state.greet);
       return document.getElementById('currentState').innerHTML = `The current state is ${this.state.greet}`;
   }
   componentWillUnmount() {
       console.log("component destroyed");
   } 

    render() {
        console.log(this.state);
        return(
        <li>
            <div>{this.state.greet}</div>
                     <div>{this.props.bikeName}</div>
                     <div>{this.props.bikeModel}</div>
                     <div id="prevState"></div>
                     <div id = "currentState"></div>
                   </li>)
    }
}

export default Bike;
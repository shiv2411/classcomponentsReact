import React,{Component} from 'react';
import Bikes from './Bikes';
import ErrorBoundaries from './ErrorBoundaries';
const DummyBikes = [
    {sNo: 1, name : 'activa', engine : '125cc'},
    {sNo:2,name : 'pulsar', engine : '220cc'},
    {sNo:3,name : 'royal enfield', engine : '350cc'},
    {sNo:4,name : 'apache', engine : '250cc'},
  ]

class BikeFinder extends Component {
    constructor(props) {
     super(props);
     this.state = {
         searchItems : '',
         filteredBikes : DummyBikes,
     }
     this.inputFocus = React.createRef();
    }
 
 searchChangeHandler(e) {
     this.setState((currentState) => {
         return {
             searchItems : e.target.value
         }
     });
 }

 componentDidMount() {
   this.inputFocus.current.focus();     //ref used to access the DOM element. 
 }

componentDidUpdate(prevProps,prevState) {
    if(prevState.searchItems !== this.state.searchItems){
    this.setState((currentState) => {
        return {
            filteredBikes : DummyBikes.filter((bikes) => {
                if(bikes.name.includes(this.state.searchItems) || bikes.engine.includes(this.state.searchItems)){
                    return bikes;
                }
})
        }
    })
}
}

    render() {
        return(
            <>
            <input type ="search" ref={this.inputFocus} placeholder='Search bike' onChange={this.searchChangeHandler.bind(this)}/>
            <ErrorBoundaries>
            <Bikes bikes = {this.state.filteredBikes}/>
            </ErrorBoundaries>
            </>
        )
    }
}

export default BikeFinder;
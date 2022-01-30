import {React,Component} from 'react';
import Bike from './Bike';

class Bikes extends Component {

    constructor(props) {
    super(props);
    this.state = {
        showBike : true
    }
    }
    /*
 componentDidMount() {
     console.log("hua mount");
 }

 componentDidUpdate(){
     console.log("hua update");
 } */


    render() {
        const BikesList = (
            <ul>
                {this.props.bikes.map((bike) => (
                    <Bike key={bike.sNo} bikeName = {bike.name} bikeModel ={bike.engine} />
                ))}
            </ul>
        );
        const handleToggle = function() {
            this.setState({
              showBike : !this.state.showBike
            });
           }
             return (
               <div className='container'>I am a class component
                <button onClick={handleToggle.bind(this)}> {this.state.showBike ? 'Hide' : 'Show'} Bikes </button>
                 {this.state.showBike ? BikesList : <div>Bikes hidden</div> }
               </div>
             )
           }
    }

    export default Bikes;
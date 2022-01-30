import {React,Component} from 'react';
import Bike from './Bike';
const DummyBikes = [
    {sNo: 1, name : 'activa', engine : '125cc'},
    {sNo:2,name : 'pulsar', engine : '220cc'},
    {sNo:3,name : 'royal enfield', engine : '350cc'},
    {sNo:4,name : 'apache', engine : '250cc'},
  ]
class Bikes extends Component {

    constructor() {
    super();
    this.state = {
        showBike : true
    }
    }
 componentDidMount() {
     console.log("hua mount");
 }

 componentDidUpdate(){
     console.log("hua update");
 }


    render() {
        const BikesList = (
            <ul>
                {DummyBikes.map((bike) => (
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
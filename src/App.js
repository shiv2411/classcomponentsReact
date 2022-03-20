import {React, Component} from 'react';
//import Bikes from './Bikes';
import BikeFinder from './BikeFinder';
import ParentComponent from './ParentComponent';

class App extends Component {

  render() {
    return (
    <>
   {/*  <BikeFinder/>  */}
     <ParentComponent/>
    </>
    )
  }
}

export default App;


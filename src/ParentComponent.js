import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
   constructor() {
    super();
    this.state = {
        message : 'Hello Child'
    }
   }
  render() {
      const onGreet = (msg) => {
          console.log(msg);
      }
    return (
        <>
      <div>{this.state.message}</div>
      <ChildComponent onGreet = {onGreet}/>
</>
    )
  }
}

export default ParentComponent
import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: 'hello parent'
    }
    }
    
  render() {
      const {onGreet} = this.props;
      const greet = () => {
         onGreet(this.state.name);
      }
    return (
          <button onClick={greet}>Greet Parent</button>
    )
  }
}

export default ChildComponent
import React from 'react';

class MyComp extends React.Component {
  // we use the constructor to set the INITIAL STATE which is 0
  // we set the initial state in the constructor because it runs first
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  // our increment method makes use of the 'setState' method,
  // which is what we use to alter state
  increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div onClick={this.increment}>
      {this.state.count}
      </div>
    )
  }
}

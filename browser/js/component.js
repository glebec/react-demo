import React from 'react';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clickNum: 0
    };
    this.incrementClicks = this.incrementClicks.bind(this);
  }
  incrementClicks () {
    Promise.resolve(5)
    .then(result => {
      this.setState(previousState => {
        return {
          clickNum: previousState.clickNum + result
        };
      });
    });
  }
  componentDidMount () {
    this.setState({
      clickNum: this.state.clickNum + 1
    });
  }
  render () {
    const greeting = this.props.name[0] === 'G' ? 'Yo' : 'Salutations';
    return (
      <div>
        <h1 onClick={this.incrementClicks}>
          {greeting}, {this.props.name}
        </h1>
        <p>You are {this.props.age || 'unknown'} years old</p>
        <p>You have been clicked {this.state.clickNum} times</p>
      </div>
    );
  }
}

export default Main;

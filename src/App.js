import React, { Component } from 'react';
import Calendar from 'react-calendar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Calendar Database</h1>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
      </div>
    );
  }
}

export default App;

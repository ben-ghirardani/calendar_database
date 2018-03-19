import React, { Component } from 'react';
import Calendar from 'react-calendar';
import MessageForm from './MessageForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: "",
      month: "",
      dayNum: "",
      year: ""
    }
  }

  onChange = date => this.setState({ 
    date,
    day: date.toString().slice(0, 3),
    month: date.toString().slice(4, 7),
    dayNum: date.toString().slice(8, 10),
    year: date.toString().slice(11, 15)
   })

  formatDateString(dateString){
    let newFormat = dateString.toString().slice(0, 15);
    return newFormat;
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Calendar Database</h1>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          <div className="date-string">
            {this.formatDateString(this.state.date)}
          </div>
          <MessageForm/>
      </div>
    );
  }
}

export default App;
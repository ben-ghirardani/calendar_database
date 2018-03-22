import React, { Component } from 'react';
import Calendar from 'react-calendar';
import MessageForm from './MessageForm';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: "",
      month: "",
      dayNum: "",
      year: "",
      data: []
    };
    this.loadMessagesFromServer = this.loadMessagesFromServer.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    // loadsMessagesFromServer will take all the objects from the server and put them into the 'data' array,
    // need to create a method (either add to the onChange method or incorporate method into) that matches the day/month/year
    // of the current selection, and checks the data array for a match, and displays the results.  
  }

  loadMessagesFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({data: res.data});
      })
  }

  handleMessageSubmit(message) {
    // add POST request
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

  componentDidMount() {
    this.loadMessagesFromServer();
    setInterval(this.loadMessagesFromServer, this.props.pollInterval);
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
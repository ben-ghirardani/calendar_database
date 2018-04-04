import React, { Component } from 'react';
import Calendar from 'react-calendar';
import MessageForm from './MessageForm';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: new Date().toString().slice(0, 3),
      dayNum: new Date().toString().slice(8, 10),
      month: new Date().toString().slice(4, 7),
      year: new Date().toString().slice(11, 15),
      data: [],
      messageID: ""
    };
    this.loadMessagesFromServer = this.loadMessagesFromServer.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    // loadsMessagesFromServer will take all the objects from the server and put them into the 'data' array,
    // need to create a method (either add to the onChange method or incorporate method into) that matches the day/month/year
    // of the current selection, and checks the data array for a match, and displays the results.  

    // pass "message" and "amount" from state into <MessageForm/> as props. Value of the two inputs will match "message" and 
    // "amount", which will come from the database or be blank.
  }

  loadMessagesFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({data: res.data});
      })
  }

  handleMessageSubmit(message) {
    let messages = this.state.data;
    // create a concat method to go in onChange to concat day,month,year
    message.id = 

    axios.post(this.props.url, message)
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => {
        console.error(err);
      })
  }

  onChange = date => this.setState({ 
    date,
    day: date.toString().slice(0, 3),
    dayNum: date.toString().slice(8, 10),
    month: date.toString().slice(4, 7),
    year: date.toString().slice(11, 15),
    messageID: date.toString().slice(0, 3)+date.toString().slice(8, 10)+date.toString().slice(4, 7)+date.toString().slice(11, 15)
   })

  formatDateString(dateString){
    let newFormat = dateString.toString().slice(0, 15);
    return newFormat;
  }

  componentDidMount() {
    this.loadMessagesFromServer();
    setInterval(this.loadMessagesFromServer, this.props.pollInterval);
    this.setState({
      messageID: this.state.day+this.state.dayNum+this.state.month+this.state.year 
    })
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
          <MessageForm
            onMessageSubmit={this.handleMessageSubmit}
            day={this.state.day}
            month={this.state.month}
            dayNum={this.state.dayNum}
            year={this.state.year}
          />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

class MessageForm extends Component {

  constructor(props){
      super(props);
      this.state = {
          message: "",
          amount: ""
      };
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageChange(e){
      this.setState({ message: e.target.value })
  }

  handleAmountChange(e){
      this.setState({ amount: e.target.value })
  }

  handleSubmit(e){
      e.preventDefault();
      console.log("submit button was pressed")
  }

  render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter message"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
          <input
            placeholder="enter amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <input
            type="submit"
            value="Post"
          />
        </form>
      )
  }

}

export default MessageForm;
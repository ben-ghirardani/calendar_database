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
      let message = this.state.message.trim();
      let amount = this.state.amount.trim();
        if(!message || !amount) {
          return;
        }
        // do I need to include all the other elements from message.js ****************
      this.props.onCommentSubmit({message: message, amount: amount}); 
      this.setState({message: "", amount: ""}); 
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
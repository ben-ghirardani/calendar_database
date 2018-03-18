import React, { Component } from 'react';

class MessageForm extends Component {

  constructor(props){
      super(props);
      this.state = {
          message: ""
      };
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }



}

export default MessageForm;
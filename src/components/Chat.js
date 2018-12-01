import React, { Component } from 'react';
import './css/Chat.css';
import axios from 'axios';

class Chat extends Component{

	constructor(props){
	    super(props);
	    this.state={
	      name:[],
	      portrait:[],
	      message:[],
	      displayLeft:[],
	      time:[]
	    }
	  this.insertMessage = this.insertMessage.bind(this);
	  }

	componentDidMount(){

		axios.get('http://dev.4all.com:3050/messages')
        .then(res => {
          const chatData = res.data;
          let name=[];
          let portrait=[];
          let message=[];
          let displayLeft=[];
          let time=[];
          chatData.forEach(element => {
          	name.push(element.userName);
          	portrait.push(element.portrait);
          	message.push(element.message);
          	displayLeft.push(element.displayPortraitLeft);
          	time.push(element.time);
          });
        this.setState({
				name: name,
				portrait: portrait,
				message: message,
				displayLeft: displayLeft,
				time: time
        	});
         })
        
		}

		componentDidUpdate(){
			document.getElementById("scroll").scrollTop = document.getElementById("scroll").scrollHeight
		}

		createChat(){
			let chatMaker=[];
			for (var i = 0; i < this.state.name.length; i++) {
				
				chatMaker.push(<div className="container-plus">
				  <img src={this.state.portrait[i]} className={(this.state.displayLeft[i] ? 'left' : 'right')} alt="Avatar" />
				  <div>
				  <span>{this.state.name[i]}</span>&nbsp;&nbsp;
				  <span className="time">{this.state.time[i]}</span>
				  <p>{this.state.message[i]}</p>
				  </div>
				</div>)
				
			}

			return chatMaker

	}

	insertMessage(e){
		e.preventDefault(); 
		var msg = {
			userName: 'Eu',
			portrait: 'https://i.ebayimg.com/images/g/6EsAAOSwAqVZlWdE/s-l300.jpg',
			message: e.target.elements.message.value,
			displayPortraitLeft: true,
			time: '1 min ago'
		};

		axios.post('http://dev.4all.com:3050/messages', { msg })
		.then( res => {
			console.log(res);
			console.log(res.data);
		});

		this.setState({
			name: this.state.name.concat(msg.userName),
			portrait: this.state.portrait.concat(msg.portrait),
			message: this.state.message.concat(msg.message),
			displayLeft: this.state.displayLeft.concat(msg.displayPortraitLeft),
			time: this.state.time.concat(msg.time)
		});

	}



	render(){
		
		return(
		<div className="container mt-4 ml-0 p-1" id="teste" style={{backgroundColor:'white', borderRadius:'0.5%'}}>
			<div className="m-3 d-flex">
				<h4 className="mb-0">Chat</h4>
				<i className="far fa-comment-dots ml-3"></i>
				</div>
			<div className="overflow" id="scroll" style={{height:'300px'}}>
			{this.createChat()}
			</div>
			<div>
				<form className="form-inline" onSubmit={this.insertMessage}>
				<input type="text" className="form-control" name="message" style={{width:'90%'}} placeholder="Type your message here." />
				<button className="btn btn-success" type="submit">Send</button>
				</form>
			</div>

			</div>

			
			)
	}
}

export default Chat;
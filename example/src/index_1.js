import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var Hi = React.createClass({
	render: function() {
		return (
			<div>
				<h2>This is a component!</h2>
				<p>I am some text</p>	
			</div>
			
		);
	}
});

var PropsDemo_Movie = React.createClass({
	render: function(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.genre}</h2>
			</div>
		);
	}
});

var ChildDemo_Comment = React.createClass({
	edit: function(){
		alert('Editing comment');
	},
	remove: function(){
		alert('Removing comment');
	},
	render: function(){
		return (
			<div className="commentContainer">
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="btn-blue">Edit</button>
				<button onClick={this.remove} className="btn-red">Remove</button>
			</div>
		);
	}
});

var AddingStateDemo_Comment = React.createClass({
	getInitialState: function(){
		return {
			editing: false
		}
	},
	edit: function(){
		this.setState({editing: true});
	},
	remove: function(){
		console.log('Removing comment');
	},
	save: function(){
		this.setState({editing: false});
	},

	renderNormal: function(){
		return (
			<div className="commentContainer">
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="btn-blue">Edit</button>
				<button onClick={this.remove} className="btn-red">Remove</button>
			</div>
		);
	},
	renderForm: function(){
		return (
			<div className="commentContainer">
				<textarea defaultValue={this.props.children}></textarea>
				<button onClick={this.save} className="btn-gree">Save</button>
			</div>
		);
	},
	render: function(){
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}
});

var Refs_MultipleChild_Demo_Comment = React.createClass({
	getInitialState: function(){
		return {
			editing: false
		}
	},
	edit: function(){
		this.setState({editing: true});
	},
	remove: function(){
		this.props.deleteFromBoard(this.props.index);
	},
	save: function(){
		var val = this.refs.newText.value;
		this.props.updateComentText(val, this.props.index);
		this.setState({editing: false});
	},

	renderNormal: function(){
		return (
			<div className="commentContainer">
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="btn-blue">Edit</button>
				<button onClick={this.remove} className="btn-red">Remove</button>
			</div>
		);
	},
	renderForm: function(){
		return (
			<div className="commentContainer">
				<textarea ref="newText" defaultValue={this.props.children}></textarea>
				<button onClick={this.save} className="btn-gree">Save</button>
			</div>
		);
	},
	render: function(){
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}
});

var Board = React.createClass({
	getInitialState: function(){
		return {
			comments: [
				'I am A',
				'I am B',
				'I am C'
			]
		}
	},

	removeComment: function(i){
		console.log('Removing Comment: '+i);
		var arr = this.state.comments;
		arr.splice(i, 1);
		this.setState({comments: arr});
	},

	updateComment: function(newText, i){
		console.log('Update Comment:');
		var arr = this.state.comments;
		arr[i] = newText;
		this.setState({comments: arr});
	},

	eachComment: function(text, i){
		return (
			<Refs_MultipleChild_Demo_Comment key={i} index={i} updateComentText={this.updateComment} deleteFromBoard={this.removeComment}>
				{text}
			</Refs_MultipleChild_Demo_Comment>
		);
	},

	render: function(){
		return (
			<div className="board">
			  	{
			  		// this.state.comments.map(function(text, i){
			  		// 	return (
			  		// 		<Refs_MultipleChild_Demo_Comment key={i}>{text}</Refs_MultipleChild_Demo_Comment>
			  		// 	)
			  		// })
			  		
			  		this.state.comments.map(this.eachComment)
			  	}
		  </div>
		);
	}
});

var StatsDemo_CheckBox = React.createClass({
	getInitialState: function(){
		return {checked: true}
	},
	handleChecked: function(){
		this.setState({checked: !this.state.checked});
	},
	render: function(){
		var msg;
		if(this.state.checked){
			msg = 'checked';
		}else{
			msg = 'unchecked';
		}

		return (
			<div>
				<input type="checkBox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
				<h3>CheckBox is {msg}</h3>
			</div>
		);
	}
});
ReactDOM.render(
  // <div>
  //   <PropsDemo_Movie title="Avatar" genre="action" />
  //   <PropsDemo_Movie title="Captain America" genre="action" />
  //   <PropsDemo_Movie title="The Notebook" genre="romance" />
  // </div>
  
  // <div className="board">
  // 	<ChildDemo_Comment>Hey my name is A</ChildDemo_Comment>
  // 	<ChildDemo_Comment>Hey my name is B</ChildDemo_Comment>
  // 	<ChildDemo_Comment>Hey my name is C</ChildDemo_Comment>
  // </div>
  
  // <StatsDemo_CheckBox />
  
  // <div className="board">
  // 	<AddingStateDemo_Comment>Hey my name is A</AddingStateDemo_Comment>
  // 	<AddingStateDemo_Comment>Hey my name is B</AddingStateDemo_Comment>
  // 	<AddingStateDemo_Comment>Hey my name is C</AddingStateDemo_Comment>
  // </div>

  <Board />
  ,
  document.getElementById('example')
);


import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var Comment = React.createClass({
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
			<Comment key={i} index={i} updateComentText={this.updateComment} deleteFromBoard={this.removeComment}>
				{text}
			</Comment>
		);
	},

	addComment: function(text){
		var arr = this.state.comments;
		arr.push(text);
		this.setState({comments: arr});
	},

	render: function(){
		return (
			<div>
				<button onClick={this.addComment.bind(null, 'Default text')} className="btn-purple">Add New</button>
				<div className="board">
				  	{this.state.comments.map(this.eachComment)}
			  	</div>	
			</div>
			
		);
	}
});


ReactDOM.render(
  <Board />
  ,
  document.getElementById('example')
);


import React, { Component } from 'react';
class Test extends Component {
	constructor(){
		super();
		this.state = {
			height: 100
		};
		this.basicVal = {
			name: 'Jill Ho',
			age: 'Jill Ho',
			bio: 'I like play TV game.',
			pic: 'http://img.hayhaytv.com/film/22122014/doraemon-stand-by-me-2014_70751419242227.jpg'
		}
	}
	render(){
		var { name, age, bio, pic } = this.basicVal;
		var { height } = this.state;
		return (
		<div>
			<h2>{name}</h2>
			<h4>{this.addVal(1,2)}</h4>
			<h4>Age: {age}</h4>
			<h4>Bio: {bio}</h4>
			<img src={pic} height={height} />
			<br/>
			<button onClick={this.zoomPicOut.bind(this)}>-</button>
			<button onClick={this.zoomPicIn.bind(this)}>+</button>
		</div>
			
		);
	}

	addVal(_iA, _iB){
		return _iA+_iB;
	}
	zoomPicIn () {
		//設定狀態
	    this.setState({height: this.state.height + 20});
	}

	zoomPicOut () {
	    this.setState({height: this.state.height - 20});
	}
}
export default Test;
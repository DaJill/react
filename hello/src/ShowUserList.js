import React, { Component } from 'react';
import GetUserList from './component/GetUserList';
class ShowUserList extends Component {
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
		return (
			<div><ShowUserList /></div>
			
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
export default ShowUserList;
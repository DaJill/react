import React, { Component } from 'react';
// import Request from 'react-http-request';
import Request from 'superagent';
import _ from 'lodash';
 
export default class GetUserList extends Component {
  constructor(){
    super();
    this.state = {};
    this.getUserList();
  }
  getUserList(){
    var url = 'http://localhost:8088/api/user/list';
    Request.get(url).then((response)=>{
      // var aUserList = JSON.parse(JSON.stringify(response.text));
      var aUserList = JSON.parse(response.text);
      this.setState({
        UserList:aUserList
      });
    });
  }
  render() {
    //this. getUserList();
    console.log(this.state.UserList);
    // var aUserList = {};
    var aUserList = _.map(this.state.UserList, (User) => {
      // console.log(User);
        return <li>{User.UserName}</li>;
    });

    return (
      // <Request
      //   url='http://localhost:8088/api/user/list'
      //   method='get'
      //   accept='application/json'
      //   verbose={true}
      // >
      //   {
      //     ({error, result, loading}) => {
      //       if (loading) {
      //         return <div>loading...</div>;
      //       } else {
      //         return <div>{ JSON.parse(JSON.stringify(result.text)) }</div>;
      //       }
      //     }
      //   }
      // </Request>
      // 
      

      <div>
          <ul>{aUserList}</ul>
      </div>
    );
  }
}
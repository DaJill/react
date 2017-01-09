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

  delUser(_iUserID){
    var url = 'http://localhost:8088/api/user/'+_iUserID;
    Request.del(url).then((response)=>{
      // var aUserList = JSON.parse(JSON.stringify(response.text));
      var aResponse = JSON.parse(response.text);
      return aResponse;
    });
  }

  addUser(_sUserName, _sNickname, _sPassword){

  }

  render() {
    //this. getUserList();
    console.log(this.state.UserList);
    // var aUserList = {};
    var UserList = _.map(this.state.UserList, (User) => {
      var UserList_Key = "tr_key" + User.UserID;
      // console.log(User);
        return (
          <tr id={UserList_Key} key={UserList_Key}>
            <th>{User.Nickname}</th>
            <th>{User.UserName}</th>
            <th>{User.Password}</th>
            <th>
              <button>刪除</button> 
              <button>修改</button>
            </th>
          </tr>
        );
    });

    return (
      <div>
        <table>
          <tr>
            <th>暱稱</th>
            <th>帳號</th>
            <th>密碼</th>
            <th>操作</th>
          </tr>
          {UserList}
        </table>
      </div>
    );
  }
}
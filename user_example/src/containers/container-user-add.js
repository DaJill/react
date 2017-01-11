import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../actions/index';

class ContainerUserAdd extends Component {

    addUser(){
        var aUser = {
            Nickname: this.refs.newNickname.value,
            UserName: this.refs.newUserName.value,
            Password: this.refs.newPassword.value,
        }
        // aUser.UserID = 123456;
        let next = this.props.dispatch;
        this.props.dispatch(addUser(aUser));
        //let result = next(action)
        // this.props.dispatch.addUser(aUser);
        // //var a = this.getState();
        // // var a = this.store.dispatch;
        // this.props.UserList.data.unshift(aUser);
        console.log("next",next);
        console.log("state",this.props);
        // // console.log("a",a);
        // console.log("UserList",this.props.UserList.data);
        // if(!this.props.UserList.event){
        //     return null;
        // }

        // this.props.UserList.data.splice(_iIndex, 1);
    }

    render() {
        return (
        <table>
            <tbody>
              <tr>
                <th>暱稱 : </th>
                <th><input ref="newNickname" type="text" /></th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>帳號 : </th>
                <th><input ref="newUserName" type="text" /></th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>密碼 : </th>
                <th><input ref="newPassword" type="text" /></th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th><button onClick={() => this.addUser()}>新增</button></th>
              </tr>
            </tbody>
        </table>
        

        );
    }
}

// function mapStateToProps(state){
//     return {
//         UserAdd: state.UserAdd,
//         UserList: state.UserList,
//     };
// }

// function matchDispatchToProps(dispatch){
//     return bindActionCreators(
//         {
//             addUser: addUser
//         },
//         dispatch
//     );
// }
export default connect(state => state)(ContainerUserAdd)
//export default connect(mapStateToProps, matchDispatchToProps)(ContainerUserAdd);
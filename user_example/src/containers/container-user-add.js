import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../actions/index';

class ContainerUserAdd extends Component {
    // constructor(props) {
    //     super(props);

    //     // store.subscribe(() => {
    //     //   // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
    //     //   this.setState({
    //     //     items: store.getState().items;
    //     //   });
    //     // });
    // }
    createListItems(){
        if(!this.props.UserList.event){
            return null;
        }

        var aUserList = this.props.UserList.data;
        // aUserList.reverse();//由小到大
        return aUserList.map((aRowUser, iIndex) => {
            return (
            <tbody key={aRowUser.UserID}>
                <tr>
                    <th>{aRowUser.Nickname}</th>
                    <th>{aRowUser.UserName}</th>
                    <th>{aRowUser.Password}</th>
                    <th>
                      <button onClick={() => this.delectUser(aRowUser.UserID, iIndex)}>刪除</button> 
                      <button>修改</button>
                    </th>
                </tr>
            </tbody>
            );
        });
    }

    addUser(){
        var aUser = {
            Nickname: this.refs.newNickname.value,
            UserName: this.refs.newUserName.value,
            Password: this.refs.newPassword.value,
        }
        aUser.UserID = 123456;
        this.props.addUser(aUser);
        //var a = this.getState();
        // var a = this.store.dispatch;
        this.props.UserList.data.unshift(aUser);
        console.log("props",this.props.dispatch);
        // console.log("a",a);
        console.log("UserList",this.props.UserList.data);
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

function mapStateToProps(state){
    return {
        UserAdd: state.UserAdd,
        UserList: state.UserList,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addUser: addUser
        },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(ContainerUserAdd);
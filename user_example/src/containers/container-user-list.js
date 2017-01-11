import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/index';

class ContainerUserList extends Component {
    createListItems(){
        if(!this.props.UserList.event){
            return null;
        }

        var aUserList = this.props.UserList.data;
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

    delectUser(_iUserID, _iIndex){
        this.props.deleteUser(_iUserID);
        if(!this.props.UserList.event){
            return null;
        }
        this.props.UserList.data.splice(_iIndex, 1);
    }

    render() {
        return (
        <table>
            <tbody>
              <tr>
                <th>暱稱</th>
                <th>帳號</th>
                <th>密碼</th>
                <th>操作</th>
              </tr>
            </tbody>
            {this.createListItems()}
        </table>
        

        );
    }
}

function mapStateToProps(state){
    return {
        UserList: state.UserList,
        UserAdd: state.UserAdd
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {deleteUser: deleteUser},
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(ContainerUserList);
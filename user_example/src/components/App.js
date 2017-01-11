import React from 'react';

// import UserList from '../containers/user-list';
import ContainerUserList from '../containers/container-user-list';
import ContainerUserAdd from '../containers/container-user-add';
// require('../../css');
const App = () => (
	<div>
        <ContainerUserAdd />
        <hr />
		<ContainerUserList />
	</div>
);

export default App;
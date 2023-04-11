import React, {useContext} from 'react';


// import context created
import { AppContext } from '../../pages/useContextPage';



const User = () => {
	const {username} = useContext(AppContext);
	
  return (
    <div className="card btn-wrapper">
      <h3>User:</h3>
      <span>{username}</span>
    </div>
  );
};

export default User;

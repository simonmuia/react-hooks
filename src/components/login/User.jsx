import React, {useContext} from 'react';


// import context created
import { AppContext } from '../../pages/useContextPage';



const User = () => {
	const {username} = useContext(AppContext);
	
  return (
    <div className="card btn-wrapper bg-body-tertiary shadow border-0">
      <div><strong>User:</strong> {username}</div>
    </div>
  );
};

export default User;

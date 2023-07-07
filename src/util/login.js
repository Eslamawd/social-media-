import { useSelector } from 'react-redux';

import { Navigate } from "react-router-dom";



const Login = () => {
  const Conect = (props) => {

      const { user } = useSelector((state)=> state.authReducer.authData);
     
      return user? (
      <Navigate to="home" /> 
      ): (
      <Navigate to="/"/>
      );
  };
  return Conect;
}

export default Login
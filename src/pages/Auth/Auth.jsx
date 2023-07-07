import { useState } from 'react';
import './Auth.css';
import logo from '../../img/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';
import { useNavigate } from 'react-router-dom';


const Auth = () => {


const dispatch = useDispatch();

const [isSignUp, setIsSignUp] = useState(false);

const [confirmPass, setConfirmPass] = useState(true);

const navigate = useNavigate();


  

  

  const [data, setData] = useState(
    {
      firstname: "",
    lastname: "",
    password: "", 
    confirmpass: "", 
    username: "",
    }

  );
  
  
  const handleChange = (e)=> {
    setData({ ...data, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(isSignUp) {
     data.password === data.confirmpass
      ? dispatch(signUp(data))
      : setConfirmPass(false);
    } else {
      dispatch(logIn(data)).then(()=>{
        navigate("home")
      })
      }
     

    };

   


  const restForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
    lastname: "",
    password: "", 
    confirmpass: "", 
    username: "",
    });
  };

  const loading = useSelector((state)=>state.authReducer.loading);



return (
    <div className="Auth">
        <div className="a-left">
            <img src={logo} alt="" />
            <div className="Webname">
              <h1>The King</h1>
              <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <div className="a-right">
          <form className="infoForm authForm" onSubmit={handleSubmit}>


            <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
            {isSignUp && (
            <div>
              <input type="text"
              placeholder="First Name" 
              className="infoInput"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
              />

              <input type="text"
              placeholder="Last Name" 
              className="infoInput"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}/>
            </div>
              )}
              <div>
              <input type="text"
              className="infoInput"
              name="username"
              placeholder="User name" 
              onChange={handleChange}
              value={data.username}/>
            </div>

            
            <div>
              <input type="password"
                className="infoInput"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password} />

              {isSignUp && (
              <input type="password" 
              className="infoInput" 
              name="confirmpass"
              placeholder="confirmpass"
              onChange={handleChange}
              value={data.confirmpass}
               />
              )}
              
            </div>
            <span style={{display: confirmPass? "none" : "block",
              color: "red",
              fontSize: "12px", 
              alignSelf: "flex-end",
              marginRight: "5px",}}>
              ** Confirm password is not same
            </span>
            <div>
              <span style={{ fontSize: "12px", cursor: "pointer",}} onClick={() => { setIsSignUp((prev)=>!prev); restForm() }}>
                {isSignUp ? "Already have an account. Login" : "Don't have an account? Sign Up"}
                </span>
              </div>
            <button className="button infoButton" type="submit" >
              {loading ?( "loding..."): (isSignUp ? "Signup" : "Log In")}
              </button>
          </form>
        </div>
    </div>
  
  ) 

  
}



export default Auth;
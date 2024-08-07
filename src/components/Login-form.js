import React, { useState } from 'react';
import frame1 from '../images/frame.svg'
import logo2 from '../images/Logo.svg'
// import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    // const navigate = useNavigate();
    const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isRemeberRules, setIsRemeberRules] = useState(false);
  
    const handleSubmit = (e) => {
      // e.preventDefault();
      // if (onLogin({ username, password, mobile })) {
      //   navigate('/');  // Redirect to HomePage after successful login
      // }
      e.preventDefault();
      if (isTermsChecked && isRemeberRules) {
        const data = { username, password, mobile };
        onLogin(data);
      } 
      else if (!isTermsChecked && !isRemeberRules) {
        alert(' Please agree to the terms and conditions and Remember Rules.');
      }
      else if (!isRemeberRules) {
        alert('Please agree to the isRemeberRules.');
      }
      else   {
        alert('Please agree to the terms and conditions.');
      }
    };
    return(
        <section className="log-sec">
        <div className="container">
          <div className="row row-gap-20">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 hidden">
              <div className="bg-color hei-100">
                <img src={frame1} alt="img" className="max-width img-vector"/>
            </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 mx-auto">
              <div className="logo">
                <a href="#">
                  <img src={logo2} alt="logo" className="max-width"/>
                </a>
              </div>
              <div className="content">
                <h1>Log in account</h1>
                <p>Enter your Credentials to access your account</p>
              </div>
              <form className="form" onSubmit={handleSubmit} >
                <div className="input-main">
                  <label>Email and user name</label>
                  <input type="text"   value={username}
            onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-main">
                  <label>password</label>
                  <input type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-main">
                  <label>mobile No.</label>
                  <input type="text"  value={mobile}
            onChange={(e) => setMobile(e.target.value)}/>
                </div>
                <div className="cheak-main justify-between">
                  <div className="remember">
                    <input type="checkbox"   checked={isRemeberRules} 
          onChange={() => setIsRemeberRules(!isRemeberRules)}  />
                    <p>Remember Rules</p>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>
                <div className="cheak-main">
                  <input type="checkbox" checked={isTermsChecked} 
          onChange={() => setIsTermsChecked(!isTermsChecked)}  />
                  <p>
                    I agree to all the <a href="#" className="rules">Terms</a> and
                    <a
                      href="#"
                      className="rules"
                      >Privacy policy</a>
                  </p>
                </div>
                <div className="button-main flex-wrap-r">
                  <input type="submit"/>
                  <input type="reset" className="reset" />
                </div>
              </form>
              <div className="other-main">
                <p>don't Have an account?<a href="#" className="sign-up"> Sign up</a></p>
              </div>
              <div className="or-main">
                <span></span>
                <p>Or</p>
                <span></span>
              </div>
              <div className="other-accound flex-wrap-r">
                <div className="google">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="36"
                      height="36"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    Sign in with Google</a>
                </div>
                <div className="facebook">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="36"
                      height="36"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#1F64FF"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      ></path>
                    </svg>
                    Sign in with facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Login;
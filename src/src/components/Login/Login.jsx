import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const styles = {
    formstyle: {
      margin: "20px auto",
      padding: "20px",
      border: "1px solid black",
      textAlign: "center",
      width: "40%"
    },
    legend: {
      textAlign: "center",
      margin: "20px",
      fontSize: "20px",
      fontWeight: "600",
      color: "green"
    },
    block: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      padding: "0px 40px",
    },
    input: {
      width: "200px",
      height: "25px",
      outline: "none",
      borderRadius: "10px",
      border: "1px solid black"
    },
    button: {
      background: "green",
      color: "white",
      padding: "10px 20px",
      borderRadius: "20px",
      opacity: "0.7",
      margin: "20px auto"
    }
  };

  const [data, setData] = useState({
          password:'',
          email: ''
      });

   // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //    const username=document.getElementById("username").value;
  //    const password=document.getElementById("password").value;
  //    if (localStorage.getItem(username) !== null) {
  //     if(localStorage.getItem(username)==password){
  //       navigate("/layout");
  //     }
  //     else{
  //       setErrorPassword("Password invalid");
  //     }
  // } else {
  //     setErrorUsername("No User Exist");
  // } 
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password
      });
  
      console.log(response.data);
  
      if (response.data.success) {
        alert('Login Successful!');
        // localStorage.setItem('token', response.data.token);
        toast.success('Login Successful!');
        navigate(`/layout/tasks/${email}`);

      }
    } catch (err) {
      if (err.response) {

        toast.error(err.response.data.message);
        setErrorMessage(err.response.data.message || 'Server error occurred');
      } else if (err.request) {
        setErrorMessage('No response from server. Check network or server status.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };
  
  
  return (
    <div>
      <ToastContainer />
      <form style={styles.formstyle} onSubmit={handleSubmit}>
        <legend style={styles.legend}>Login Here</legend>

        <div className='block' style={styles.block}>
          <label htmlFor="email">Enter Email</label>
          <div className="subblock">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
        </div>

        <div className='block' style={styles.block}>
          <label htmlFor="password">Enter Password</label>
          <div className="subblock">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
        </div>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type="submit" style={styles.button}>Login</button>

        <div className="reg">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;

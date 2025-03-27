import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const navigate = useNavigate();

    const styles = {
        formstyle: {
            margin: "40px auto",
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
            margin: "20px auto",
            cursor: "pointer"
        },
        textarea: {
            width: "200px",
            height: "100px",
            outline: "none",
            borderRadius: "10px",
            border: "1px solid black"
        }
    };

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        address: '',
        email: ''
    });

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(data);
          try {
              const response = await axios.post("http://localhost:8080/register", data);
              
              if (response.data.success) {
                  alert("Registration successful!");
                  navigate("/"); 
              } else {
                  alert("Registration failed! Please try again.");
              }
          } catch (error) {
              console.error("Error submitting form:", error);
              alert("An error occurred. Please try again later.");
          }
      };
   

    return (
        <>
            <form style={styles.formstyle} onSubmit={handleSubmit}>
                <legend style={styles.legend}>Register Here</legend>

                <div className="block" style={styles.block}>
                    <label htmlFor="firstname">Enter Firstname*</label>
                    <input type="text" name="firstName" id="firstName" style={styles.input} required onChange={handleInput}/>
                </div>

                <div className="block" style={styles.block}>
                    <label htmlFor="lastname">Enter Lastname*</label>
                    <input type="text" name="lastName" id="lastName" style={styles.input} required onChange={handleInput}/>
                </div>

                <div className="block" style={styles.block}>
                    <label htmlFor="email">Enter Email*</label>
                    <input type="email" name="email" id="email" style={styles.input} required onChange={handleInput}/>
                </div>

                <div className="block" style={styles.block}>
                    <label htmlFor="contact">Enter Contact*</label>
                    <input type="text" name="contact" id="contact" style={styles.input} required onChange={handleInput}/>
                </div>

                <div className="block" style={styles.block}>
                    <label htmlFor="address">Enter Address</label>
                    <textarea name="address" id="address" style={styles.textarea} onChange={handleInput}></textarea>
                </div>

                <button type="submit" style={styles.button}>Register</button>

                <div className="reg">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </>
    );
}

export default Register;

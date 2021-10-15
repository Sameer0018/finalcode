import React , {useEffect, useState } from 'react'
import '../css/Signup.css';
import instance from '../requests/instance';
// import mongoose from 'mongoose'

const Contact = () => {
   

    const [userData, setUserData] = useState({name:"", email:"",phone:"",message:""});

    const userContact = async () => {
      try {
         
        const res = await fetch('http://localhost:5000/getdata', {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-type": "application/json"
                
            },
            credentials:"include"
        });
        

        const data = await res.json();
        console.log(data);
        setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }
        
      }catch (err) {
         console.log(err);
         
      }
    }
    useEffect(() => {
        userContact();
    }, []);


    // we are storing data in states
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value })
    }

    // send the data to backend
    const ContactForm = async (e) => {
        e.preventDefault();

        const {name, email, phone, message} = userData;

        
            const res =  await instance.post("/contact", { name, email, phone, message  })
    
    
            const data =  res.data;
    
            if (!data) {
                console.log("messgae not send")
            } else {
                window.alert("Message send");
                setUserData({...userData, message:""})
                
            }
    
           
        }
    



    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Contact Form</h2>
                </div>
                <form method="POST" className="form-wrapper">
                    <div className="name">
                        <label className="label">User Name</label>
                        <input className="input" type="text" name="name" value={userData.name} onChange={handleInputs}/>
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={userData.email} onChange={handleInputs}/>
                    </div>

                    <div className="name">
                        <label className="label">Number</label>
                        <input className="input" type="number" name="phone" value={userData.phone} onChange={handleInputs}/>
                    </div>

                    <div className="name">
                        <label className="label">Message</label>
                        <input className="input" type="text" name="message" value={userData.message} onChange={handleInputs}/>
                    </div>

                    
                    <div>
                        <button className="submit" onClick={ContactForm}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact


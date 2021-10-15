import React, { useEffect, useState } from 'react'
import instance from '../requests/instance';
import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import "../css/About.css"
// import EmailIcon from '@mui/icons-material/Email';



const About = () => {
    

    const history = useHistory();

    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
      try {
         
        const res = await fetch('http://localhost:5000/about', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                
            },
            credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }
        
      }catch (err) {
         console.log(err);
         history.push('/login');
      }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    
    return (
        <>
            <div className="profile-card">
                <form method="">
                    <div className="title">
                        <h2>Profile</h2><hr/>
                        <h2>{userData.name}</h2><hr/>
                    </div>
                    <div className="main-conatiner">
                    <label>Coins: 0</label><hr/>
                    <label>User ID: {userData._id}</label><hr/>
                    <label>Name: {userData.name}</label><hr/>
                    <label>Email: {userData.email}</label><hr/>
                    <label>Phone no.: {userData.phone}</label><hr/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
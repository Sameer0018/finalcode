import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Header from './components/Header'
import Showcase from '../components/Home/Showcase'
import Destinations from '../components/Home/Destination'
import Footer from '../components/Home/Footer'
//import Login from './components/Login.js'
//import SignUp from './components/SignUp'
// import Error from './components/Error';
import FlowOfSite from '../images/FlowOfSite.png';
import '../css/Home2.css';
//import ImageSlider from './components/ImageSlider';
//import { SliderData } from './components/SliderData';
//import image2 from './assets/image-2.jpg';
import Show2 from '../components/Home/Show2';
import '../css/Home.css'

function Home() {
  return (
    <Router>
	{/* <Header /> */}


      <Switch>
        <Route exact path='/'>
        <Showcase />
        <Show2 />
        {/* <center><h2 style={{color:"green"}}>    4 Steps site works !</h2></center>
        <img style={{paddingLeft:"250px", height:"500px", width:"900px"}} src={FlowOfSite} alt='destination-1' />
        */}
        <Destinations />
      
        {/*<ImageSlider slides={SliderData} />*/}
       
{/*       
        <div style={{padding:"50px"}}>
         <b><p> “If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled,
			or composted, then it should be restricted, designed or removed from production.”
           – Pete Seeger, Social Activist</p></b>
 </div> */}

          </Route>
        {/* </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>}*/}
        <Route path='*'>
          {/* <Error /> */}
        </Route>
      </Switch>
      
<Footer/>
    </Router>
  )
}

export default Home

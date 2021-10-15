import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import Login from './components/Login';
import Navbar from "./components/Navbar"
import Signup from './components/Signup';
// import Footer from './components/Home/Footer';
import Dropdown from './components/Categories/Dropdown'
import Logout from './components/Logout'
import { initialState, reducer } from '../src/reducer/UseReducer'

// contextApi
export const UserContext = createContext();

const Routing = () => {
   return (
      <>
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/categories">
               <Dropdown/>
            </Route>

            <Route path="/about">
               <About />
            </Route>

            <Route path="/contact">
               <Contact />
            </Route>

            <Route path="/login">
               <Login />
            </Route>

            <Route path="/signup">
               <Signup />
            </Route>
            <Route path="/logout">
               <Logout />
            </Route>
         </Switch>
      </>
   )
}

const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (

      <>
         <UserContext.Provider value={{ state, dispatch }}>
            <Navbar />
            <Routing />
         </UserContext.Provider>

         {/* <Footer/> */}


      </>
   )
}

export default App
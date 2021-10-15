import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import data from './data.json';
import instance from "../../requests/instance";
//import './Dropdwon.css'

function Dropdown() {
  const history = useHistory();
	
  const callCategoriesPage = async () => {
  try {
     
    const res = await fetch('http://localhost:5000/categories', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        
      },
      credentials:"include"
    });

    const data = await res.json();
    console.log(data);
  //   setUserData(data);

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
      callCategoriesPage();
  }, []);

  const [userData, setUserData] = useState({name:"", email:"",phone:"", address:"", quantity:"", pickupdate:"", pickuptime:"" });

    const userCategorie = async () => {
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
        userCategorie();
    }, []);

    
    // we are storing data in states
    const handleInputs = (e) => {
      console.log(e)
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value })
    }


  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  // const [link, setLink] = useState("");

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    console.log(obj , 'country ')
    setCountry(obj);
    setLangList(obj.languages);
    setLang(null);
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    console.log(obj , 'lan ')
    setLang(obj);
  };
  
  // generate the link when both dropdowns are selected
  // useEffect(() => {
  //   if (country && lang) {
  //     setLink(`https://www.${country.url}/search?q=Clue+Mediator&gl=${country.country_code}&hl=${lang.code}`);
  //   }
  // }, [country, lang]);

  //post the data
  const CategoriesForm = async (e) => {
    e.preventDefault();

    const {name, email, phone,address,waste, material, quantity, pickupdate, pickuptime } = userData;

    
        const res =  await instance.post("/categories", { name, email, phone, address,waste  : country.name, material : lang.name, quantity, pickupdate, pickuptime })


        const data =  res.data;

        if (!data) {
            console.log("messgae not send")
        } else {
            window.alert("Request send");
            setUserData({...userData, address:"" ,waste:"" , material:"" , quantity:"" , pickupdate:"" , pickuptime:""})          
            
        }

       
    }


  return (
    <div className="App">
      {/* <h3>Cascading dropdown in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3> */}
      <div style={{ width: 400, marginBottom: 20 }}>
        <div>
          <label className="label">Full Name : </label>
          <input className="input" type="text" name="name"  value={userData.name} onChange={handleInputs} />
        </div>

        <div>
          <label className="label">Email : </label>
          <input className="input" type="email" name="email"  value={userData.email} onChange={handleInputs}/>
        </div>

        <div>
          <label className="label">Number : </label>
          <input className="input" type="number" name="phone"  value={userData.phone} onChange={handleInputs}/>
        </div>


        <div>
          <label className="label">Address : </label>
          <input className="input" type="text" name="address" value={userData.address} onChange={handleInputs}/>
        </div>

        <div className="qq">
          <label>Waste Type :</label>
          <Select
            placeholder="Select Country"
            name = "country"
            value={country}
            options={data}
            onChange={handleCountryChange}
            getOptionLabel={x => x.name}
            getOptionValue={x => x.country_code}
          />
        </div>
        
        <div className="q">
          <label>Material Type : </label>
          <Select
            placeholder="Select Language"
            name = "language"
            value={lang}
            options={langList}
            onChange={handleLanguageChange}
            getOptionLabel={x => x.name}
            getOptionValue={x => x.code}
          />
        </div>

        <div>
          <label> Quantity: </label>
          <input type="quantity" name="quantity" placeholder="Approx" id="Plastics" value={userData.quantity} onChange={handleInputs}/>
        </div>

        <div>
          <label>Date for pickup : </label>
          <input type="date" name="pickupdate" required id="Plastics" value={userData.pickupdate} onChange={handleInputs}/>
        </div>

        <div id="sam">
          <label>Slots to pickup :</label>
          <select name="pickuptime" id="Plastics" required value={userData.pickuptime} onChange={handleInputs}>
            <option>--Select a Type--</option>
            <option value="9am-12pm">9am-12pm</option>
            <option value="1pm-6pm">1pm-6pm</option>

          </select>
        </div>

        <div>
          <button className="submit" onClick={CategoriesForm}>Send</button>

        </div>





      </div>
      {/* <span><b>Link:</b> {country && lang ? link : '-'}</span> */}
    </div>
  );
}

export default Dropdown;
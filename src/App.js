import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import FormCard from './components/FormCard';
import WebsiteNavbar from './components/Navbar';

function App() {
  ///https://api.globalgiving.org/api/public/projectservice/themes?api_key=${apiKey}
  ///https://api.globalgiving.org/api/public/services/search/projects?api_key=${apiKey}&q=pakistan+flood
  let apiKey = process.env.REACT_APP_API_KEY
  const [formData, setFormData] = useState({})
  const [searchData, setSearchData] = useState()
  const [searchDataCards, setSearchDataCards] = useState()

  // useEffect(() =>{
  //   axios.get(`https://api.globalgiving.org/api/public/projectservice/countries/US/projects/active?api_key=${apiKey}`)
  //   .then(res => console.log(res))
  // }, [])
  useEffect(() =>{
    if(searchData){
      setSearchDataCards(searchData.map(prevData => {
        return <FormCard contactAddress2={prevData.contactAddress2} contactAddress={prevData.contactAddress} activities={prevData.activities} title={prevData.title} contactCity={prevData.contactCity} contactState={prevData.contactState} contactURL={prevData.contactUrl} />
      }))      
    }


    // searchData?.map(prevData => {
    //   setSearchDataCards(<FormCard title={prevData.title} contactCity={prevData.contactCity} contactState={prevData.contactState} contactURL={prevData.contactURL} />)
    // })
  }, [searchData])

  function changeFormInput(e){
    setFormData((prevFormData) =>({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))

  }

  function submitForm(e){
    e.preventDefault()

    axios.get(`https://api.globalgiving.org/api/public/projectservice/countries/US/projects/active?api_key=${apiKey}&q=${formData.name}`)
    .then(res => {
      res = res.data.projects.project
      setSearchData(res)
    })
  }
  console.log(searchData)

  return (
    <div className="App">
      <WebsiteNavbar />

      <form onSubmit={submitForm}>
        <input name='name' type="text" onChange={changeFormInput} />

        <button type="submit">Submit</button>
      </form>

      <div className='grid-container'>
        {searchDataCards}
      </div>

    </div>
  );
}

export default App;

import {useEffect, useState} from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  //const [data, setData] = useState([])

  //useEffect(() => {
  //  fetchData(import.meta.env.VITE_API_URL)
  //}, [])

  const fetchData = async (url) => {
    const data = await fetch(url)
    const json = await data.json()

    setData(json)
  }

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Outlet />
      </div>

    </div>
  )
}

export default App

import {useEffect, useState} from "react"


export const useFetch = (url) => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    consultarAPI(url);
  }, [url])

  const consultarAPI = async (url) => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }


  return {
    data,
    error,
    loading
  }
}

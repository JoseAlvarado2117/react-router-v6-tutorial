import React from "react"
import {useParams} from "react-router-dom"
import {useFetch} from "../hooks/useFetch"



const Post = () => {

  const { id } = useParams()

  const url = `${import.meta.env.VITE_API_URL}/${id}`;

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error !== null) {
    return <h2>{error}</h2>
  }

  console.log(data)

  return (
    <>
      <h2>{data.id} - {data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}

export default Post

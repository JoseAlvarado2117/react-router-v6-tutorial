import React, {useEffect} from "react"
import {Link, useSearchParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";


import './Blog.css';


const url = import.meta.env.VITE_API_URL;

const Blog = () => {

  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error, loading } = useFetch(url)

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error !== null) {
    return <h2>{error}</h2>
  }


  const handleChange = e => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        placeholder="Buscar por titulo"
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
      />

      <div className="lista-posts">
        {
          data
            .filter(item => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = item.title.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(item => (
            <div className="post" key={item.id}>
              <h3>
                <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
              </h3>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Blog

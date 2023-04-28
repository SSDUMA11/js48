import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    },[])

  return (
    <>
    <h1>Posts</h1>
    <div className='news-body'>
     {
        posts.map(item => (
        <Link key={item.id} to={`/posts/${item.id}`}>
            <li>{item.title}</li>
        </Link>))
     }
    </div>
    </>)}


export default Posts
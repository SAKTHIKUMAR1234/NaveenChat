import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import { useSelector } from 'react-redux'


const Posts = () => {

  const posts_lists = useSelector((state) => {
    return state.posts.recommended_posts;
  })

  console.log(posts_lists)

  function isDateTimeLessThanOrEqualToCurrent(dateTimeString) {
    const dateTime = new Date(dateTimeString);
  
    const currentDateTime = new Date();
  
    return dateTime <= currentDateTime;
  }

  const sortedPosts = [...posts_lists].sort((post1, post2) => {
  const time1 = new Date(post1.scheduledTime);
  const time2 = new Date(post2.scheduledTime);
  return time1 - time2;
});

  return (
    <div className="Posts">
        {sortedPosts.map((post, id)=>{
            if(isDateTimeLessThanOrEqualToCurrent(post.scheduledTime)){
              return <Post data={post} id={id}/>
            }
        })}
    </div>
  )
}

export default Posts
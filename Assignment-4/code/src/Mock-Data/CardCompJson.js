import React, { useEffect, useState } from "react";
// import Data from './data'
import More from "./Images/more.png"
import Tag from "./Images/tag.png"
import Heart from "./Images/heart.png"
import axios from "axios"
 

const CardCompJs = () => {

  const [posts, setPost]   = useState([]);

  React.useEffect(() => {
      axios.get('http://localhost:3004/user')
      .then(res => {
          setPost(res.data)
          console.log(res.data)
          console.log(posts)
      });
  },);
  
  const date=new Date().toLocaleDateString()
    return (
        
        posts.map(person => {
          return (
            
            <div className="site-container">
              
              <div className='card'>
                  <div className='head'>
                  <div className='info'>
                  <div className='name'><b>{person.name}</b></div>
                  <div className='location'>{person.location}</div>
                 
                  </div>
                  <div className="more"><img src={More} alt="more"/></div>
                  </div>
                  <div className="image"><img src={"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"} alt='10x img'/></div>
                  <div className='InFo_Cont'>
                    <div className='liketag'>
                      <div className='heart'><img src={Heart} alt="heart"/></div>
                      <div className='tag'><img src={Tag} alt="tag"/></div>
                      
                    </div>
                    <div className='dateT'>{date}</div>
                  </div>
                  <div className='decrep'>
                  <div className='likes'>{person.likes} likes</div>
                  <div className='description'><b>{person.description}</b></div>
                  </div>
               
                </div>
            </div>
          )
        })
    )
  
}

export default CardCompJs

  


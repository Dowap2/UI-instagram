import React, { useState } from 'react';
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'
import {FollowModal} from './FollowModal'
import axios from 'axios'

import './CSS/Header.css'
import './CSS/Story.css'
import './CSS/Post.css'
import './CSS/SideBar.css'

import example from './IMG/example.jpg'
import profile from './IMG/profile.jpg'
import heart from './ICON/heart.png'
import fill_heart from './ICON/fill_heart.png'
import send from './ICON/send.png'
import more from './ICON/more.png'
import comment from './ICON/comment.png'
import bookmark from './ICON/bookmark.png'
import { getByText } from '@testing-library/dom';

export function ContentHome() {
  const [modal , setModal] = useState("none")
  const [addPost , setAddPost] = useState([])
  const [userText , setUserText] = useState("")
  const [postID , setPostID] = useState(0)
  let userName = "DRX_Deft"

  function getFunc(){
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/',
      responseType: 'json'
    })
    .then(response => {
      console.log(response.data)
      addPostFunc(response.data.results)
    }).catch(err => {
      console.log(err)
    })
  }
  function addPostFunc(data){
    if(data != undefined){
      console.log(data[0].picture.large)
      const post = <Post
      more={more} profile={data[0].picture.large} userName={data[0].email} userText={userText}
      img={"https://picsum.photos/200/300?random="+{postID}}
      heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
      />
      const array = addPost.concat(post)
      setAddPost(array)
      setPostID(postID+1)
    }
  }
  function getPicture(){
    axios({
      method: 'get',
      url: "https://source.unsplash.com/random/800x800",
      responseType: 'link'
    })
    .then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="content__home">
      <FollowModal open={modal} setOpen={setModal}/>
        <div className="content__main">
          <div className="story">
            <Story profile={profile}/>
            <input type="button" value="post" id="btnPost" onClick={e=> getFunc()}/>
            <input type="button" value="getPicture" id="btnPost" onClick={e=> getPicture()}/>
            <input type="button" value="addPost" id="btnPost" onClick={e=> console.log(addPost)}/>
          </div>
          <div>
            {addPost}
          </div>
        </div>
        <div className="side-bar">
          <SideBar profile={profile} modal={modal} setModal={setModal}/>
        </div>
    </div>
  );
}

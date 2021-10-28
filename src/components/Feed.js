import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Feed.css';
import FlipMove from 'react-flip-move';
import { fetchPosts, createPost } from '../state/action-creators';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

function Feed() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const posts = useSelector(state => state.posts);
  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);
  const sendPost = async e => {
    e.preventDefault();
    dispatch(createPost(input, user.name, user.email, user.photoURL));
  };

  const postsList = posts.postsArr.map(
    ({ id, data: { name, description, message, photoURL } }) => (
      <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoURL={photoURL}
      />
    )
  );

  return (
    <div className='feed'>
      {posts.error && <h4 style={{ color: 'darkred' }}>{posts.error}</h4>}
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption title='Photo' color='#70b5f9' Icon={ImageIcon} />
          <InputOption title='Video' color='#e7a33e' Icon={SubscriptionsIcon} />
          <InputOption title='Event' color='#c0cbcd' Icon={EventNoteIcon} />
          <InputOption
            title='Write article'
            color='#7fc15e'
            Icon={CalendarViewDayIcon}
          />
        </div>
      </div>
      <FlipMove>{postsList}</FlipMove>
    </div>
  );
}

export default Feed;

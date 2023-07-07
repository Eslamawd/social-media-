import './Posts.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTimeLinePosts } from '../actions/postAction';

const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData);
  const {posts, loading} = useSelector((state)=> state.postReducer);

  useEffect(()=> {
    dispatch(getTimeLinePosts(user._id));
  });
  return (

    <div className="Posts">
    {loading? "Featching Posts..." : 
    posts.map((post, id)=>{
      return <Post data={post} id={id} />;

    })}

        
    </div>
  );
}

export default Posts;
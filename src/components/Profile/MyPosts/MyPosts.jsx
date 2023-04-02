import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Добавить пост</button>
      </div>
      <Post message ='How are you?' likecount = '20'/>
      <Post message ='I am fine!' likecount = '15'/>
    </div>
  )
}

export default MyPosts;
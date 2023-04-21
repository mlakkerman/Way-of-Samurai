import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { post: 'How are you?', likecount: '20' },
    { post: 'I am fine!', likecount: '15' },
  ]
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.posts}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Добавить пост</button>
        </div>
      </div>
      <Post message={posts[0].post} likecount={posts[0].likecount} />
      <Post message={posts[1].post} likecount={posts[1].likecount} />
    </div>
  )
}

export default MyPosts;
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
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
      {props.posts.map(p => <Post id={p.id} message={p.post} likecount={p.likecount} />
      )}
    </div>
  )
}

export default MyPosts;
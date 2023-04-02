import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img className={s.img} src="https://e7.pngegg.com/pngimages/831/88/png-clipart-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design.png" />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;
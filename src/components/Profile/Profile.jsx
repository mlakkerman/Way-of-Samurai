import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://get.wallhere.com/photo/galaxy-space-nebula-atmosphere-universe-astronomy-outer-space-astronomical-object-96247.jpg" alt="" />
      </div>
      <div className={s.item}>
        ava+description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;
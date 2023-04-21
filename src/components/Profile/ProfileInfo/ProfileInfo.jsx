import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://get.wallhere.com/photo/galaxy-space-nebula-atmosphere-universe-astronomy-outer-space-astronomical-object-96247.jpg" alt="" />
      </div>
      <div className={s.item}>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;
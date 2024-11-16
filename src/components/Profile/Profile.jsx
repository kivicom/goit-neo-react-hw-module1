import style from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style['main-info']}>
        <img className={style.avatar} src={image} alt={name} />
        <p className={style['text-bold']}>{name}</p>
        <p className={style['text-secondary']}>@{tag}</p>
        <p className={style['text-secondary']}>{location}</p>
      </div>
      <ul className={style['stats-list']}>
        <li className={style['stats-item']}>
          <span>Followers</span>{' '}
          <span className={style['text-bold']}>{stats.followers}</span>
        </li>
        <li className={style['stats-item']}>
          <span>Views</span>{' '}
          <span className={style['text-bold']}>{stats.views}</span>
        </li>
        <li className={style['stats-item']}>
          <span>Likes</span>{' '}
          <span className={style['text-bold']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
